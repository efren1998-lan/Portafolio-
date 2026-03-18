import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Download, ChevronRight, Github, Linkedin, Twitter, Code2, Layers } from 'lucide-react'
import './Hero.css'
import { PORTFOLIO_CONFIG } from '../config'

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: any

    const handleType = () => {
      const current = texts[index]
      
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1))
        
        if (displayText.length === current.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500)
        } else {
          timeout = setTimeout(handleType, 100)
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1))
        
        if (displayText.length === 0) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
          timeout = setTimeout(handleType, 500)
        } else {
          timeout = setTimeout(handleType, 50)
        }
      }
    }

    timeout = setTimeout(handleType, 100)
    return () => clearTimeout(timeout)
  }, [isDeleting, index, texts.join(',')]) // Use joined string to avoid dependency loop with array literal

  return <span className="typewriter-text">{displayText}<span className="cursor">|</span></span>
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const blob1X = useTransform(mouseXSpring, [-500, 500], [-80, 80])
  const blob1Y = useTransform(mouseYSpring, [-500, 500], [-80, 80])
  const blob2X = useTransform(mouseXSpring, [-500, 500], [80, -80])
  const blob2Y = useTransform(mouseYSpring, [-500, 500], [80, -80])
  const blob3X = useTransform(mouseXSpring, [-500, 500], [-30, 30])
  const blob3Y = useTransform(mouseYSpring, [-500, 500], [30, -30])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    mouseX.set(moveX)
    mouseY.set(moveY)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const cardRotateX = useTransform(mouseYSpring, [-500, 500], [10, -10])
  const cardRotateY = useTransform(mouseXSpring, [-500, 500], [-10, 10])

  return (
    <section id="home" className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-background">
        <motion.div style={{ x: blob1X, y: blob1Y }} className="blob blob-1"></motion.div>
        <motion.div style={{ x: blob2X, y: blob2Y }} className="blob blob-2"></motion.div>
        <motion.div style={{ x: blob3X, y: blob3Y }} className="blob blob-3"></motion.div>
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-greeting" variants={itemVariants}>
            Hola, soy
          </motion.span>
          
          <motion.h1 className="hero-name gradient-text" variants={itemVariants}>
            {PORTFOLIO_CONFIG.name}
          </motion.h1>
          
          <motion.div className="hero-title" variants={itemVariants}>
            <TypewriterText texts={[
              'IA & Automatización',
              'Ingeniero de Datos',
              'Full Stack Developer',
              'Cloud Solutions Architect'
            ]} />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            {PORTFOLIO_CONFIG.about.summary}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              Ver Mis Proyectos
              <ChevronRight size={20} />
            </a>
            <a href="/cv.pdf" className="btn btn-outline" download>
              Descargar CV
              <Download size={20} />
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href={PORTFOLIO_CONFIG.social.github} className="social-icon" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href={PORTFOLIO_CONFIG.social.linkedin} className="social-icon" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
            <a href={PORTFOLIO_CONFIG.social.twitter} className="social-icon" target="_blank" rel="noreferrer">
              <Twitter size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="profile-card glass"
            style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
          >
            <div className="profile-image-wrapper">
              <img src="/assets/photo.jpg" alt={PORTFOLIO_CONFIG.name} className="profile-image" />
              <div className="profile-glow"></div>
            </div>
            
            <div className="profile-stats">
              <div className="p-stat">
                <span className="p-num">{PORTFOLIO_CONFIG.stats.experience}</span>
                <span className="p-label">Años</span>
              </div>
              <div className="p-stat">
                <span className="p-num">{PORTFOLIO_CONFIG.stats.projects}</span>
                <span className="p-label">Proyectos</span>
              </div>
            </div>

            <div className="profile-floating-icon icon-1">
              <Code2 size={24} />
            </div>
            <div className="profile-floating-icon icon-2">
              <Layers size={24} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  )
}
