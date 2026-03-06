import { useState, useEffect } from 'react'

export default function KeyCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    // Track mouse position
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)

    // Hover effect on all interactive elements
    // UPDATE: add your own selectors here
    const targets = document.querySelectorAll(
      "a, button, .project-card, .skill-tile, .value-badge"
    )
    targets.forEach(el => {
      el.addEventListener("mouseenter", () => setHovering(true))
      el.addEventListener("mouseleave", () => setHovering(false))
    })

    window.addEventListener("mousedown", () => setClicking(true))
    window.addEventListener("mouseup",   () => setClicking(false))

    return () => window.removeEventListener("mousemove", move)
  }, [])

  // SVG key — UPDATE: stroke="#39ff8f" to match --green token
  return (
<div style={{
      position: "fixed", top: pos.y, left: pos.x,
      width: 30, height: 30,
      transform: "translate(-50%, -50%)",
      pointerEvents: "none", zIndex: 99999,
    }}>
      <svg viewBox="0 0 32 32" fill="none"
        style={{ transform: hovering ? "rotate(-30deg) scale(1.35)"
          : clicking ? "rotate(20deg) scale(0.8)" : "none",
          transition: "transform 0.2s ease" }}>
        {/* Key bow */}
        <circle cx="12" cy="12" r="7"
          stroke="#39ff8f" strokeWidth="1.8" fill="none"/>
        <circle cx="12" cy="12" r="3"
          fill="#39ff8f" opacity="0.35"/>
        {/* Key shaft + teeth */}
        <rect x="17" y="11" width="11" height="2.4"
          rx="1.2" fill="#39ff8f"/>
        <rect x="24" y="13.4" width="2.4" height="3.2"
          rx="1" fill="#39ff8f"/>
        <rect x="20" y="13.4" width="2.4" height="2.4"
          rx="1" fill="#39ff8f"/>
      </svg>
    </div>
  )
}
