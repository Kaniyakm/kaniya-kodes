import { useState } from 'react'
import { skills } from '../data/skills'
import { useReveal } from '../hooks/useReveal'

// ============================================================
// SKILLS SECTION — "The Cipher System"
// Grid of skill tiles. Hover reveals proficiency level.
// UPDATE: skill data in src/data/skills.js
// ============================================================

export default function SkillsCipher() {
  const [hoveredId, setHoveredId] = useState(null)
  const { ref, visible } = useReveal()

  return (
    <section id="skills" style={{ padding: '130px 24px', position: 'relative', zIndex: 1 }}>

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{
          fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase',
          color: '#39ff8f', marginBottom: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          <span style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, #39ff8f)', display: 'inline-block' }} />
          {/* UPDATE: section tag text */}
          The Cipher System
          <span style={{ width: 40, height: 1, background: 'linear-gradient(90deg, #39ff8f, transparent)', display: 'inline-block' }} />
        </div>

        {/* UPDATE: section title */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#dde0f0',
        }}>
          Skills
        </h2>
      </div>

      {/* Skills grid — useReveal triggers fade-in on scroll */}
      <div
        ref={ref}
        style={{
          maxWidth: 820,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))',
          gap: 14,
          // Fade in when visible
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.65s ease, transform 0.65s ease',
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={skill.id}
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              background: '#0b0c18',
              border: `1px solid ${hoveredId === skill.id ? 'rgba(57,255,143,0.3)' : '#151628'}`,
              borderRadius: 10,
              padding: '20px 14px',
              textAlign: 'center',
              cursor: 'none',
              position: 'relative',
              overflow: 'hidden',
              transform: hoveredId === skill.id ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: hoveredId === skill.id ? '0 8px 24px rgba(57,255,143,0.07)' : 'none',
              transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
              // Stagger each tile's reveal
              transitionDelay: visible ? `${i * 0.05}s` : '0s',
            }}
          >
            {/* Hover overlay — shows skill.level text */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(11,12,24,0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 12,
              opacity: hoveredId === skill.id ? 1 : 0,
              transition: 'opacity 0.25s ease',
              borderRadius: 10,
            }}>
              {/* UPDATE: level text comes from skills.js data-level field */}
              <span style={{
                fontSize: 10, color: '#39ff8f',
                letterSpacing: '0.5px', lineHeight: 1.6,
                fontFamily: 'JetBrains Mono, monospace',
                textAlign: 'center',
              }}>
                {skill.level}
              </span>
            </div>

            {/* Skill icon */}
            <div style={{ fontSize: 26, marginBottom: 9 }}>{skill.icon}</div>

            {/* Skill name */}
            <div style={{
              fontSize: 11, color: '#5a5a7a',
              letterSpacing: '1px',
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
