import { useState, useCallback } from 'react'

// UPDATE: change scramble characters if desired
const cipherPool = 'アイウエカ01♀♦!@#$%^*<>/{}[];'.split('')

export function useCipherText(finalText) {
  const [text, setText] = useState('Initializing...')

  const scramble = useCallback(() => {
    let iteration = 0
    const iv = setInterval(() => {
      setText(finalText.split('').map((char, i) => {
        if (i < iteration) return char
        if (char === ' ') return ' '
        return cipherPool[Math.floor(Math.random() * cipherPool.length)]
      }).join(""))
      if (iteration >= finalText.length) clearInterval(iv)
      iteration += 0.5
    }, 28)
  }, [finalText])

  return { text, scramble }
}

