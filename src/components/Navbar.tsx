import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react'
import './Navbar.css'
import { PORTFOLIO_CONFIG } from '../config'

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      <div className="navbar-container container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <span className="logo-accent">{PORTFOLIO_CONFIG.name.split(' ')[0]}</span>
          <span className="logo-dot">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-only">
          {['about', 'projects', 'skills', 'services', 'contact'].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button onClick={() => scrollToSection(item)}>
                {item === 'about' ? 'Sobre Mí' : 
                 item === 'projects' ? 'Proyectos' : 
                 item === 'skills' ? 'Habilidades' : 
                 item === 'services' ? 'Servicios' : 'Contacto'}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Tablet/Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu glass"
            >
              <ul>
                {['about', 'projects', 'skills', 'services', 'contact'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item)}>
                      {item === 'about' ? 'Sobre Mí' : 
                       item === 'projects' ? 'Proyectos' : 
                       item === 'skills' ? 'Habilidades' : 
                       item === 'services' ? 'Servicios' : 'Contacto'}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mobile-socials">
                <a href={PORTFOLIO_CONFIG.social.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href={PORTFOLIO_CONFIG.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                <a href={PORTFOLIO_CONFIG.social.twitter} target="_blank" rel="noreferrer"><Twitter size={20} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
