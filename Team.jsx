import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'

const TEAM = [
  { name: 'Hari Om Tiwari', role: 'Project Manager & Lead Developer', img: '/images/hariomtiwari.jpg', initial: 'H' },
  { name: 'Lavlesh Kumar Yadav', role: 'UI/UX Designer', img: '/images/lavleshkumar.jpg', initial: 'L' },
]

function TeamAvatar({ img, initial, name }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return <div className="team-avatar fallback-avatar" style={{ display: 'flex' }}>{initial}</div>
  }

  return (
    <img
      className="team-avatar"
      src={img}
      alt={name}
      onError={() => setErrored(true)}
    />
  )
}

export default function Team() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const subRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="team">
      <p className="section-label reveal" ref={labelRef}>The People Behind It</p>
      <h2 className="section-title reveal" ref={titleRef}>Our <span className="accent">Team</span></h2>
      <p className="team-sub reveal from-bottom" ref={subRef}>
        Empowered women empower the world. Together, our strength,
        resilience, and dedication forge a safer future for every woman.
      </p>

      <div className="team-grid stagger-children" ref={gridRef}>
        {TEAM.map((member) => (
          <div className="team-box" key={member.name}>
            <TeamAvatar img={member.img} initial={member.initial} name={member.name} />
            <h3>{member.name}</h3>
            <div className="team-role">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
