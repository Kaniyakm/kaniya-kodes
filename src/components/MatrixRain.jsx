import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // UPDATE: change character set for different rain feel
    const chars = "アイウエオカキクケコ01♀♦{}[]=>;"
    const fontSize = 14  // UPDATE: larger = sparser columns

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    let columns = Array.from(
      { length: Math.floor(canvas.width / fontSize) },
      () => Math.random() * -50
    )

    function draw() {
      // Fade trail — 0.05 = slow fade, 0.15 = fast fade
      ctx.fillStyle = "rgba(3, 4, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      columns.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const r = Math.random()
        // UPDATE: accent color thresholds + values
        ctx.fillStyle = r > 0.98 ? "#ff6eb4"  // pink accent
                      : r > 0.95 ? "#00e5ff"  // teal accent
                      : "#39ff8f"             // primary green
        ctx.font = `${fontSize}px JetBrains Mono`
        ctx.fillText(char, i * fontSize, y * fontSize)

        if (y * fontSize > canvas.height && Math.random() > 0.975)
          columns[i] = 0
        else columns[i] = y + 1
      })
    }

    // UPDATE: 50 = interval ms. Lower = faster rain
    const interval = setInterval(draw, 50)
    return () => { clearInterval(interval); window.removeEventListener("resize", resize) }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", inset: 0,
      opacity: 0.16,  // UPDATE: raise for more intensity (max 0.28)
      zIndex: 0, pointerEvents: "none"
    }} />
  )
}
