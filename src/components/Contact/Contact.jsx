import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const WELCOME_MESSAGE = `Welcome to Terminal v1.0.0
Type 'help' to see available commands.`

const COMMANDS = {
  help: {
    description: 'Show available commands',
    usage: 'help'
  },
  about: {
    description: 'Learn more about me',
    usage: 'about'
  },
  skills: {
    description: 'View my technical skills',
    usage: 'skills'
  },
  projects: {
    description: 'See my project portfolio',
    usage: 'projects'
  },
  contact: {
    description: 'Get my contact information',
    usage: 'contact'
  },
  social: {
    description: 'Connect on social media',
    usage: 'social'
  },
  clear: {
    description: 'Clear the terminal',
    usage: 'clear'
  }
}

const RESPONSES = {
  about: `
╔══════════════════════════════════════════╗
║           ABOUT ME                        ║
╠══════════════════════════════════════════╣
║  I'm a creative developer based in        ║
║  Argentina with a passion for building    ║
║  unique digital experiences.             ║
║                                          ║
║  When I'm not coding, you'll find me:    ║
║  📷 Taking photographs                    ║
║  🏺 Working with ceramics                 ║
║  🏔️ Exploring mountains                   ║
╚══════════════════════════════════════════╝
  `,
  skills: `
╔══════════════════════════════════════════╗
║           TECHNICAL SKILLS               ║
╠══════════════════════════════════════════╣
║  Frontend:                               ║
║  • React / Vue / Next.js                  ║
║  • JavaScript / TypeScript                ║
║  • CSS / SCSS / Tailwind                 ║
║                                          ║
║  Backend:                                ║
║  • Node.js / Express                     ║
║  • Python / Django                        ║
║  • PostgreSQL / MongoDB                   ║
║                                          ║
║  Tools:                                  ║
║  • Git / Docker / Figma                   ║
╚══════════════════════════════════════════╝
  `,
  projects: `
╔══════════════════════════════════════════╗
║           PROJECTS                         ║
╠══════════════════════════════════════════╣
║  Check out my portfolio!                  ║
║  Visit: https://github.com/yourusername   ║
║                                          ║
║  Featured Projects:                       ║
║  • E-Commerce Platform                    ║
║  • Photography Portfolio                  ║
║  • Ceramic Art Shop                        ║
║  • Travel Blog                            ║
╚══════════════════════════════════════════╝
  `,
  contact: `
╔══════════════════════════════════════════╗
║           CONTACT                          ║
╠══════════════════════════════════════════╣
║  Email:    hello@example.com              ║
║  Location: Buenos Aires, Argentina        ║
║  Status:   Available for work             ║
║                                          ║
║  Ready to start a project?                 ║
║  Send me an email!                         ║
╚══════════════════════════════════════════╝
  `,
  social: `
╔══════════════════════════════════════════╗
║           SOCIAL MEDIA                    ║
╠══════════════════════════════════════════╣
║  GitHub:    github.com/yourusername       ║
║  LinkedIn:  linkedin.com/in/username      ║
║  Twitter:   twitter.com/username          ║
║  Instagram: @yourusername                 ║
╚══════════════════════════════════════════╝
  `
}

function Contact() {
  const [history, setHistory] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    let response = ''

    switch (command) {
      case 'help':
        response = 'Available commands:\n\n'
        Object.entries(COMMANDS).forEach(([key, value]) => {
          response += `  ${key.padEnd(10)} - ${value.description}\n`
        })
        response += '\nType a command and press Enter.'
        break
      
      case 'about':
        response = RESPONSES.about
        break
      
      case 'skills':
        response = RESPONSES.skills
        break
      
      case 'projects':
        response = RESPONSES.projects
        break
      
      case 'contact':
        response = RESPONSES.contact
        break
      
      case 'social':
        response = RESPONSES.social
        break
      
      case 'clear':
        setHistory([WELCOME_MESSAGE])
        return
      
      case '':
        return
      
      default:
        response = `Command not found: ${command}\nType 'help' for available commands.`
    }

    setHistory(prev => [...prev, `> ${cmd}`, response])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(input)
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input])
    }
    setInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__label">Contact</span>
          <h2 className="contact__title">
            Let's Connect
            <span className="contact__title-accent">_</span>
          </h2>
          <p className="contact__subtitle">
            Prefer a more interactive approach? Use the terminal below to explore!
          </p>
        </div>

        <div className="terminal" onClick={handleTerminalClick}>
          <div className="terminal__header">
            <div className="terminal__buttons">
              <span className="terminal__button terminal__button--close" />
              <span className="terminal__button terminal__button--minimize" />
              <span className="terminal__button terminal__button--maximize" />
            </div>
            <span className="terminal__title">portfolio@terminal</span>
            <div className="terminal__header-spacer" />
          </div>
          
          <div className="terminal__body" ref={terminalRef}>
            {history.map((line, index) => (
              <div key={index} className="terminal__line">
                {line.split('\n').map((l, i) => (
                  <span key={i} dangerouslySetInnerHTML={{ 
                    __html: l
                      .replace(/>/g, '<span class="terminal__prompt">> </span>')
                      .replace(/╔/g, '<span class="terminal__border">╔</span>')
                      .replace(/╗/g, '<span class="terminal__border">╗</span>')
                      .replace(/║/g, '<span class="terminal__border">║</span>')
                      .replace(/╠/g, '<span class="terminal__border">╠</span>')
                      .replace(/╣/g, '<span class="terminal__border">╣</span>')
                      .replace(/╚/g, '<span class="terminal__border">╚</span>')
                      .replace(/╝/g, '<span class="terminal__border">╝</span>')
                      .replace(/═/g, '<span class="terminal__border">═</span>')
                  }} />
                ))}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="terminal__input-line">
              <span className="terminal__prompt">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal__input"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </div>
        </div>

        <div className="contact__info">
          <a href="mailto:hello@example.com" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            hello@example.com
          </a>
          <span className="contact__location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Buenos Aires, Argentina
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact

