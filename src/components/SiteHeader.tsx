import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react'
import './SiteHeader.css'
import { PORTFOLIO_CONFIG } from '../config'

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrollPct, setScrollPct] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollPct}%` }}
      />
      <div className="navbar-container container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo" 
          onClick={() => scrollToSection('home')}
        >
          <span className="logo-accent">{PORTFOLIO_CONFIG.name.split(' ')[0]}</span>
          <span className="logo-dot">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-only">
          {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <button onClick={() => scrollToSection(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu glass"
            >
              <ul>
                {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item)}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
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
