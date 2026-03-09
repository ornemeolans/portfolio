import { useState, useRef, useEffect } from 'react'
import './Contact.css'

const CONTACTS = [
  { type: 'email', label: 'Email', value: 'ornelmeolans@gmail.com', icon: '✉️', url: 'mailto:ornelmeolans@gmail.com' },
  { type: 'github', label: 'GitHub', value: 'github.com/ornelmeolans', icon: '🐙', url: 'https://github.com/ornelmeolans' },
  { type: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/ornelmeolans', icon: '💼', url: 'https://linkedin.com/in/ornelmeolans' },
  { type: 'location', label: 'Ubicación', value: 'Córdoba, Argentina', icon: '📍', url: null }
]

const PROJECTS = [
  { name: 'Mandala Cakes', url: 'https://mandalacakes.netlify.app/' },
  { name: 'Soguero', url: 'https://sergiomeolans.netlify.app/' },
  { name: 'Calculadora Konecta', url: 'https://ornemeolans.github.io/Calculadora-Sueldo-Konecta/' },
  { name: 'PopCorn Locator', url: 'https://ornemeolans.github.io/PopCorn-Locator/' },
  { name: 'Orne Meolans PH', url: 'https://ornemeolans.github.io/ornemeolansph/' },
  { name: 'Kosa E-commerce', url: 'https://kosa-ecommerce.netlify.app/' } 
]

const COMMANDS = {
  help: {
    description: 'Ver todos los comandos disponibles',
    response: 'Comandos disponibles:\n- ayuda / help\n- contacto\n- proyectos / projects\n- skills\n- sobre mi\n- clear'
  },
  ayuda: {
    description: 'Ver todos los comandos disponibles',
    response: 'Comandos disponibles:\n- ayuda / help\n- contacto\n- proyectos / projects\n- skills\n- sobre mi\n- clear'
  },
  contacto: {
    description: 'Información de contacto',
    response: '📧 Email: ornelmeolans@gmail.com\n🐙 GitHub: github.com/ornelmeolans\n💼 LinkedIn: linkedin.com/in/ornelmeolans\n📍 Ubicación: Córdoba, Argentina'
  },
  proyectos: {
    description: 'Lista de proyectos',
    response: PROJECTS.map((p, i) => `${i + 1}. ${p.name}: ${p.url}`).join('\n')
  },
  projects: {
    description: 'Lista de proyectos (English)',
    response: PROJECTS.map((p, i) => `${i + 1}. ${p.name}: ${p.url}`).join('\n')
  },
  skills: {
    description: 'Mis habilidades técnicas',
    response: '🛠️ Habilidades técnicas:\n- Frontend: React, JavaScript, HTML/CSS\n- Design: Photoshop, Lightroom\n- Tools: Git, SEO, UI/UX'
  },
  'sobre mi': {
    description: 'Sobre mí',
    response: '👋 Hola! Soy Ornella Meolans\n📷 Fotógrafa & Frontend Developer\n💻 Especializada en interfaces Pixel Perfect\n🎯 Siempre buscando nuevos desafíos!'
  },
  about: {
    description: 'About me (English)',
    response: '👋 Hi! I am Ornella Meolans\n📷 Photographer & Frontend Developer\n💻 Specialized in Pixel Perfect interfaces\n🎯 Always looking for new challenges!'
  },
  clear: {
    description: 'Limpiar terminal',
    response: null,
    action: 'clear'
  }
}

const WELCOME_MESSAGE = `¡Bienvenido a mi portfolio interactivo! 🎯
Escribí un comando para comenzar:
- ayuda / help
- contacto
- proyectos
- skills
- sobre mi

Escribí cualquier cosa para ver las opciones...`

function Contact() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: WELCOME_MESSAGE }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getCommandResponse = (cmd) => {
    const command = cmd.toLowerCase().trim()
    if (COMMANDS[command]) {
      return COMMANDS[command]
    }
    // Partial match for suggestions
    const matches = Object.keys(COMMANDS).filter(c => c.startsWith(command))
    if (matches.length > 0) {
      return {
        response: `¿Quisiste decir?: ${matches.map(m => m).join(', ')}\nEscribí ayuda para ver todos los comandos.`,
        isSuggestion: true
      }
    }
    return {
      response: `Comando no reconocido: "${command}"\nEscribí "ayuda" o "help" para ver los comandos disponibles.`
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { id: Date.now(), type: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setSuggestions([])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const cmdResponse = getCommandResponse(input)
      
      if (cmdResponse.action === 'clear') {
        setMessages([{ id: Date.now() + 1, type: 'bot', text: WELCOME_MESSAGE }])
      } else {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          type: 'bot', 
          text: cmdResponse.response 
        }])
      }
    }, 800)
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setInput(value)
    
    // Show suggestions
    if (value.trim()) {
      const matches = Object.keys(COMMANDS).filter(c => 
        c.toLowerCase().startsWith(value.toLowerCase().trim())
      ).slice(0, 3)
      setSuggestions(matches)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion)
    setSuggestions([])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__label">Contacto</span>
          <h2 className="contact__title">
            Hablemos
            <span className="contact__title-accent">.</span>
          </h2>
          <p className="contact__subtitle">
            ¿Tenés un proyecto en mente? ¡Conversemos!
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Info Cards */}
          <div className="contact__info">
            {CONTACTS.map((item) => (
              <a 
                key={item.type}
                href={item.url}
                target={item.url && item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url && item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card"
              >
                <span className="contact-card__icon">{item.icon}</span>
                <div className="contact-card__content">
                  <span className="contact-card__label">{item.label}</span>
                  <span className="contact-card__value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Terminal Chat */}
          <div className="terminal">
            <div className="terminal__header">
              <div className="terminal__buttons">
                <span className="terminal__btn terminal__btn--red"></span>
                <span className="terminal__btn terminal__btn--yellow"></span>
                <span className="terminal__btn terminal__btn--green"></span>
              </div>
              <span className="terminal__title">portfolio ~ contact</span>
            </div>
            
            <div className="terminal__body">
              <div className="terminal__messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`terminal__msg terminal__msg--${msg.type}`}>
                    <span className="terminal__prompt">
                      {msg.type === 'user' ? '>' : 'portfolio>'}
                    </span>
                    <span className="terminal__text">{msg.text}</span>
                  </div>
                ))}
                {isTyping && (
                  <div className="terminal__msg terminal__msg--bot">
                    <span className="terminal__prompt">{"portfolio>"}</span>
                    <span className="terminal__typing">
                      <span className="terminal__dot"></span>
                      <span className="terminal__dot"></span>
                      <span className="terminal__dot"></span>
                    </span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {suggestions.length > 0 && (
                <div className="terminal__suggestions">
                  {suggestions.map((s, i) => (
                    <button 
                      key={i} 
                      className="terminal__suggestion"
                      onClick={() => handleSuggestionClick(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="terminal__input-wrapper">
                <span className="terminal__prompt">{"portfolio>"}</span>
                <input
                  type="text"
                  className="terminal__input"
                  placeholder="Escribí un comando..."
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button className="terminal__send" onClick={handleSend}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

