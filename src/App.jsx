import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a link
  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__container">
          <a href="#hero" className="nav__logo" onClick={handleNavClick}>
            <span className="nav__logo-symbol">{"</>"}</span>
            <span className="nav__logo-text">Portfolio</span>
          </a>
          
          <button 
            className={`nav__toggle ${menuOpen ? 'nav__toggle--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="nav__toggle-bar"></span>
          </button>

          <ul className={`nav__links ${menuOpen ? 'nav__links--active' : ''}`}>
            <li><a href="#hero" onClick={handleNavClick}>Inicio</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Proyectos</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} • Construido con pasión</p>
      </footer>
    </div>
  )
}

export default App

