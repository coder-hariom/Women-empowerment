import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleLinkClick(e, href) {
    e.preventDefault()
    setNavOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header id="main-header" className={scrolled ? 'scrolled' : ''}>
        <div className="orbit-container">
          <div className="orbit-ring"></div>
          <div className="center-dot"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
          <div className="orbit-dot"></div>
        </div>

        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger ${navOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-nav ${navOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setNavOpen(false)}>✕</button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mob-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
