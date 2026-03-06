import { useEffect, useState } from 'react'

// ============================================================
// useScrollSpy — tracks which section is currently in view
// Returns the id string of the active section (e.g. "projects")
//
// Usage in NavbarKeys.jsx:
//   const activeSection = useScrollSpy(['hero','projects','about','skills','contact'])
//   then compare activeSection === item.href.replace('#','')
//
// UPDATE: threshold — fraction of section that must be visible to trigger
// UPDATE: rootMargin — "-40%" means section must be 40% into viewport
// ============================================================

export function useScrollSpy(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        {
          // UPDATE: rootMargin controls when section "activates" in nav
          rootMargin: options.rootMargin ?? '-40% 0px -40% 0px',
          threshold:  options.threshold  ?? 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sectionIds, options.rootMargin, options.threshold])

  return activeId
}
