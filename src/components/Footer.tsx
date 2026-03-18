import { Github, Linkedin, Twitter, Heart, Mail, MapPin } from 'lucide-react'
import './Footer.css'
import { PORTFOLIO_CONFIG } from '../config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="gradient-text">{PORTFOLIO_CONFIG.name}</h3>
            <p>{PORTFOLIO_CONFIG.title}</p>
            <div className="footer-contact-info">
              <div className="f-info">
                <Mail size={14} />
                <span>{PORTFOLIO_CONFIG.contact.email}</span>
              </div>
              <div className="f-info">
                <MapPin size={14} />
                <span>{PORTFOLIO_CONFIG.contact.location}</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#about">Sobre Mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#services">Servicios</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Redes Sociales</h4>
            <div className="social-icon-grid">
              <a href={PORTFOLIO_CONFIG.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={PORTFOLIO_CONFIG.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={PORTFOLIO_CONFIG.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {PORTFOLIO_CONFIG.name}. Todos los derechos reservados.</p>
          <p className="made-with">
            Diseñado y desarrollado con <Heart size={14} className="heart-icon" /> por {PORTFOLIO_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
