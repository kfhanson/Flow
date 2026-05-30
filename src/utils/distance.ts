export function distanceInKm(
  from: { latitude: number; longitude: number },
  to: { latitude: number; longitude: number },
) {
  const earthRadiusKm = 6371
  const latDelta = degreesToRadians(to.latitude - from.latitude)
  const lonDelta = degreesToRadians(to.longitude - from.longitude)
  const fromLat = degreesToRadians(from.latitude)
  const toLat = degreesToRadians(to.latitude)

  const a =
    Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
    Math.cos(fromLat) *
      Math.cos(toLat) *
      Math.sin(lonDelta / 2) *
      Math.sin(lonDelta / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadiusKm * c
}

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180
}
