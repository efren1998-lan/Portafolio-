import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
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
      <Navbar isScrolled={isScrolled} />
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
