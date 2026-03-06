import { useState } from 'react'

// ============================================================
// FOOTER — minimal mono signature with social links
// UPDATE: GITHUB_URL, LINKEDIN_URL, RESUME_URL below
// UPDATE: name, tagline, year text
// ============================================================

// UPDATE: your real URLs here
const GITHUB_URL   = 'https://github.com/YOUR_USERNAME'      // ← UPDATE
const LINKEDIN_URL = 'https://linkedin.com/in/YOUR_PROFILE'  // ← UPDATE
const RESUME_URL   = '/resume.pdf'                            // ← PDF in /public folder

export default function FooterSignature() {
  const [hovered, setHovered] = useState(null)

  const iconLinkStyle = (key) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 16px',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 11,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: hovered === key ? '#39ff8f' : '#5a5a7a',
    border: `1px solid ${hovered === key ? 'rgba(57,255,143,0.3)' : '#151628'}`,
    borderRadius: 6,
    cursor: 'none',
    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
    boxShadow: hovered === key ? '0 0 12px rgba(57,255,143,0.1)' : 'none',
  })

  return (
    <footer style={{
      textAlign: 'center',
      padding: '60px 24px 40px',
      borderTop: '1px solid #151628',
      position: 'relative',
      zIndex: 1,
    }}>

      {/* Social + Resume links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 36,
        flexWrap: 'wrap',
      }}>

        {/* GitHub link — UPDATE: GITHUB_URL at top of file */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          style={iconLinkStyle('github')}
          onMouseEnter={() => setHovered('github')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* GitHub SVG icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>

        {/* LinkedIn link — UPDATE: LINKEDIN_URL at top of file */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          style={iconLinkStyle('linkedin')}
          onMouseEnter={() => setHovered('linkedin')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* LinkedIn SVG icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        {/* Resume PDF download — file goes in /public/resume.pdf */}
        <a
          href={RESUME_URL}
          download="Kaniya_Kodes_Resume.pdf"  // UPDATE: your name in filename
          style={iconLinkStyle('resume')}
          onMouseEnter={() => setHovered('resume')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Download icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume PDF
        </a>
      </div>

      {/* Divider */}
      <div style={{ width: 60, height: 1, background: '#151628', margin: '0 auto 28px' }} />

      {/* Signature line — UPDATE: name, tagline, year */}
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        color: '#5a5a7a',
        letterSpacing: '1px',
        lineHeight: 1.8,
      }}>
         built by <span style={{ color: '#39ff8f' }}>Kaniya Martin</span>
        <span style={{ color: '#2a2a42', margin: '0 12px' }}>·</span>
        the keys to creative development
        <span style={{ color: '#2a2a42', margin: '0 12px' }}>·</span>
        2026
      </p>

      {/* Code comment credit */}
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        color: '#2a2a42',
        marginTop: 12,
        letterSpacing: '0.5px',
      }}>
        {/* UPDATE: built with your actual stack */}
        {'// built with React · Vite · Tailwind · Framer Motion'}
      </p>

    </footer>
  )
}
