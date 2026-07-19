'use client'

import { useEffect, useRef, useState } from 'react'

const LINES = [
  'We build AI that does it for you.',
  "We think that's backwards.",
  'Ours does the busywork itself.',
  'You talk. Vox files.',
]

const HOLD_MS = 3200
const EXIT_MS = 260

export function StatementRotator() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out' | 'prep'>('in')
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers: ReturnType<typeof setTimeout>[] = []
    const interval = setInterval(() => {
      if (reduced.current) {
        setIndex((i) => (i + 1) % LINES.length)
        return
      }
      setPhase('out')
      timers.push(
        setTimeout(() => {
          setIndex((i) => (i + 1) % LINES.length)
          setPhase('prep')
          requestAnimationFrame(() => requestAnimationFrame(() => setPhase('in')))
        }, EXIT_MS),
      )
    }, HOLD_MS)
    return () => {
      clearInterval(interval)
      timers.forEach(clearTimeout)
    }
  }, [])

  const motion =
    phase === 'out'
      ? {
          transform: 'translateX(-85vw)',
          opacity: 0,
          transition: `transform ${EXIT_MS}ms cubic-bezier(0.5, 0, 0.75, 0.4), opacity ${EXIT_MS}ms ease-in`,
        }
      : phase === 'prep'
        ? { transform: 'translateX(85vw)', opacity: 0, transition: 'none' }
        : {
            transform: 'translateX(0)',
            opacity: 1,
            transition: 'transform 240ms cubic-bezier(0.16, 1, 0.3, 1), opacity 160ms ease-out',
          }

  return (
    <p
      aria-hidden="true"
      className="font-display max-w-lg min-h-[2.2em] leading-[1.1] font-medium tracking-[-0.03em] text-[#474747] dark:text-mist-400"
      style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', ...motion }}
    >
      {LINES[index]}
    </p>
  )
}
