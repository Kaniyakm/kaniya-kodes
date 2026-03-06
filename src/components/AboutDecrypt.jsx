import { useState, useEffect, useRef } from 'react'

// ============================================================
// ABOUT SECTION — two column layout
// Left: manifesto copy + core values
// Right: kaniya-kodes.js animated code block
// ============================================================

const VALUE_BADGES = [
  'Clean Code',
  'User-First',
  'Accessible',
  'Performant',
  'Secure',
]

const CODE_LINES = [
  `<span class="ck">const</span> <span class="cv">KaniyaKodes</span> <span class="cpt">= {</span>`,
  `  <span class="cp">role</span><span class="cpt">:</span> <span class="cs">"Front-End Software Engineer"</span><span class="cpt">,</span>`,
  ``,
  `  <span class="cp">focus</span><span class="cpt">: [</span>`,
  `    <span class="cs">"React Applications"</span><span class="cpt">,</span>`,
  `    <span class="cs">"Responsive UI"</span><span class="cpt">,</span>`,
  `    <span class="cs">"User Experience"</span><span class="cpt">,</span>`,
  `    <span class="cs">"API Integration"</span><span class="cpt">,</span>`,
  `    <span class="cs">"Accessibility"</span><span class="cpt">,</span>`,
  `    <span class="cs">"Performance Optimization"</span>`,
  `  <span class="cpt">],</span>`,
  ``,
  `  <span class="cp">buildWith</span><span class="cpt">: [</span>`,
  `    <span class="cs">"React"</span><span class="cpt">,</span> <span class="cs">"JavaScript"</span><span class="cpt">,</span> <span class="cs">"TypeScript"</span><span class="cpt">,</span>`,
  `    <span class="cs">"Node.js"</span><span class="cpt">,</span> <span class="cs">"Express"</span><span class="cpt">,</span> <span class="cs">"MongoDB"</span><span class="cpt">,</span>`,
  `    <span class="cs">"Tailwind CSS"</span><span class="cpt">,</span> <span class="cs">"REST APIs"</span><span class="cpt">,</span>`,
  `    <span class="cs">"Git"</span><span class="cpt">,</span> <span class="cs">"Figma"</span>`,
  `  <span class="cpt">],</span>`,
  ``,
  `  <span class="cp">principles</span><span class="cpt">: {</span>`,
  `    <span class="cp">clean</span><span class="cpt">:</span> <span class="cn">true</span><span class="cpt">,</span>`,
  `    <span class="cp">accessible</span><span class="cpt">:</span> <span class="cn">true</span><span class="cpt">,</span>`,
  `    <span class="cp">performant</span><span class="cpt">:</span> <span class="cn">true</span>`,
  `  <span class="cpt">},</span>`,
  ``,
  `  <span class="cc">// 2026 · Per Scholas Graduate · Open to opportunities</span>`,
  `<span class="cpt">};</span>`,
]

export default function AboutDecrypt() {
  const [visibleLines, setVisibleLines] = useState([])
  const [badgeHover, setBadgeHover] = useState(null)
  const codeRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          CODE_LINES.forEach((_, i) => {
            setTimeout(() => {
              setVisibleLines(prev => [...prev, i])
            }, i * 65)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (codeRef.current) observer.observe(codeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .ck  { color: #ff79c6; }
        .cv  { color: #f8f8f2; }
        .cp  { color: #8be9fd; }
        .cs  { color: #50fa7b; }
        .cs2 { color: #f1fa8c; }
        .cc  { color: #6272a4; font-style: italic; }
        .cn  { color: #bd93f9; }
        .cpt { color: #6272a4; }
        .c-cursor {
          display: inline-block;
          width: 2px; height: 14px;
          background: #39ff8f;
          vertical-align: middle;
          margin-left: 3px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        .hl-green { color: #39ff8f; font-weight: 500; }
        .hl-teal  { color: #00e5ff; font-weight: 500; }
        .cl-line {
          display: block;
          white-space: pre;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 2.1;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          min-height: 1.4em;
        }
        .cl-line.in { opacity: 1; transform: none; }
        .mac-dot { width: 11px; height: 11px; border-radius: 50%; }
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

      <section id="about" style={{ padding: '130px 0', position: 'relative', zIndex: 1 }}>
        <div className="about-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '80px',
          alignItems: 'center',
        }}>

          {/* ── LEFT: Manifesto copy ── */}
          <div>

            {/* Paragraph 1 — Who you are */}
            <p style={{ fontSize: 15, lineHeight: 1.95, color: '#dde0f0', marginBottom: 24, fontWeight: 300, fontFamily: 'JetBrains Mono, monospace' }}>
              I'm <span className="hl-green">Kaniya Martin</span> — also known as{' '}
              <span className="hl-teal">Kaniya Kodes</span> — a Front-End Software Engineer
              with a background in UX design and full-stack MERN development. I trained in an
              intensive Software Engineering program at Per Scholas where I built real-world
              applications using React, Node.js, Express, and MongoDB. My foundation in user
              experience design combined with engineering allows me to build applications that
              are both functional and intuitive.
            </p>

            {/* Paragraph 2 — How you work */}
            <p style={{ fontSize: 15, lineHeight: 1.95, color: '#dde0f0', marginBottom: 24, fontWeight: 300, fontFamily: 'JetBrains Mono, monospace' }}>
              My approach to development is <span className="hl-green">design-forward</span> and
              user-focused. I start by understanding the problem, mapping the user experience,
              and then building clean, scalable solutions using modern front-end architecture.
              I believe great applications come from thoughtful design, reusable components,
              and well-structured code. I enjoy debugging complex problems and continuously
              improving performance and usability.
            </p>

            {/* Paragraph 3 — Your niche */}
            <p style={{ fontSize: 15, lineHeight: 1.95, color: '#dde0f0', marginBottom: 0, fontWeight: 300, fontFamily: 'JetBrains Mono, monospace' }}>
              I specialize in building responsive dashboards and interactive web applications
              with a focus on <span className="hl-teal">fintech and data-driven user experiences.</span>{' '}
              My work centers around React applications, REST APIs, and mobile-first interfaces
              that help users understand and manage information more effectively.
            </p>

            {/* Core Values */}
            <div style={{ fontSize: 10, letterSpacing: '3px', textTransform: 'uppercase', color: '#5a5a7a', marginTop: 36, marginBottom: 14 }}>
              Core Values
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {VALUE_BADGES.map((badge, i) => (
                <span
                  key={i}
                  onMouseEnter={() => setBadgeHover(i)}
                  onMouseLeave={() => setBadgeHover(null)}
                  style={{
                    padding: '8px 18px',
                    fontSize: 12,
                    fontFamily: 'JetBrains Mono, monospace',
                    color: badgeHover === i ? '#39ff8f' : '#dde0f0',
                    background: '#0b0c18',
                    border: `1px solid ${badgeHover === i ? 'rgba(57,255,143,0.4)' : '#151628'}`,
                    borderRadius: '100px',
                    cursor: 'none',
                    transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
                    boxShadow: badgeHover === i ? '0 0 12px rgba(57,255,143,0.12)' : 'none',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: kaniya-kodes.js code block ── */}
          <div ref={codeRef} style={{ position: 'relative' }}>

            {/* Ambient glow */}
            <div style={{
              position: 'absolute', width: 300, height: 300,
              background: 'radial-gradient(circle, rgba(57,255,143,0.05) 0%, transparent 70%)',
              top: -60, right: -60, borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', width: 200, height: 200,
              background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)',
              bottom: -40, left: -40, borderRadius: '50%', pointerEvents: 'none',
            }} />

            {/* Code window */}
            <div style={{
              background: '#0d1117',
              border: '1px solid #21262d',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(57,255,143,0.04), 0 30px 80px rgba(0,0,0,0.6)',
            }}>

              {/* macOS title bar */}
              <div style={{
                background: '#161b22',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                borderBottom: '1px solid #21262d',
              }}>
                {[['#ff5f57'], ['#febc2e'], ['#28c840']].map(([c], i) => (
                  <div key={i} className="mac-dot" style={{ background: c }} />
                ))}
                <span style={{ marginLeft: 10, fontSize: 11, color: '#8b949e', fontFamily: 'JetBrains Mono, monospace' }}>
                  kaniya-kodes.js
                </span>
              </div>

              {/* Code lines */}
              <div style={{ padding: '24px 28px', overflowX: 'auto' }}>
                {CODE_LINES.map((line, i) => (
                  <span
                    key={i}
                    className={`cl-line ${visibleLines.includes(i) ? 'in' : ''}`}
                    dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }}
                  />
                ))}
                <span className="c-cursor" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
