import { useState, useRef } from 'react'

// ============================================================
// CONTACT SECTION — entire form lives inside a code window
// UPDATE: EmailJS credentials in handleSubmit()
// UPDATE: comment block text, field labels, success message
// ============================================================

export default function ContactAccess() {
  const [submitting, setSubmitting]     = useState(false)
  const [accessGranted, setAccessGranted] = useState(false)
  const [error, setError]               = useState(false)
  const [focused, setFocused]           = useState(null)

  const nameRef  = useRef(null)
  const emailRef = useRef(null)
  const msgRef   = useRef(null)

  function handleSubmit() {
    const name  = nameRef.current.value.trim()
    const email = emailRef.current.value.trim()
    const msg   = msgRef.current.value.trim()

    // Basic validation — all 3 fields required
    if (!name || !email || !msg) return

    setSubmitting(true)
    setError(false)

    // ── EmailJS integration ──────────────────────────────
    // 1. npm install @emailjs/browser (already done)
    // 2. Go to emailjs.com → create account → add Gmail service
    // 3. Create template with variables: {{name}} {{email}} {{message}}
    // 4. Replace the three strings below with your real IDs
    //
    // import emailjs from '@emailjs/browser'
    // emailjs.send(
    //   'YOUR_SERVICE_ID',   // UPDATE: from EmailJS dashboard
    //   'YOUR_TEMPLATE_ID',  // UPDATE: from EmailJS dashboard
    //   { name, email, message: msg },
    //   'YOUR_PUBLIC_KEY'    // UPDATE: from EmailJS dashboard
    // ).then(() => {
    //   setAccessGranted(true)
    // }).catch(() => {
    //   setError(true)
    // }).finally(() => {
    //   setSubmitting(false)
    // })
    //
    // ── Temporary: simulate success until EmailJS is configured ──
    setTimeout(() => {
      setAccessGranted(true)
      setSubmitting(false)
    }, 800)
  }

  // Shared input style
  const inputStyle = (field) => ({
    width: '100%',
    background: '#0b0c18',
    border: `1px solid ${focused === field ? '#39ff8f' : '#21262d'}`,
    borderRadius: '6px',
    padding: '12px 14px',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '12px',
    color: '#dde0f0',
    outline: 'none',
    resize: 'none',
    cursor: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === field ? '0 0 12px rgba(57,255,143,0.07)' : 'none',
  })

  return (
    <section id="contact" style={{ padding: '130px 24px', position: 'relative', zIndex: 1 }}>

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
          Request Access
          <span style={{ width: 40, height: 1, background: 'linear-gradient(90deg, #39ff8f, transparent)', display: 'inline-block' }} />
        </div>
        {/* UPDATE: section title */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#dde0f0',
        }}>
          Contact
        </h2>
      </div>

      {/* Code window — wraps the entire form */}
      <div style={{
        maxWidth: 600,
        margin: '0 auto',
        background: '#0d1117',
        border: '1px solid #21262d',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(57,255,143,0.04), 0 30px 80px rgba(0,0,0,0.5)',
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
          {[['#ff5f57'], ['#febc2e'], ['#28c840']].map(([c], i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ marginLeft: 10, fontSize: 11, color: '#8b949e', fontFamily: 'JetBrains Mono, monospace' }}>
            contact.js
          </span>
        </div>

        {/* JSDoc comment block — code-syntax styled intro */}
        {/* UPDATE: param descriptions + return value */}
        <div style={{ padding: '20px 28px 0', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, lineHeight: 1.9 }}>
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{'/**'}</span><br />
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{' * '}<span style={{ color: '#f8f8f2' }}>sendMessage</span>{'() — initiate secure connection'}</span><br />
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{' * '}<span style={{ color: '#8be9fd' }}>@param</span>{' '}<span style={{ color: '#50fa7b' }}>{'string'}</span>{' name    — your identifier'}</span><br />
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{' * '}<span style={{ color: '#8be9fd' }}>@param</span>{' '}<span style={{ color: '#50fa7b' }}>{'string'}</span>{' email   — return address'}</span><br />
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{' * '}<span style={{ color: '#8be9fd' }}>@param</span>{' '}<span style={{ color: '#50fa7b' }}>{'string'}</span>{' message — access request'}</span><br />
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{' * '}<span style={{ color: '#8be9fd' }}>@returns</span>{' '}<span style={{ color: '#50fa7b' }}>{'Promise'}</span>{' "ACCESS_GRANTED" | "RETRY"'}</span><br />
          <span style={{ color: '#6272a4', fontStyle: 'italic' }}>{' */'}</span>
        </div>

        {/* Divider */}
        <div style={{ margin: '16px 28px', height: 1, background: '#21262d' }} />

        {/* Form or Access Granted state */}
        {accessGranted ? (

          /* ── Success state ── */
          <div style={{ textAlign: 'center', padding: '40px 28px' }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>🔓</div>
            {/* UPDATE: success message text */}
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 13, color: '#50fa7b',
              letterSpacing: '2px', marginBottom: 8,
            }}>
              {'// ACCESS_GRANTED'}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, color: '#6272a4', fontStyle: 'italic',
            }}>
              Message received. Kaniya will be in touch. {/* UPDATE: your name */}
            </div>
          </div>

        ) : (

          /* ── Form ── */
          <div style={{ padding: '0 28px 28px' }}>

            {/* Name field */}
            <div>
              <label style={{
                display: 'block', fontSize: 10, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#39ff8f',
                marginBottom: 8, marginTop: 18,
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                <span style={{ color: '#6272a4', marginRight: 6 }}>//</span>
                <span style={{ color: '#8be9fd' }}>name</span>
              </label>
              <input
                ref={nameRef}
                type="text"
                placeholder="your_name"     // UPDATE: placeholder
                style={inputStyle('name')}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Email field */}
            <div>
              <label style={{
                display: 'block', fontSize: 10, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#39ff8f',
                marginBottom: 8, marginTop: 18,
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                <span style={{ color: '#6272a4', marginRight: 6 }}>//</span>
                <span style={{ color: '#8be9fd' }}>email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="you@example.com"   // UPDATE: placeholder
                style={inputStyle('email')}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Message field */}
            <div>
              <label style={{
                display: 'block', fontSize: 10, letterSpacing: '2px',
                textTransform: 'uppercase', color: '#39ff8f',
                marginBottom: 8, marginTop: 18,
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                <span style={{ color: '#6272a4', marginRight: 6 }}>//</span>
                <span style={{ color: '#8be9fd' }}>message</span>
              </label>
              <textarea
                ref={msgRef}
                rows={4}
                placeholder="Hello Kaniya..."  // UPDATE: placeholder
                style={inputStyle('message')}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Error message */}
            {error && (
              <div style={{
                marginTop: 12, fontSize: 11,
                color: '#ff5555', fontFamily: 'JetBrains Mono, monospace',
              }}>
                {'// ERROR: message failed — try again'}
              </div>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                width: '100%',
                marginTop: 20,
                padding: '14px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                background: submitting ? 'rgba(57,255,143,0.1)' : 'transparent',
                border: '1px solid #39ff8f',
                color: '#39ff8f',
                borderRadius: '6px',
                cursor: submitting ? 'not-allowed' : 'none',
                transition: 'background 0.3s, color 0.3s',
              }}
            >
              {/* UPDATE: button label */}
              {submitting ? '// transmitting...' : 'sendMessage() →'}
            </button>
          </div>
        )}

        {/* Bottom code comment */}
        {/* UPDATE: availability text */}
        <div style={{
          padding: '14px 28px',
          borderTop: '1px solid #21262d',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 11,
          color: '#6272a4',
          fontStyle: 'italic',
        }}>
          {'// Response time: 24–48 hrs · Open to roles: '}
          <span style={{ color: '#50fa7b' }}>true</span>
          {' · Remote: '}
          <span style={{ color: '#50fa7b' }}>true</span>
        </div>

      </div>
    </section>
  )
}
