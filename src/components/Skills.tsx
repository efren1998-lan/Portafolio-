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
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <span className="section-subtitle">Lo que domino</span>
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="skills-grid">
          {PORTFOLIO_CONFIG.skills.map((category, idx) => (
            <div key={idx} className="skill-category glass-card"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
              }}
            >
              <div className="category-header">
                <div className="category-icon">{iconMap[category.category] || iconMap['default']}</div>
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
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
