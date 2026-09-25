import useReveal from '../hooks/useReveal.js'

const CHIPS = [
  { icon: '🏛️', text: 'Delhi — Institute of Higher Education' },
  { icon: '📞', text: '+91 9155730264' },
  { icon: '📍', text: 'Noida, Uttar Pradesh' },
]

export default function Contact() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const chipsRef = useReveal()

  return (
    <section id="contact">
      <p className="section-label reveal" ref={labelRef}>Get in Touch</p>
      <h2 className="section-title reveal" ref={titleRef}>Contact <span className="accent">Us</span></h2>

      <div className="contact-chips stagger-children" ref={chipsRef}>
        {CHIPS.map((c) => (
          <div className="chip" key={c.text}>
            <span className="chip-icon">{c.icon}</span>
            {c.text}
          </div>
        ))}
      </div>
    </section>
  )
}
