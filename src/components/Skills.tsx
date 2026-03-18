import { motion } from 'framer-motion'
import { Code2, Terminal, Wrench, Brain, Cloud } from 'lucide-react'
import './Skills.css'
import { PORTFOLIO_CONFIG } from '../config'

const iconMap: { [key: string]: React.ReactNode } = {
  'IA & Datos': <Brain size={24} />,
  'Desarrollo de Software': <Code2 size={24} />,
  'Bases de Datos & Nube': <Cloud size={24} />,
  'Herramientas': <Terminal size={24} />,
  'default': <Wrench size={24} />,
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <span className="section-subtitle">Lo que domino</span>
          <h2 className="section-title">Habilidades Técnicas</h2>

          <div className="skills-grid">
            {PORTFOLIO_CONFIG.skills.map((category, idx) => (
              <motion.div 
                key={idx} 
                className="skill-category glass-card"
                variants={categoryVariants}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {iconMap[category.category] || iconMap['default']}
                  </div>
                  <h3>{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.items.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 * sIdx }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
