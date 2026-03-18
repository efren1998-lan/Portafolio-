import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import './Contact.css'
import { PORTFOLIO_CONFIG } from '../config'

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simular envío
    setTimeout(() => {
      setFormState('success')
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00d4ff', '#00ffaa', '#ffffff']
      })
    }, 1500)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <span className="section-subtitle">¿Tienes un proyecto?</span>
        <h2 className="section-title">Hablemos</h2>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info-card glass-card info-card"
          >
            <h3>Información de Contacto</h3>
            <p>Estoy disponible para nuevos proyectos y colaboraciones. ¡No dudes en escribirme!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div className="info-text">
                  <span>Email</span>
                  <a href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}>{PORTFOLIO_CONFIG.contact.email}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone /></div>
                <div className="info-text">
                  <span>Teléfono</span>
                  <p>{PORTFOLIO_CONFIG.contact.phone}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div className="info-text">
                  <span>Ubicación</span>
                  <p>{PORTFOLIO_CONFIG.contact.location}</p>
                </div>
              </div>
            </div>

            <div className="social-footer">
              <span>Sígueme en redes</span>
              <div className="social-links">
                <a href={PORTFOLIO_CONFIG.social.github} target="_blank" rel="noreferrer"><Github /></a>
                <a href={PORTFOLIO_CONFIG.social.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
                <a href={PORTFOLIO_CONFIG.social.twitter} target="_blank" rel="noreferrer"><Twitter /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-card glass-card premium-form"
          >
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nombre Completo</label>
                      <input type="text" id="name" placeholder="Tu nombre..." required disabled={formState === 'submitting'} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input type="email" id="email" placeholder="tu@email.com" required disabled={formState === 'submitting'} />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Asunto</label>
                    <input type="text" id="subject" placeholder="¿En qué puedo ayudarte?" required disabled={formState === 'submitting'} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" rows={5} placeholder="Cuéntame sobre tu proyecto..." required disabled={formState === 'submitting'}></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn btn-primary btn-block ${formState === 'submitting' ? 'loading' : ''}`}
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Enviando...' : (
                      <>
                        Enviar Mensaje
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="form-success"
                >
                  <div className="success-icon">
                    <CheckCircle2 size={80} strokeWidth={1} />
                  </div>
                  <h3>¡Mensaje Enviado!</h3>
                  <p>Gracias por contactarme. Te responderé lo antes posible.</p>
                  <button onClick={() => setFormState('idle')} className="btn btn-outline">Enviar otro mensaje</button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
