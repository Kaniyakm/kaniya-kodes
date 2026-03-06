import { useState, useEffect } from 'react'

// ============================================================
// PRELOADER — terminal boot sequence
// UPDATE: bootLines array to change the text shown on load
// UPDATE: LINE_DELAY  = ms between each line appearing
// UPDATE: HOLD_AFTER  = ms to stay on screen after last line
// ============================================================

const LINE_DELAY    = 900   // was 560 — slower line printing
const HOLD_AFTER    = 1800  // ms to stay visible after last line
const EXIT_DURATION = 700   // ms for the slide-up exit animation

const bootLines = [
  { html: `<span class="ck">$</span> <span class="cv">./boot.sh</span>` },
  { html: `<span class="cc">// Initializing KANIYA_KODES OS…</span>` },
  { html: `<span class="cp">status</span><span class="cpt">:</span> <span class="cs">"verifying components"</span>` },
  { html: `<span class="cp">modules</span><span class="cpt">:</span> <span class="cs">"loading secure assets"</span>` },
  { html: `<span class="cpt">[</span><span class="cs">████████████████████</span><span class="cpt">]</span> <span class="cn">100%</span>` },
  { html: `<span class="ck">return</span> <span class="cs">"ACCESS_GRANTED"</span> <span class="cn">✓</span>` },
]

export default function Preloader({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [progress, setProgress]         = useState(0)
  const [exiting, setExiting]           = useState(false)
  const [gone, setGone]                 = useState(false) // FIX 1: removes ghost from DOM

  // Check if already visited on mount
  useEffect(() => {
    const visited = sessionStorage.getItem('kk-visited')
    if (visited) {
      onComplete()
    }
  }, [onComplete])

  useEffect(() => {
    // Skip animation if already visited
    const visited = sessionStorage.getItem('kk-visited')
    if (visited) {
      return
    }

    // Stagger each boot line
    const lineTimers = bootLines.map((line, i) =>         // FIX 3: save timers to clean up
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        setProgress(Math.round((i + 1) / bootLines.length * 100))
      }, i * LINE_DELAY)
    )

    // FIX 2: wait HOLD_AFTER ms after last line before starting exit
    const totalDelay = (bootLines.length - 1) * LINE_DELAY + HOLD_AFTER
    const exitTimer = setTimeout(() => {
      setExiting(true)
      setTimeout(() => {
        setGone(true)   // FIX 1: fully removes div — no more ghost overlay
        sessionStorage.setItem('kk-visited', 'true')
        onComplete()
      }, EXIT_DURATION)
    }, totalDelay)

    // Cleanup on unmount
    return () => {
      lineTimers.forEach(clearTimeout)
      clearTimeout(exitTimer)
    }
  }, [onComplete])

  // FIX 1: return null = div is gone from DOM entirely, no invisible overlay
  if (gone) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#03040a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
      opacity: exiting ? 0 : 1,
      transition: `transform ${EXIT_DURATION}ms cubic-bezier(0.22,1,0.36,1), opacity ${EXIT_DURATION}ms ease`,
      pointerEvents: exiting ? 'none' : 'auto',
    }}>

      {/* Logo — UPDATE: text here */}
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(24px, 5vw, 46px)',
        fontWeight: 800,
        background: 'linear-gradient(90deg, #39ff8f, #00e5ff, #ff6eb4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '3px',
      }}>
        KANIYA KODES
      </div>

      {/* Code window */}
      <div style={{
        width: 'min(520px, 92vw)',
        background: '#0d1117',
        border: '1px solid #21262d',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 60px rgba(57,255,143,0.07)',
      }}>

        {/* macOS title bar — UPDATE: filename */}
        <div style={{
          background: '#161b22',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          borderBottom: '1px solid #21262d',
        }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ marginLeft: 10, fontSize: 11, color: '#8b949e', fontFamily: 'JetBrains Mono, monospace' }}>
            boot.sh {/* UPDATE: filename shown in bar */}
          </span>
        </div>

        {/* Terminal lines */}
        <div style={{ padding: '20px 28px', minHeight: '160px' }}>
          {visibleLines.map((line, i) => (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: line.html }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '13px',       // slightly larger than before
                lineHeight: '2.1',
                whiteSpace: 'pre',
                padding: '1px 0',
                animation: 'lineIn 0.4s ease forwards',
              }}
            />
          ))}
          {/* Blinking cursor */}
          {visibleLines.length < bootLines.length && (
            <span style={{
              display: 'inline-block',
              width: 8, height: 13,
              background: '#39ff8f',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: 'min(520px, 92vw)',
        height: '2px',
        background: '#2a2a42',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #39ff8f, #00e5ff, #ff6eb4)',
          borderRadius: '2px',
          transition: 'width 0.4s linear',
          boxShadow: '0 0 10px #39ff8f',
        }} />
      </div>

      {/* Global keyframes + syntax token colors */}
      <style>{`
        @keyframes blink  { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes lineIn { from { opacity:0; transform:translateX(-6px); } to { opacity:1; transform:none; } }
        .ck  { color: #ff79c6; }
        .cv  { color: #f8f8f2; }
        .cp  { color: #8be9fd; }
        .cs  { color: #50fa7b; }
        .cc  { color: #6272a4; font-style: italic; }
        .cn  { color: #bd93f9; }
        .cpt { color: #6272a4; }
      `}</style>
    </div>
  )
}
