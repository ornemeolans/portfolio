import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    type: 'project',
    title: 'Mandala Cakes',
    category: 'E-Commerce',
    description: 'E-commerce de pasteles artesanales con lógica de carrito de compras, gestión de productos y procesamiento de pedidos.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    tags: ['React', 'JavaScript', 'Carrito', 'CSS'],
    liveUrl: 'https://mandalacakes.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/mandalacakes'
  },
  {
    id: 2,
    type: 'project',
    title: 'Soguero',
    category: 'Sitio Web',
    description: 'Sitio web con enfoque en SEO y optimización de imágenes. Mejor rendimiento y posicionamiento en buscadores.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['SEO', 'Optimización', 'JavaScript'],
    liveUrl: 'https://sergiomeolans.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/sergiomeolans-sogueria.github.io'
  },
  {
    id: 3,
    type: 'project',
    title: 'PopCorn Locator',
    category: 'Web App',
    description: 'Aplicación para encontrar películas. Demuestra manejo de asincronismo, consumo de APIs externas y renderizado dinámico.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    tags: ['React', 'APIs', 'Async/Await'],
    liveUrl: 'https://ornemeolans.github.io/PopCorn-Locator/',
    codeUrl: 'https://github.com/ornemeolans/PopCorn-Locator'
  },
  {
    id: 4,
    type: 'project',
    title: 'Calculadora de Sueldos Konecta',
    category: 'Herramienta',
    description: 'Calculadora salarial desarrollada por iniciativa propia para resolver problemas reales de cálculo de nómina.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    tags: ['JavaScript', 'Lógica', 'UI/UX'],
    liveUrl: 'https://ornemeolans.github.io/Calculadora-Sueldo-Konecta/',
    codeUrl: 'https://github.com/ornemeolans/Calculadora-Sueldo-Konecta'
  }
]

const SKILLS = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'JavaScript', icon: '📜', category: 'frontend' },
  { name: 'HTML/CSS', icon: '🎨', category: 'frontend' },
  { name: 'Photoshop', icon: '📷', category: 'design' },
  { name: 'Lightroom', icon: '✨', category: 'design' },
  { name: 'Edición Digital', icon: '🎯', category: 'design' },
  { name: 'Git', icon: '📦', category: 'tools' }
]

function Projects() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        
        {/* Tab Navigation - Like a film strip */}
        <div className="projects__tabs">
          <button 
            className={`projects__tab ${activeTab === 'projects' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span className="projects__tab-icon">🎞️</span>
            Proyectos
          </button>
          <button 
            className={`projects__tab ${activeTab === 'skills' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <span className="projects__tab-icon">📷</span>
            Herramientas
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="projects__content">
            <div className="projects__header">
              <span className="projects__label">Portfolio</span>
              <h2 className="projects__title">
                Trabajos Realizados
                <span className="projects__title-accent">.</span>
              </h2>
              <p className="projects__subtitle">
                Proyectos que demuestran mi capacidad de resolver problemas reales
              </p>
            </div>

            <div className="bento-grid">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="bento-item bento-item--project"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="bento-item__image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`bento-item__image ${hoveredId === project.id ? 'bento-item__image--color' : ''}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="bento-item__overlay">
                    <div className="bento-item__content">
                      <span className="bento-item__category">{project.category}</span>
                      <h3 className="bento-item__title">{project.title}</h3>
                      <p className="bento-item__description">{project.description}</p>
                      <div className="bento-item__tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bento-item__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bento-item__links">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bento-item__link"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Ver Demo
                      </a>
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bento-item__link bento-item__link--secondary"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="projects__content">
            <div className="projects__header">
              <span className="projects__label">Herramientas</span>
              <h2 className="projects__title">
                Stack Técnico
                <span className="projects__title-accent">.</span>
              </h2>
              <p className="projects__subtitle">
                Tecnologías y habilidades que utilizo para crear experiencias digitales
              </p>
            </div>

            <div className="skills-grid">
              {SKILLS.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="skill-card__icon">{skill.icon}</span>
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__category">{skill.category}</span>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h3 className="education-section__title">Formación Académica</h3>
              <div className="education-cards">
                <div className="education-card">
                  <span className="education-card__icon">🎓</span>
                  <div className="education-card__content">
                    <h4>Licenciatura en Ciencias de la Computación</h4>
                    <p>Universidad - En curso</p>
                  </div>
                </div>
                <div className="education-card">
                  <span className="education-card__icon">💻</span>
                  <div className="education-card__content">
                    <h4>Full Stack Developer</h4>
                    <p>Coderhouse - En curso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

