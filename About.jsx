import useReveal from '../hooks/useReveal.js'

const STATS = [
  { num: '6+', lbl: 'Projects Built' },
  { num: '2', lbl: 'Team Members' },
  { num: '1', lbl: 'Hackathon' },
]

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  const statsRef = useReveal()

  return (
    <section id="about">
      <div className="about-left reveal" ref={leftRef}>
        <p className="section-label">Who We Are</p>
        <h2 className="section-title">
          <span className="accent">About</span><br />Team Bliss
        </h2>
      </div>

      <div className="about-right reveal from-right" ref={rightRef}>
        <p>
          <strong>TEAM BLISS</strong> is a dedicated group of innovators
          with a clear mission: to enhance digital safety and empower women
          in the online space.
        </p>
        <p>
          Recognizing the unique challenges that women face in the digital
          world, our team combines expertise in user experience design and
          social impact to create solutions that are both effective and
          accessible.
        </p>
        <p>
          We are passionate about developing tools and platforms that
          protect women from online threats, foster a safe digital
          environment, and educate users on best practices for staying
          secure online.
        </p>

        <div className="about-stats stagger-children" ref={statsRef}>
          {STATS.map((s) => (
            <div className="stat-box" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
