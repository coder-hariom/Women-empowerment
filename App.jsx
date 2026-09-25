import { useState } from 'react'
import StarBackground from './components/StarBackground.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <StarBackground />

      <Header />

      <Hero />
      <div className="section-divider" />

      <About />
      <div className="section-divider" />

      <Portfolio onOpenChat={() => setChatOpen(true)} />
      <div className="section-divider" />

      <Team />
      <div className="section-divider" />

      <Contact />

      <Footer />

      <ChatWidget
        open={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
      />
    </>
  )
}
