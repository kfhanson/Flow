import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteHeader from './components/shell/SiteHeader'
import HomePage from './pages/HomePage'
import SupportPage from './pages/SupportPage'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    if (!id) return

    const rafId = window.requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(rafId)
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-full bg-bg-primary">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </div>
  )
}

export default App
