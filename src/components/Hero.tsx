import { useRef } from 'react'
import { Download, ChevronRight, Github, Linkedin, Twitter, Code2, Layers } from 'lucide-react'
import './Hero.css'
import { PORTFOLIO_CONFIG } from '../config'

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

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hola, soy</span>
          <h1 className="hero-name gradient-text">{PORTFOLIO_CONFIG.name}</h1>
          <div className="hero-title">
            <span className="typewriter-text">IA & Automatización</span>
          </div>
          <p className="hero-description">{PORTFOLIO_CONFIG.about.summary}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver Mis Proyectos <ChevronRight size={20} />
            </a>
            <a href="/cv.pdf" className="btn btn-outline" download>
              Descargar CV <Download size={20} />
            </a>
          </div>
          <div className="hero-social">
            <a href={PORTFOLIO_CONFIG.social.github} className="social-icon" target="_blank" rel="noreferrer"><Github size={24} /></a>
            <a href={PORTFOLIO_CONFIG.social.linkedin} className="social-icon" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
            <a href={PORTFOLIO_CONFIG.social.twitter} className="social-icon" target="_blank" rel="noreferrer"><Twitter size={24} /></a>
          </div>
        </div>

        <div className="hero-image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div ref={cardRef} className="profile-card glass" style={{ transition: 'transform 0.15s ease-out' }}>
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
            <div className="profile-floating-icon icon-1"><Code2 size={24} /></div>
            <div className="profile-floating-icon icon-2"><Layers size={24} /></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel"></div></div>
      </div>
    </section>
  )
}
