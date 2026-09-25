import { useEffect, useRef } from 'react'

export default function ChatWidget({ open, onOpen, onClose }) {
  const windowRef = useRef(null)
  const toggleRef = useRef(null)

  // Close on outside click (mobile) or Escape — mirrors the original script.js
  useEffect(() => {
    function handleClick(e) {
      if (
        open &&
        windowRef.current &&
        !windowRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        onClose()
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return (
    <>
      <button
        id="chat-toggle"
        ref={toggleRef}
        aria-label="Open AI Chat"
        title="Chat with Bliss AI"
        onClick={() => (open ? onClose() : onOpen())}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#0d0e14" strokeWidth="2.2"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="chat-badge">AI</span>
      </button>

      <div
        id="chat-window"
        ref={windowRef}
        className={open ? 'open' : ''}
        role="dialog"
        aria-label="Bliss AI Chatbot"
      >
        <div className="chat-header">
          <div className="chat-avatar-icon">🤖</div>
          <div className="chat-header-info">
            <div className="chat-title">Bliss AI — Wellness Bot</div>
            <div className="chat-status">Online &amp; Ready</div>
          </div>
          <button className="chat-close" aria-label="Close chat" onClick={onClose}>✕</button>
        </div>

        <div className="chat-iframe-wrapper">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/5cf0I5o0EWEqnd6MA-tem"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="microphone"
            title="Bliss AI Wellness Chatbot"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}
