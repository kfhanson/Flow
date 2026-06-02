/**
 * Range-request shim for video assets.
 *
 * Cloudflare Workers static assets always respond 200 with the full body and
 * ignore the HTTP `Range` header. Safari and iOS refuse to play <video> from
 * servers that do not return `206 Partial Content`, so hero/support videos
 * render as blank there. Requests matched by `assets.run_worker_first` in
 * wrangler.jsonc land here instead, and this worker slices the asset into a
 * proper 206 response.
 */
export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return env.ASSETS.fetch(request)
    }

    // Always fetch the full asset; the binding ignores Range anyway.
    const headers = new Headers(request.headers)
    headers.delete('Range')
    const response = await env.ASSETS.fetch(
      new Request(request.url, { method: 'GET', headers }),
    )

    const contentType = response.headers.get('Content-Type') ?? ''
    if (!response.ok || !contentType.startsWith('video/')) {
      return response
    }

    const buffer = await response.arrayBuffer()
    const total = buffer.byteLength

    const outHeaders = new Headers(response.headers)
    outHeaders.set('Accept-Ranges', 'bytes')

    if (request.method === 'HEAD') {
      outHeaders.set('Content-Length', String(total))
      return new Response(null, { status: 200, headers: outHeaders })
    }

    const range = request.headers.get('Range')
    const match = range ? /^bytes=(\d*)-(\d*)$/.exec(range.trim()) : null
    if (!match || (match[1] === '' && match[2] === '')) {
      outHeaders.set('Content-Length', String(total))
      return new Response(buffer, { status: 200, headers: outHeaders })
    }

    let start
    let end
    if (match[1] === '') {
      // Suffix form: bytes=-N means the final N bytes.
      start = Math.max(total - Number(match[2]), 0)
      end = total - 1
    } else {
      start = Number(match[1])
      end = match[2] === '' ? total - 1 : Math.min(Number(match[2]), total - 1)
    }

    if (start >= total || start > end) {
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': `bytes */${total}` },
      })
    }

    const chunk = buffer.slice(start, end + 1)
    outHeaders.set('Content-Range', `bytes ${start}-${end}/${total}`)
    outHeaders.set('Content-Length', String(chunk.byteLength))
    return new Response(chunk, { status: 206, headers: outHeaders })
  },
}
