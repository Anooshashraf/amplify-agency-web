'use client'

import { useEffect } from 'react'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any

    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default
        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not available, use native scroll
      }
    }

    initLenis()
    return () => lenis?.destroy()
  }, [])

  return <>{children}</>
}
