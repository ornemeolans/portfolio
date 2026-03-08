import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__container">
          <a href="#hero" className="nav__logo">
            <span className="nav__logo-symbol">{"</>"}</span>
            <span className="nav__logo-text">Portfolio</span>
          </a>
          <ul className="nav__links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} • Built with passion</p>
      </footer>
    </div>
  )
}

export default App

