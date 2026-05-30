import { Route, Routes } from 'react-router-dom'
import SiteHeader from './components/shell/SiteHeader'
import HomePage from './pages/HomePage'
import SupportPage from './pages/SupportPage'

function App() {
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
