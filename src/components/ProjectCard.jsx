import { useState } from 'react'

// ============================================================
// PROJECT CARD — locked vault card with code preview
// UPDATE: all content via the `project` prop from projects.js
// ============================================================

// Lock SVG icon — bobbing animation defined in style block
function LockIcon() {
  return (
    <svg
      width="38" height="38" viewBox="0 0 40 40" fill="none"
      style={{ animation: 'lock-bob 2.2s ease-in-out infinite' }}
    >
      <rect x="10" y="18" width="20" height="16" rx="3"
        fill="none" stroke="#39ff8f" strokeWidth="1.5"/>
      <path d="M14 18v-4a6 6 0 0112 0v4"
        stroke="#39ff8f" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="26" r="2.5" fill="#39ff8f" opacity="0.7"/>
      <line x1="20" y1="28.5" x2="20" y2="31"
        stroke="#39ff8f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function ProjectCard({ project }) {
  const [unlocked, setUnlocked] = useState(false)
  const [btnHover, setBtnHover] = useState(false)
  const [cardHover, setCardHover] = useState(false)
  const [linkHover, setLinkHover] = useState(null)

  // project shape (from data/projects.js):
  // { id, number, name, desc, tags[], previewGradient,
  //   previewLines[], emoji, barWidth, liveHref, githubHref }

  return (
    <>
      <style>{`
        /* Syntax tokens — shared across all code previews */
        .ck  { color: #ff79c6; }
        .cv  { color: #f8f8f2; }
        .cp  { color: #8be9fd; }
        .cs  { color: #50fa7b; }
        .cc  { color: #6272a4; font-style: italic; }
        .cn  { color: #bd93f9; }
        .cpt { color: #6272a4; }

        /* Lock icon bobs up and down */
        @keyframes lock-bob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
      `}</style>

      <div
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
        style={{
          flex: '0 0 340px',          // UPDATE: also update CARD_WIDTH in ProjectsVault.jsx
          background: '#0b0c18',
          border: `1px solid ${cardHover ? 'rgba(57,255,143,0.25)' : '#151628'}`,
          borderRadius: '14px',
          overflow: 'hidden',
          position: 'relative',
          transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          transform: cardHover ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: cardHover
            ? '0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(57,255,143,0.08)'
            : 'none',
          cursor: 'none',
        }}
      >

        {/* ── Lock overlay — blurred until unlock clicked ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(3,4,10,0.82)',
          backdropFilter: unlocked ? 'blur(0)' : 'blur(8px)',
          zIndex: 3,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '14px',
          opacity: unlocked ? 0 : 1,
          pointerEvents: unlocked ? 'none' : 'auto',
          transition: 'opacity 0.45s ease, backdrop-filter 0.45s ease',
        }}>
          <LockIcon />

          <div style={{
            fontSize: 10, letterSpacing: '2.5px',
            color: '#5a5a7a', textTransform: 'uppercase',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            // classified
          </div>

          {/* Unlock button */}
          <button
            onClick={() => setUnlocked(true)}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              padding: '7px 20px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10, letterSpacing: '2px',
              background: btnHover ? '#39ff8f' : 'transparent',
              border: '1px solid #39ff8f',
              color: btnHover ? '#000' : '#39ff8f',
              borderRadius: '4px',
              cursor: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            → Unlock Access
          </button>
        </div>

        {/* ── Code-styled preview header ── */}
        {/* UPDATE: previewGradient and previewLines in projects.js */}
        <div style={{
          height: '145px',
          padding: '12px 16px',
          position: 'relative',
          overflow: 'hidden',
          fontSize: 10,
          lineHeight: 1.75,
          fontFamily: 'JetBrains Mono, monospace',
          background: project.previewGradient,
          borderBottom: '1px solid #151628',
        }}>
          {project.previewLines.map((line, i) => (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: line }}
              style={{ display: 'block', marginBottom: 1, whiteSpace: 'pre' }}
            />
          ))}

          {/* Project emoji — bottom right */}
          <span style={{
            position: 'absolute', right: 14, bottom: 12,
            fontSize: 26, opacity: 0.55,
          }}>
            {project.emoji}
          </span>

          {/* Progress bar at base of preview */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            height: '2px',
            width: project.barWidth,
            background: 'linear-gradient(90deg, #39ff8f, #00e5ff)',
            boxShadow: '0 0 8px #39ff8f',
          }} />
        </div>

        {/* ── Card body ── */}
        <div style={{ padding: '20px 20px 14px' }}>

          {/* UPDATE: number, name, desc in projects.js */}
          <div style={{ fontSize: 10, color: '#39ff8f', letterSpacing: '2px', marginBottom: 8, fontFamily: 'JetBrains Mono, monospace' }}>
            {project.number}
          </div>

          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: '#dde0f0', marginBottom: 8 }}>
            {project.name}
          </div>

          <div style={{ fontSize: 11, color: '#5a5a7a', lineHeight: 1.75, marginBottom: 14, fontFamily: 'JetBrains Mono, monospace' }}>
            {project.desc}
          </div>

          {/* Tags — UPDATE in projects.js */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.tags.map((tag, i) => (
              <span key={i} style={{
                fontSize: 10, padding: '3px 9px',
                borderRadius: '3px',
                border: '1px solid #151628',
                color: '#5a5a7a',
                background: '#070810',
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Card footer links ── */}
        {/* UPDATE: liveHref and githubHref in projects.js */}
        <div style={{
          padding: '13px 20px',
          borderTop: '1px solid #151628',
          display: 'flex', gap: 14,
        }}>
          {[
            { label: 'Live Demo →', href: project.liveHref,   key: 'live'   },
            { label: 'GitHub →',    href: project.githubHref, key: 'github' },
          ].map(({ label, href, key }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setLinkHover(key)}
              onMouseLeave={() => setLinkHover(null)}
              style={{
                fontSize: 10, letterSpacing: '1.5px',
                textTransform: 'uppercase', textDecoration: 'none',
                fontFamily: 'JetBrains Mono, monospace',
                color: linkHover === key ? '#39ff8f' : '#5a5a7a',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </>
  )
}