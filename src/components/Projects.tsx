import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Layers, Globe, Smartphone } from 'lucide-react'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  tags: string[]
  link: string
  github: string
  category: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito, checkout y panel administrativo.',
      icon: <Globe className="project-icon-svg" />,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
      icon: <Layers className="project-icon-svg" />,
      tags: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
      link: '#',
      github: '#',
      category: 'Productivity'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard de clima con pronósticos y análisis de datos meteorológicos.',
      icon: <Code className="project-icon-svg" />,
      tags: ['React', 'API Weather', 'Chart.js', 'TypeScript'],
      link: '#',
      github: '#',
      category: 'Data'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Red social con posts, comentarios, likes y sistema de seguimiento de usuarios.',
      icon: <Smartphone className="project-icon-svg" />,
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'GraphQL'],
      link: '#',
      github: '#',
      category: 'Social'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-subtitle">Lo que he construido</span>
          <h2 className="section-title">Proyectos Destacados</h2>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                variants={projectVariants}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    {project.icon}
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.link} className="project-link-icon" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="project-link-icon" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="projects-footer">
            <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" className="btn btn-outline">
              Ver más en GitHub
              <Github size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
