import { motion } from 'framer-motion'
import { Layout, Server, Database, Smartphone, Palette, Zap } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Layout className="service-icon-svg" />,
    title: 'Desarrollo Frontend',
    description: 'Interfaces de usuario modernas, interactivas y altamente responsivas utilizando React y Next.js.'
  },
  {
    icon: <Server className="service-icon-svg" />,
    title: 'Desarrollo Backend',
    description: 'Arquitecturas de servidor robustas y escalables con Node.js, Express y APIs RESTful.'
  },
  {
    icon: <Database className="service-icon-svg" />,
    title: 'Gestión de Datos',
    description: 'Diseño e implementación de bases de datos eficientes utilizando PostgreSQL y MongoDB.'
  },
  {
    icon: <Smartphone className="service-icon-svg" />,
    title: 'Diseño Mobile Flutter',
    description: 'Estrategias de desarrollo centradas en la experiencia móvil y compatibilidad multiplataforma.'
  },
  {
    icon: <Palette className="service-icon-svg" />,
    title: 'Diseño UI/UX',
    description: 'Creación de prototipos visuales y experiencias de usuario intuitivas y atractivas.'
  },
  {
    icon: <Zap className="service-icon-svg" />,
    title: 'Optimización Web',
    description: 'Mejora del rendimiento, SEO y accesibilidad para garantizar la mejor experiencia posible.'
  }
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <span className="section-subtitle">Lo que ofrezco</span>
          <h2 className="section-title">Mis Servicios</h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-card"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <motion.div 
                  className="service-icon-wrapper"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
