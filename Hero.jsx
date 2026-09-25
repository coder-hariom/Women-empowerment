import { useMemo } from 'react'

export default function Hero() {
  // Generate the same kind of randomized floating particles the
  // original script.js created, but declaratively.
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: Math.random() * 100 + '%',
        dur: (Math.random() * 10 + 6).toFixed(1) + 's',
        del: (Math.random() * 8).toFixed(1) + 's',
      })),
    []
  )

  function scrollTo(e, href) {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home">
      <div className="hero-particles" id="hero-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            style={{ left: p.left, '--dur': p.dur, '--del': p.del }}
          />
        ))}
      </div>
      <div className="hero-inner">
        <span className="hero-badge">✦ Hackathon 2025 Project</span>
        <h1>
          Empowering Women,<br /><span>Securing Lives</span>
        </h1>
        <p className="hero-sub">
          Digital safety tools built by Team Bliss — because every woman
          deserves a secure online future.
        </p>
        <div className="hero-btns">
          <a href="#portfolio" className="btn-primary" onClick={(e) => scrollTo(e, '#portfolio')}>
            Explore Projects
          </a>
          <a href="#about" className="btn-outline" onClick={(e) => scrollTo(e, '#about')}>
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  )
}
