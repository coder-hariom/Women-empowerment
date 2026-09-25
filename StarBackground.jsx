import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H
    let raf
    const stars = []

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.003,
        dx: (Math.random() - 0.5) * 0.12,
        dy: (Math.random() - 0.5) * 0.12,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      stars.forEach((s) => {
        s.x = ((s.x + s.dx) % W + W) % W
        s.y = ((s.y + s.dy) % H + H) % H
        s.a = Math.max(0.05, Math.min(0.8, s.a + s.da))
        if (Math.random() < 0.01) s.da *= -1

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(252,211,77,' + s.a + ')'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} />
      <div className="bg-mesh" />
    </>
  )
}
