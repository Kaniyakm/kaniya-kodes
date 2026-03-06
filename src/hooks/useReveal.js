import { useEffect, useRef, useState } from 'react'

// ============================================================
// useReveal — scroll-triggered fade-in hook
//
// Usage:
//   const { ref, visible } = useReveal()
//   <div ref={ref} style={{ opacity: visible ? 1 : 0, ... }}>
//
// UPDATE: threshold — 0.12 = triggers when 12% of element is visible
// UPDATE: rootMargin — negative value = triggers slightly before element enters view
// ============================================================

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Once visible, stop observing — animation only plays once
          observer.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.12,    // UPDATE: sensitivity
        rootMargin: options.rootMargin ?? '0px',  // UPDATE: offset
      }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return { ref, visible }
}
