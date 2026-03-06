import { useState, useEffect } from 'react'

// ============================================================
// NAVBAR — sticky glass nav with key icon links
// UPDATE: navItems array to change icons, labels, hrefs
// UPDATE: logo text in .nav-logo span
// ============================================================

// UPDATE: edit icon, label, href for each nav link
const navItems = [
  { icon: '🔑', label: 'Projects', href: '#projects' },
  { icon: '🖥️', label: 'About',    href: '#about'    },
  { icon: '⚙️',  label: 'Skills',   href: '#skills'   },
  { icon: '📡', label: 'Contact',  href: '#contact'  },
]

export default function NavbarKeys({ visible }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  // Add glass effect after 40px scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          background: linear-gradient(90deg, #39ff8f, #00e5ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-key-link {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-decoration: none;
          color: #5a5a7a;
          border: 1px solid transparent;
          border-radius: 6px;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          cursor: none;
        }
        .nav-key-link:hover, .nav-key-link.active {
          color: #39ff8f;
          border-color: rgba(57,255,143,0.2);
          background: rgba(57,255,143,0.04);
        }
        /* Key icon rotates on hover — brand metaphor */
        .key-icon {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .nav-key-link:hover .key-icon {
          transform: rotate(-20deg) scale(1.2);
        }

        @media (max-width: 640px) {
          .nav-keys-list { gap: 2px !important; }
          .nav-key-link  { padding: 6px 8px; font-size: 10px; gap: 4px; }
          .nav-logo-wrap { font-size: 14px !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: '64px',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // Glass blur on scroll
        background: scrolled ? 'rgba(3,4,10,0.9)'  : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)'     : 'none',
        borderBottom: scrolled ? '1px solid #151628' : '1px solid transparent',
        // Slides down after preloader exits
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.55s ease, background 0.4s ease, border-color 0.4s ease',
      }}>

        {/* Logo — UPDATE: text and href */}
        <a href="#hero" className="nav-logo">
          KANIYA KODES
        </a>

        {/* Nav links */}
        <ul style={{ display: 'flex', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}
            className="nav-keys-list">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className={`nav-key-link ${activeHref === item.href ? 'active' : ''}`}
                onClick={() => setActiveHref(item.href)}
              >
                <span className="key-icon">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
