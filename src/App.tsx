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
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Dynamic background shift
  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#050505', '#0a0a10', '#0a0a0a', '#050505']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div className="app" style={{ backgroundColor: background }}>
      <CustomCursor />
      <SiteHeader isScrolled={isScrolled} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App
