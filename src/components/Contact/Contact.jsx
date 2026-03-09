import { useState } from 'react'
import './Contact.css'

const CONTACTS = [
  { type: 'email', label: 'Email', value: 'ornelmeolans@gmail.com', icon: '✉️', url: 'mailto:ornelmeolans@gmail.com' },
  { type: 'github', label: 'GitHub', value: 'github.com/ornelmeolans', icon: '🐙', url: 'https://github.com/ornelmeolans' },
  { type: 'location', label: 'Ubicación', value: 'Córdoba, Argentina', icon: '📍', url: null }
]

function Contact() {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: '¡Hola! Gracias por visitar mi portfolio. ¿En qué puedo ayudarte?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = { id: Date.now(), type: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: '¡Gracias por tu mensaje! Podés contactarme directamente por email o GitHub. ¡Hablemos!' 
      }])
    }, 1500)
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
              </div>
              
              <div className="terminal__input-wrapper">
                <span className="terminal__prompt">{"portfolio>"}</span>
                <input
                  type="text"
                  className="terminal__input"
                  placeholder="Escribí tu mensaje..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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

