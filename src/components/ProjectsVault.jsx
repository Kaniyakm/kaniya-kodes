import { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

// ============================================================
// PROJECTS CAROUSEL — Encrypted Vault
// Horizontal scroll between locked project cards.
//
// UPDATE: CARD_WIDTH must match flex-basis in ProjectCard.jsx (340)
// UPDATE: GAP must match the gap value below (24)
// UPDATE: project data in src/data/projects.js
// ============================================================

const CARD_WIDTH    = 340  // UPDATE: match ProjectCard flex-basis
const GAP           = 24   // UPDATE: match gap between cards
const VISIBLE_CARDS = 5    // cards visible at once — scroll reveals the rest

export default function ProjectsVault() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevBtnHover, setPrevBtnHover] = useState(false)
  const [nextBtnHover, setNextBtnHover] = useState(false)
  const dragStartX = useRef(0)

  const totalCards = projects.length
  const maxIndex   = Math.max(0, totalCards - VISIBLE_CARDS)

  function goTo(index) {
    const clamped = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clamped)
  }

  // Touch/swipe support for mobile
  function handleTouchStart(e) {
    dragStartX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e) {
    const diff = dragStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1))
  }

  const carouselBtnStyle = (hovered) => ({
    width: 42, height: 42,
    borderRadius: '50%',
    background: '#0b0c18',
    border: `1px solid ${hovered ? '#39ff8f' : '#151628'}`,
    color: hovered ? '#39ff8f' : '#5a5a7a',
    fontSize: 16,
    cursor: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
    boxShadow: hovered ? '0 0 14px rgba(57,255,143,0.2)' : 'none',
  })

  return (
    <section id="projects" style={{ padding: '130px 0', position: 'relative', zIndex: 1 }}>

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 64, padding: '0 24px' }}>

        {/* Section tag with line decorations */}
        <div style={{
          fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase',
          color: '#39ff8f', marginBottom: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          <span style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #39ff8f)' }} />
          {/* UPDATE: section tag label */}
          Encrypted Vault
          <span style={{ width: 40, height: 1, background: 'linear-gradient(90deg, #39ff8f, transparent)' }} />
        </div>

        {/* UPDATE: section title */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#dde0f0',
        }}>
          Projects
        </h2>
      </div>

      {/* Carousel track wrapper — overflow hidden */}
      <div style={{ overflow: 'hidden', padding: '10px 0 44px' }}>
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            padding: '10px 60px',
            // Translate by card width + gap for each step
            transform: `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)`,
            transition: 'transform 0.52s cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'transform',
          }}
        >
          {/* Render all project cards — data from src/data/projects.js */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Carousel controls — prev/dots/next */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
        marginTop: 20,
      }}>

        {/* Prev button */}
        <button
          onClick={() => goTo(currentIndex - 1)}
          onMouseEnter={() => setPrevBtnHover(true)}
          onMouseLeave={() => setPrevBtnHover(false)}
          style={carouselBtnStyle(prevBtnHover)}
          aria-label="Previous project"
        >
          ←
        </button>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 8 }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              style={{
                width: i === currentIndex ? 24 : 6,
                height: 6,
                borderRadius: i === currentIndex ? '3px' : '50%',
                background: i === currentIndex ? '#39ff8f' : '#151628',
                border: 'none',
                cursor: 'none',
                transition: 'background 0.2s, width 0.25s, border-radius 0.25s',
                boxShadow: i === currentIndex ? '0 0 8px #39ff8f' : 'none',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => goTo(currentIndex + 1)}
          onMouseEnter={() => setNextBtnHover(true)}
          onMouseLeave={() => setNextBtnHover(false)}
          style={carouselBtnStyle(nextBtnHover)}
          aria-label="Next project"
        >
          →
        </button>

      </div>
    </section>
  )
}