import { useState } from 'react'
import KeyCursor    from './components/KeyCursor'
import MatrixRain   from './components/MatrixRain'
import Preloader    from './components/Preloader'
import NavbarKeys   from './components/NavbarKeys'
import HeroVault    from './components/HeroVault'
import AboutDecrypt from './components/AboutDecrypt'
import ProjectsVault from './components/ProjectsVault'
import SkillsCipher from './components/SkillsCipher'
import ContactAccess from './components/ContactAccess'
import FooterSignature from './components/FooterSignature'

// ============================================================
// APP — root component
// Controls preloader → navbar handoff via navVisible state
// ============================================================

export default function App() {
  const [navVisible, setNavVisible] = useState(false)

  return (
    <>
      <KeyCursor />
      <MatrixRain />
      <Preloader onComplete={() => setNavVisible(true)} />
      <NavbarKeys visible={navVisible} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroVault     ready={navVisible} />
        <AboutDecrypt />
        <ProjectsVault />
        <SkillsCipher />
        <ContactAccess />
        <FooterSignature />
      </main>

   <style>{`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'JetBrains Mono', monospace;
    background: #03040a;
    color: #dde0f0;
    overflow-x: hidden;
    cursor: none;
  }
`}</style>

    </>
  )
}
