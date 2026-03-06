import { useEffect } from 'react'
import { useCipherText } from '../hooks/useCipherText'

// UPDATE: your tagline — this is what scrambles on load
const TAGLINE = 'Unlock the Code. Create the Experience. Connect the Future.'

export default function HeroVault({ ready }) {
  const { text, scramble } = useCipherText(TAGLINE)

  useEffect(() => {
    if (ready) setTimeout(scramble, 400)
  }, [ready, scramble])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '120px 24px 60px', textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>

      {/* Eyebrow role */}
      <p style={{
        fontSize: 11, letterSpacing: '4px', textTransform: 'uppercase',
        color: '#39ff8f', marginBottom: 20, fontFamily: 'JetBrains Mono, monospace',
      }}>
        React Developer  ·  UI/UX Engineer
      </p>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(42px, 9vw, 96px)', fontWeight: 800,
        color: '#dde0f0', lineHeight: 1.05, marginBottom: 16,
      }}>
        Kaniya Martin
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(16px, 3vw, 26px)', fontWeight: 700,
        color: '#5a5a7a', marginBottom: 32, letterSpacing: '1px',
      }}>
        the keys to creative development
      </p>

      {/* Cipher tagline — {text} is the scrambling output from useCipherText */}
      <p style={{
        maxWidth: 560, fontSize: 14, lineHeight: 1.9,
        color: '#5a5a7a', marginBottom: 48,
        fontFamily: 'JetBrains Mono, monospace',
        minHeight: '1.9em', // prevents layout shift while scrambling
      }}>
        {text}
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" style={{
          padding: '13px 32px', fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none', background: '#39ff8f', color: '#000',
          borderRadius: '6px', fontWeight: 700,
        }}>
          🔓 Unlock Projects
        </a>

        <a href="/resume.pdf" target="_blank" rel="noreferrer" style={{
          padding: '13px 32px', fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase',
          textDecoration: 'none', background: 'transparent',
          border: '1px solid #151628', color: '#5a5a7a',
          borderRadius: '6px',
        }}>
          View Resume ↗
        </a>
      </div>

    </section>
  )
}
