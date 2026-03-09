import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    type: 'project',
    title: 'Mandala Cakes',
    category: 'E-Commerce',
    description: 'SPA con lógica de carrito de compras en JavaScript. Gestión de productos, procesamiento de pedidos y experiencia de usuario fluida.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://mandalacakes.netlify.app/',
    tags: ['React', 'JavaScript', 'Carrito', 'CSS'],
    liveUrl: 'https://mandalacakes.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/mandalacakes'
  },
  {
    id: 2,
    type: 'project',
    title: 'Soguero',
    category: 'Sitio Web',
    description: 'Sitio institucional con enfoque en optimización de imágenes y SEO. Mi lado fotográfico aplicado al desarrollo web para mejor rendimiento.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://sergiomeolans.netlify.app/',
    tags: ['SEO', 'Optimización', 'JavaScript'],
    liveUrl: 'https://sergiomeolans.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/sergiomeolans'
  },
  {
    id: 3,
    type: 'project',
    title: 'Calculadora de Sueldos Konecta',
    category: 'Herramienta Interna',
    description: 'Solución proactiva que desarrolló iniciativa propia. Redujo errores en el equipo de RRHH mediante cálculos automatizados precisos.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://ornemeolans.github.io/Calculadora-Sueldo-Konecta/',
    tags: ['JavaScript', 'Lógica', 'UI/UX'],
    liveUrl: 'https://ornemeolans.github.io/Calculadora-Sueldo-Konecta/',
    codeUrl: 'https://github.com/ornemeolans/Calculadora-Sueldo-Konecta'
  },
  {
    id: 4,
    type: 'project',
    title: 'PopCorn Locator',
    category: 'Web App',
    description: 'Aplicación para encontrar películas. Demuestra manejo de asincronismo, consumo de APIs externas y renderizado dinámico.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://ornemeolans.github.io/PopCorn-Locator/',
    tags: ['React', 'APIs', 'Async/Await'],
    liveUrl: 'https://ornemeolans.github.io/PopCorn-Locator/',
    codeUrl: 'https://github.com/ornemeolans/popcorn-locator'
  },
  {
    id: 5,
    type: 'project',
    title: 'Orne Meolans PH',
    category: 'Photography Portfolio',
    description: 'Sitio profesional de fotografía con galerías dinámicas. Enfocado en la optimización de activos visuales, SEO y diseño interactivo para resaltar el trabajo artístico.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://ornemeolans.github.io/ornemeolansph/',
    tags: ['SEO', 'UI/UX', 'Adobe Suite', 'Responsive'],
    liveUrl: 'https://ornemeolans.github.io/ornemeolansph/',
    codeUrl: 'https://github.com/ornemeolans/ornemeolansph'
  },
  {
  id: 6,
  type: 'project',
  title: 'Kosa E-commerce',
  category: 'Web App',
  description: 'Plataforma de comercio electrónico para productos de hogar y decoración. Incluye catálogo dinámico, gestión de carrito y validación de stock en tiempo real.',
  image: 'https://image.thum.io/get/width/800/crop/600/https://kosa-ecommerce.netlify.app/', // O la URL de tu preferencia para la vista previa
  tags: ['React', 'Firebase', 'Context API', 'Responsive'],
  liveUrl: 'https://kosa-ecommerce.netlify.app/', 
  codeUrl: 'https://github.com/ornemeolans/kosa-ecommerce'
}
]

const SKILLS = [
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'JavaScript', icon: 'js', category: 'frontend' },
  { name: 'HTML/CSS', icon: 'html', category: 'frontend' },
  { name: 'Photoshop', icon: 'ps', category: 'design' },
  { name: 'Lightroom', icon: 'lr', category: 'design' },
  { name: 'Edición Digital', icon: 'edit', category: 'design' },
  { name: 'Git', icon: 'git', category: 'tools' }
]

function Projects() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeTab, setActiveTab] = useState('projects')

  const getIcon = (iconName) => {
    const icons = {
      react: '⚛️',
      js: '📜',
      html: '🎨',
      ps: '📷',
      lr: '✨',
      edit: '🎯',
      git: '📦'
    }
    return icons[iconName] || '💻'
  }

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        
        <div className="projects__tabs">
          <button 
            className={`projects__tab ${activeTab === 'projects' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span className="projects__tab-icon">💡</span>
            Proyectos
          </button>
          <button 
            className={`projects__tab ${activeTab === 'skills' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <span className="projects__tab-icon">🛠️</span>
            Habilidades Tecnicas
          </button>
        </div>

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
                        Ver Demo
                      </a>
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bento-item__link bento-item__link--secondary"
                      >
                        Codigo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="projects__content">
            <div className="projects__header">
              <span className="projects__label">Equipamiento</span>
              <h2 className="projects__title">
                Herramientas y Skills
                <span className="projects__title-accent">.</span>
              </h2>
              <p className="projects__subtitle">
                Mi set de herramientas tecnicas y creativas
              </p>
            </div>

            <div className="skills-grid">
              {SKILLS.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="skill-card__icon">{getIcon(skill.icon)}</span>
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__category">{skill.category}</span>
                </div>
              ))}
            </div>

            <div className="education-section">
              <h3 className="education-section__title">Formacion Academica</h3>
              <div className="education-cards">
                <div className="education-card">
                  <span className="education-card__icon">U</span>
                  <div className="education-card__content">
                    <h4>Licenciatura en Cs. de la Computacion</h4>
                    <p>Universidad - En curso</p>
                  </div>
                </div>
                <div className="education-card">
                  <span className="education-card__icon">C</span>
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