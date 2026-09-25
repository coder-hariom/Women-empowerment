import useReveal from '../hooks/useReveal.js'

const PROJECTS = [
  {
    icon: '🛡️',
    tag: 'Cyber Safety',
    title: 'Digital Safety',
    desc: 'Fighting cyberbullying and online stalking with practical tools.',
    link: 'https://youtu.be/6oQssKbhGA8?feature=shared',
    cta: 'Explore →',
  },
  {
    icon: '💪',
    tag: 'Empowerment',
    title: 'Society Mentality',
    desc: 'Empowering introverted girls to find their voice and confidence.',
    link: 'https://youtu.be/scvi2EemtDw?feature=shared',
    cta: 'Explore →',
  },
  {
    icon: '🗺️',
    tag: 'Safety',
    title: 'Safe Commute Planner',
    desc: 'Mapping verified safe travel routes for daily commuters.',
    link: 'https://www.linkedin.com/in/Lavlesh0808yadav',
    cta: 'Explore →',
  },
  {
    icon: '🤖',
    tag: 'AI · Wellness',
    title: 'AI Wellness Chatbot',
    desc: '24/7 emotional support assistant powered by AI — always here for you.',
    isChat: true,
    cta: 'Chat Now →',
  },
  {
    icon: '🔗',
    tag: 'Networking',
    title: 'LinkedIn Scrapper',
    desc: 'A privacy-first safe networking tool for professional discovery.',
    link: '#',
    cta: 'Coming Soon',
  },
  {
    icon: '🌐',
    tag: 'Education',
    title: 'Digital Literacy Hub',
    desc: 'Resources and guides to help women navigate the web safely.',
    link: '#',
    cta: 'Coming Soon',
  },
]

export default function Portfolio({ onOpenChat }) {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="portfolio">
      <div className="section-header reveal" ref={headerRef}>
        <p className="section-label">What We Built</p>
        <h2 className="section-title">Our <span className="accent">Portfolio</span></h2>
      </div>

      <div className="portfolio-grid stagger-children" ref={gridRef}>
        {PROJECTS.map((p) => (
          <div className="portfolio-box" key={p.title}>
            <div className="portfolio-img-placeholder">{p.icon}</div>
            <div className="portfolio-body">
              <span className="portfolio-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.isChat ? (
                <button className="btn-card" onClick={onOpenChat}>{p.cta}</button>
              ) : (
                <a className="btn-card" href={p.link} target="_blank" rel="noreferrer">
                  {p.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
