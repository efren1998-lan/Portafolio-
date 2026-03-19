import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ChevronRight, Github, Linkedin, Twitter, Code2, Layers } from 'lucide-react'
import './Hero.css'
import { PORTFOLIO_CONFIG } from '../config'

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(100)

  useEffect(() => {
    const handleType = () => {
      const current = texts[index]

      if (!isDeleting) {
        const nextText = current.substring(0, displayText.length + 1)
        setDisplayText(nextText)

        if (nextText === current) {
          setIsDeleting(true)
          setSpeed(1500)
        } else {
          setSpeed(100)
        }
      } else {
        const nextText = current.substring(0, displayText.length - 1)
        setDisplayText(nextText)

        if (nextText === '') {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
          setSpeed(500)
        } else {
          setSpeed(50)
        }
      }
    }

    const timeout = setTimeout(handleType, speed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, index, texts, speed])

  return <span className="typewriter-text">{displayText}<span className="cursor">|</span></span>
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / (rect.height / 2)) * 8
    const rotateY = (x / (rect.width / 2)) * 8
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
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

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
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
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            className="profile-card glass"
            style={{ transition: 'transform 0.15s ease-out' }}
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
          </div>
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

