import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { GitHubIcon, MenuIcon, CloseIcon } from './Icons'
import './Navbar.css'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className={`navbar${isScrolled ? ' navbar-scrolled' : ''}`}>
      <nav className="navbar-inner" aria-label="Primary">
        <a href="#home" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <span className="navbar-logo-mark">JP</span>
          <span className="navbar-logo-text">Janhavi Parab</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'is-active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            aria-label="Open GitHub profile in a new tab"
          >
            <GitHubIcon width={20} height={20} />
          </a>
          <button
            type="button"
            className="navbar-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`navbar-mobile${isOpen ? ' is-open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'is-active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-mobile-github"
          onClick={() => setIsOpen(false)}
        >
          <GitHubIcon width={18} height={18} />
          {profile.githubDisplay}
        </a>
      </div>
    </header>
  )
}
