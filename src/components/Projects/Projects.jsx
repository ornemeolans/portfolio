import { useState } from 'react'

const PROJECTS = [
  {
    id: 12,
    type: 'project',
    featured: true,
    title: 'Flujo - Finanzas Personales',
    category: 'Full Stack / PWA',
    description: 'PWA offline-first de finanzas personales pensada para Argentina: billeteras con rendimiento por TNA, tarjetas en cuotas y préstamos con débito automático. Funciona sin conexión, sincroniza entre dispositivos y envía recordatorios push. 38 tests, WCAG 2.1 AA y Lighthouse 97+.',
    image: 'https://flujo-app.netlify.app/og.png',
    imageAspect: '1200 / 630',
    tags: ['React', 'TypeScript', 'PWA Offline-First', 'Node.js/Express'],
    liveUrl: 'https://flujo-app.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/flujo'
  },
  {
    id: 10,
    type: 'project',
    featured: true,
    title: 'Club-Canchas - Sistema de Reservas',
    category: 'Full Stack / Producto Completo',
    description: 'Sistema de reservas de punta a punta para un club deportivo (fútbol y tenis), con frontend en React y backend en Node.js/Express. Integra pagos con Mercado Pago y avisos por WhatsApp Business API, sincroniza con Google Calendar y Sheets, y suma un panel de administración para bloquear turnos.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://club-canchas.netlify.app/',
    tags: ['React', 'Node.js/Express', 'Mercado Pago', 'WhatsApp API'],
    liveUrl: 'https://club-canchas.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/club-canchas'
  },
  {
    id: 11,
    type: 'project',
    title: 'Simulador de Cámara - Tutor de Fotografía',
    category: 'Frontend / React + Firebase',
    description: 'Simulador de cámara réflex que enseña fotografía: se ajustan obturador, apertura e ISO, el visor reproduce el efecto real y un tutor analiza cada toma con puntaje y consejos. Incluye escenas, desafíos, histograma en vivo y galería en Firebase.',
    image: `${import.meta.env.BASE_URL}projects/camera-simulator.jpg`,
    tags: ['React', 'Firebase', 'Canvas', 'TypeScript'],
    liveUrl: 'https://camera-simulator.web.app/',
    codeUrl: 'https://github.com/ornemeolans/camera-simulator'
  },
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
    description: 'Herramienta interna creada por iniciativa propia: automatiza el cálculo de haberes y redujo los errores manuales y las consultas repetitivas al equipo de RRHH.',
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
  },
  {
    id: 7,
    type: 'project',
    title: 'Aesthetic To-Do List',
    category: 'Web App / Productivity',
    description: 'Gestor de tareas offline-first en JavaScript puro: tablero kanban con drag & drop, subtareas, moodboards, plantillas con variables y modo enfoque. Instalable como PWA y con sincronización entre dispositivos.',
    image: `${import.meta.env.BASE_URL}projects/to-do-list.jpg`,
    tags: ['JavaScript Vanilla', 'PWA Offline-First', 'Firebase', 'Drag & Drop'],
    liveUrl: 'https://aesthetic-to-do-list.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/to-do-list'
  },
  {
    id: 8,
    type: 'project',
    title: 'Plataforma de Gestión Tambera (Tambo360)',
    category: 'Desarrollo Frontend / Equipo',
    description: 'Desarrollo frontend en equipo de una plataforma SaaS para la gestión de productores lácteos: componentes reactivos, flujos de navegación optimizados y consumo de APIs para visualizar métricas de producción.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://tambo360.vercel.app/',
    tags: ['React', 'Frontend Team', 'API Integration', 'UI Components'],
    liveUrl: 'https://tambo360.vercel.app/',
    codeUrl: 'https://github.com/IgrowkerTraining/i006-tambo360-fullstack'
  },
  {
    id: 9,
    type: 'project',
    title: 'Invitación Digital Baby Shower (Amparo)',
    category: 'Desarrollo Frontend / Proyecto Personal',
    description: 'Invitación web interactiva para un baby shower, hecha con React y Vite: componentes visuales a medida, animaciones y diseño responsive, con despliegue continuo en Netlify.',
    image: `${import.meta.env.BASE_URL}projects/amparo.jpg`,
    tags: ['React', 'Vite', 'Frontend', 'UI Design'],
    liveUrl: 'https://amparo-baby-shower.netlify.app/',
    codeUrl: 'https://github.com/ornemeolans/amparo-baby-shower'
  }
]

const SKILLS = [
  { name: 'React', mark: 'Re', category: 'frontend' },
  { name: 'JavaScript', mark: 'JS', category: 'frontend' },
  { name: 'HTML/CSS', mark: '</>', category: 'frontend' },
  { name: 'Photoshop', mark: 'Ps', category: 'design' },
  { name: 'Lightroom', mark: 'Lr', category: 'design' },
  { name: 'Edición Digital', mark: 'Ed', category: 'design' },
  { name: 'Git', mark: 'Git', category: 'tools' }
]

const SKILL_GROUPS = [
  { id: 'frontend', title: 'Frontend', description: 'Interfaces rápidas, accesibles y pixel perfect.' },
  { id: 'design', title: 'Diseño & Fotografía', description: 'Ojo de fotógrafa aplicado a cada pantalla.' },
  { id: 'tools', title: 'Herramientas', description: 'Flujo de trabajo ordenado y colaborativo.' }
]

const EDUCATION = [
  { initial: 'U', title: 'Licenciatura en Cs. de la Computacion', place: 'Universidad', status: 'En curso' },
  { initial: 'C', title: 'Full Stack Developer', place: 'Coderhouse', status: 'Finalizado' }
]

// En la grilla de 3 columnas, si la última fila queda con una sola tarjeta, esa tarjeta ocupa todo el ancho
const regularProjects = PROJECTS.filter((project) => !project.featured)
const WIDE_PROJECT_ID = regularProjects.length % 3 === 1 ? regularProjects.at(-1).id : null

function ProjectCard({ project, index, featured, wide }) {
  const [imageFailed, setImageFailed] = useState(false)
  const variant = featured ? 'project-card--featured' : wide ? 'project-card--wide' : ''

  return (
    <article className={`project-card ${variant}`}>
      <div className="project-card__media">
        <div className="project-card__chrome" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div
          className="project-card__frame"
          style={project.imageAspect ? { aspectRatio: project.imageAspect } : undefined}
        >
          <span className="project-card__placeholder" aria-hidden="true">
            {project.title.charAt(0)}
          </span>
          {!imageFailed && (
            <img
              src={project.image}
              alt={`Vista previa de ${project.title}`}
              className="project-card__image"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-card__category">{project.category}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="project-card__tag">{tag}</li>
          ))}
        </ul>
        <div className="project-card__links">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--primary"
          >
            Ver demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--ghost"
          >
            Código
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <section id="projects" className="projects">
      <div className="projects__container">

        <div className="projects__tabs" role="tablist" aria-label="Contenido de la sección">
          <button
            role="tab"
            aria-selected={activeTab === 'projects'}
            className={`projects__tab ${activeTab === 'projects' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Proyectos
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'skills'}
            className={`projects__tab ${activeTab === 'skills' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Habilidades Técnicas
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

            <div className="project-grid">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured={project.featured}
                  wide={project.id === WIDE_PROJECT_ID}
                />
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

            <div className="skill-groups">
              {SKILL_GROUPS.map((group, groupIndex) => (
                <article
                  key={group.id}
                  className={`skill-group skill-group--${group.id}`}
                  style={{ animationDelay: `${groupIndex * 0.12}s` }}
                >
                  <span className="skill-group__shape" aria-hidden="true" />
                  <h3 className="skill-group__title">{group.title}</h3>
                  <p className="skill-group__description">{group.description}</p>
                  <ul className="skill-group__list">
                    {SKILLS.filter((skill) => skill.category === group.id).map((skill) => (
                      <li key={skill.name} className="skill-item">
                        <span className="skill-item__mark" aria-hidden="true">{skill.mark}</span>
                        <span className="skill-item__name">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="education-section">
              <h3 className="education-section__title">Formación Académica</h3>
              <div className="education-cards">
                {EDUCATION.map((item) => (
                  <div key={item.title} className="education-card">
                    <span className="education-card__icon" aria-hidden="true">{item.initial}</span>
                    <div className="education-card__content">
                      <h4>{item.title}</h4>
                      <p>{item.place}</p>
                    </div>
                    <span className="education-card__status">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
