import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code, Layers, Globe, Smartphone, X, ChevronLeft, ChevronRight } from 'lucide-react'
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
  images: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Página de Ventas de Perfumes',
      description: 'Plataforma premium para la venta y catálogo de fragancias exclusivas.',
      icon: <Globe className="project-icon-svg" />,
      tags: ['React', 'Framer Motion', 'E-commerce', 'UI/UX'],
      link: '#',
      github: '#',
      category: 'Web App',
      images: [
        '/assets/projects/perfumes/perfumes 1.png',
        '/assets/projects/perfumes/perfume 2.png',
        '/assets/projects/perfumes/perfumes 3.png',
        '/assets/projects/perfumes/perfume 4.png',
        '/assets/projects/perfumes/perfumes 5.png',
        '/assets/projects/perfumes/perfumes 6.png'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
      icon: <Layers className="project-icon-svg" />,
      tags: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
      link: '#',
      github: '#',
      category: 'Productivity',
      images: []
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard de clima con pronósticos y análisis de datos meteorológicos.',
      icon: <Code className="project-icon-svg" />,
      tags: ['React', 'API Weather', 'Chart.js', 'TypeScript'],
      link: '#',
      github: '#',
      category: 'Data',
      images: []
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Red social con posts, comentarios, likes y sistema de seguimiento de usuarios.',
      icon: <Smartphone className="project-icon-svg" />,
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'GraphQL'],
      link: '#',
      github: '#',
      category: 'Social',
      images: []
    }
  ]

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
  }

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

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
                onClick={() => {
                  if (project.images && project.images.length > 0) {
                    setSelectedProject(project)
                    setCurrentImageIndex(0)
                  }
                }}
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
                  {project.images && project.images.length > 0 ? (
                    <motion.img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="project-card-image"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <div className="project-icon-wrapper">
                      {project.icon}
                    </div>
                  )}
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <div className="view-gallery-badge">
                      <Layers size={14} />
                      Galería
                    </div>
                  </div>
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal glass"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="modal-gallery">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="modal-image"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button className="gallery-nav prev" onClick={prevImage}>
                      <ChevronLeft size={32} />
                    </button>
                    <button className="gallery-nav next" onClick={nextImage}>
                      <ChevronRight size={32} />
                    </button>
                    <div className="gallery-dots">
                      {selectedProject.images.map((_, i) => (
                        <div 
                          key={i} 
                          className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(i)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="project-tags" style={{ marginTop: '1rem' }}>
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
