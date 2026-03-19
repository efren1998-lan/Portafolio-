import { useEffect, useState } from 'react'
import './App.css'
import SiteHeader from './components/SiteHeader.tsx'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="app">
      <SiteHeader isScrolled={isScrolled} />
    </div>
  )
}
export default App
