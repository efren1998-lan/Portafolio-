import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import './About.css'
import { PORTFOLIO_CONFIG } from '../config'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="section-title">Sobre Mí</h2>

          <div className="about-grid">
            {/* Bio Section */}
            <motion.div className="about-bio" variants={itemVariants}>
              <div 
                className="bio-card glass-card"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <p className="bio-summary">{PORTFOLIO_CONFIG.about.summary}</p>
                <p className="bio-full">{PORTFOLIO_CONFIG.about.fullBio}</p>

                <div className="about-features">
                  <div className="feature">
                    <CheckCircle2 className="feature-icon" size={20} />
                    <span>Código limpio y escalable</span>
                  </div>
                  <div className="feature">
                    <CheckCircle2 className="feature-icon" size={20} />
                    <span>Aprendizaje continuo</span>
                  </div>
                  <div className="feature">
                    <CheckCircle2 className="feature-icon" size={20} />
                    <span>Enfoque en UX/UI</span>
                  </div>
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
            </motion.div>

            {/* Experience Timeline */}
            <motion.div className="about-experience" variants={itemVariants}>
              <h3 className="sub-title">Experiencia</h3>
              <div className="timeline">
                {PORTFOLIO_CONFIG.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.5, delay: index * 0.1 }
                      }
                    }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{exp.position}</h4>
                        <span className="timeline-date">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      <h5 className="timeline-company">
                        <Briefcase size={14} />
                        {exp.company}
                      </h5>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
