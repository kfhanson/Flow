module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          panel: 'var(--bg-panel)',
          elevated: 'var(--bg-elevated)',
        },
        text: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
        },
        brand: {
          red: 'var(--brand-red)',
          redSoft: 'var(--brand-red-soft)',
        },
        border: {
          strong: 'var(--border-strong)',
        },
      },
    },
  },
  plugins: [],
}
