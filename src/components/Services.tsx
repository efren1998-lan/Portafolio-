import { Layout, Server, Database, Smartphone, Palette, Zap } from 'lucide-react'
import './Services.css'

const services = [
  { icon: <Layout className="service-icon-svg" />, title: 'Desarrollo Frontend', description: 'Interfaces de usuario modernas, interactivas y altamente responsivas utilizando React y Next.js.' },
  { icon: <Server className="service-icon-svg" />, title: 'Desarrollo Backend', description: 'Arquitecturas de servidor robustas y escalables con Node.js, Express y APIs RESTful.' },
  { icon: <Database className="service-icon-svg" />, title: 'Gestión de Datos', description: 'Diseño e implementación de bases de datos eficientes utilizando PostgreSQL y MongoDB.' },
  { icon: <Smartphone className="service-icon-svg" />, title: 'Diseño Mobile Flutter', description: 'Estrategias de desarrollo centradas en la experiencia móvil y compatibilidad multiplataforma.' },
  { icon: <Palette className="service-icon-svg" />, title: 'Diseño UI/UX', description: 'Creación de prototipos visuales y experiencias de usuario intuitivas y atractivas.' },
  { icon: <Zap className="service-icon-svg" />, title: 'Optimización Web', description: 'Mejora del rendimiento, SEO y accesibilidad para garantizar la mejor experiencia posible.' }
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <span className="section-subtitle">Lo que ofrezco</span>
        <h2 className="section-title">Mis Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
              }}
            >
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
