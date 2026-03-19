import { useEffect, useState } from 'react'
import './App.css'
import SiteHeader from './components/SiteHeader.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Services from './components/Services.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import CustomCursor from './components/CustomCursor.tsx'

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
      <CustomCursor />
      <SiteHeader isScrolled={isScrolled} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
