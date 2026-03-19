import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import './About.css'
import { PORTFOLIO_CONFIG } from '../config'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-grid">
          <div className="about-bio">
            <div className="bio-card glass-card"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
              }}
            >
              <p className="bio-summary">{PORTFOLIO_CONFIG.about.summary}</p>
              <p className="bio-full">{PORTFOLIO_CONFIG.about.fullBio}</p>
              <div className="about-features">
                <div className="feature"><CheckCircle2 className="feature-icon" size={20} /><span>Código limpio y escalable</span></div>
                <div className="feature"><CheckCircle2 className="feature-icon" size={20} /><span>Aprendizaje continuo</span></div>
                <div className="feature"><CheckCircle2 className="feature-icon" size={20} /><span>Enfoque en UX/UI</span></div>
              </div>
              <div className="about-stats-compact">
                <div className="stat">
                  <span className="stat-num">{PORTFOLIO_CONFIG.stats.experience}</span>
                  <span className="stat-text">Años Exp.</span>
                </div>
                <div className="stat">
                  <span className="stat-num">{PORTFOLIO_CONFIG.stats.projects}</span>
                  <span className="stat-text">Proyectos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-experience">
            <h3 className="sub-title">Experiencia</h3>
            <div className="timeline">
              {PORTFOLIO_CONFIG.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.position}</h4>
                      <span className="timeline-date"><Calendar size={14} />{exp.period}</span>
                    </div>
                    <h5 className="timeline-company"><Briefcase size={14} />{exp.company}</h5>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
