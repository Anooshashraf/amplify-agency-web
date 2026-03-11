'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const stack = [
  { name: 'React',      icon: 'devicon-react-original',          color: '#61dafb', category: 'Frontend' },
  { name: 'Next.js',    icon: 'devicon-nextjs-plain',            color: '#ffffff', category: 'Frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain',        color: '#3178c6', category: 'Language' },
  { name: 'Node.js',    icon: 'devicon-nodejs-plain',            color: '#5fa04e', category: 'Backend'  },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain',        color: '#4169e1', category: 'Database' },
  { name: 'Three.js',   icon: 'devicon-threejs-original',        color: '#ffffff', category: 'Frontend' },
  { name: 'Tailwind',   icon: 'devicon-tailwindcss-plain',       color: '#06b6d4', category: 'Frontend' },
  { name: 'Framer',     icon: 'devicon-framermotion-original',   color: '#ffffff', category: 'Frontend' },
  { name: 'GraphQL',    icon: 'devicon-graphql-plain',           color: '#e10098', category: 'API'      },
  { name: 'Prisma',     icon: 'devicon-prisma-original',         color: '#ffffff', category: 'Database' },
  { name: 'Docker',     icon: 'devicon-docker-plain',            color: '#2496ed', category: 'DevOps'   },
  { name: 'AWS',        icon: 'devicon-amazonwebservices-plain',  color: '#ff9900', category: 'Cloud'    },
  { name: 'Figma',      icon: 'devicon-figma-plain',             color: '#f24e1e', category: 'Design'   },
  { name: 'Redis',      icon: 'devicon-redis-plain',             color: '#ff4438', category: 'Database' },
  { name: 'Vercel',     icon: 'devicon-vercel-original',         color: '#ffffff', category: 'Cloud'    },
  { name: 'Jest',       icon: 'devicon-jest-plain',              color: '#c21325', category: 'Testing'  },
  { name: 'Git',        icon: 'devicon-git-plain',               color: '#f05032', category: 'Tools'    },
  { name: 'GitHub',     icon: 'devicon-github-original',         color: '#ffffff', category: 'Tools'    },
]

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bubble:         '#0d3b0d',
  bubbleHover:    '#145214',
  bubbleSelected: '#1a631a',
  border:         'rgba(255,255,255,0.08)',
  borderHover:    'rgba(255,255,255,0.20)',
  borderSelected: 'rgba(255,255,255,0.30)',
  stage:          '#060e06',
  line:           'rgba(255,255,255,0.10)',
  lineWeak:       'rgba(255,255,255,0.05)',
}

// ─── Per-bubble float params — unique so they never sync ─────────────────────
const FLOAT = stack.map((_, i) => ({
  speedY: 0.00038 + (i * 0.000071) % 0.00025,
  speedX: 0.00029 + (i * 0.000053) % 0.00018,
  ampY:   4 + (i % 5) * 1.2,
  ampX:   2 + (i % 4) * 0.8,
  phaseY: (i * 1.37) % (Math.PI * 2),
  phaseX: (i * 2.11) % (Math.PI * 2),
}))

// ─── Seeded RNG ───────────────────────────────────────────────────────────────
function seededRand(seed: number) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

// ─── Organic packed-disk cloud layout ────────────────────────────────────────
function buildCloud(count: number) {
  const rng = seededRand(77)
  const out: { fx: number; fy: number; size: number; delay: number }[] = []
  const minD = 0.114

  for (let i = 0; i < count; i++) {
    let placed = false
    for (let t = 0; t < 900; t++) {
      const angle = rng() * Math.PI * 2
      const r  = Math.sqrt(rng()) * 0.40
      const fx = Math.cos(angle) * r
      const fy = Math.sin(angle) * r * 0.78
      const sz = 98 + rng() * 28

      let ok = true
      for (const p of out) {
        const dx = fx - p.fx, dy = fy - p.fy
        if (Math.sqrt(dx * dx + dy * dy) < minD) { ok = false; break }
      }
      if (ok) { out.push({ fx, fy, size: sz, delay: i * 0.04 }); placed = true; break }
    }
    if (!placed) {
      const a = (i / count) * Math.PI * 5
      out.push({ fx: Math.cos(a) * 0.29, fy: Math.sin(a) * 0.23, size: 100, delay: i * 0.04 })
    }
  }
  return out
}

const CLOUD = buildCloud(stack.length)

// ─── Neural ring layout ───────────────────────────────────────────────────────
const RING_R = 230

function neuralPos(i: number, total: number) {
  const angle  = (Math.PI * 2 * i) / total - Math.PI / 2
  const wobble = ((i % 3) - 1) * 14
  return {
    x: Math.cos(angle) * (RING_R + wobble),
    y: Math.sin(angle) * (RING_R + wobble),
  }
}

function buildConnections(n: number) {
  const c: { a: number; b: number }[] = []
  for (let i = 0; i < n; i++) {
    c.push({ a: i, b: (i + 1) % n })
    if (i % 2 === 0) c.push({ a: i, b: (i + 2) % n })
    if (i % 4 === 0) c.push({ a: i, b: (i + Math.floor(n / 2)) % n })
  }
  return c
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function TechStackSection() {
  const [selected, setSelected] = useState<number | null>(null)
  const [hovered,  setHovered]  = useState<number | null>(null)
  const [mode,     setMode]     = useState<'cloud' | 'neural'>('cloud')
  const [dims,     setDims]     = useState({ w: 900, h: 640 })

  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef   = useRef<number>(0)
  const modeRef  = useRef<'cloud' | 'neural'>('cloud')
  const stageRef = useRef<HTMLDivElement>(null)
  const wrapRef  = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  useEffect(() => { modeRef.current = mode }, [mode])

  // Measure stage
  useEffect(() => {
    const measure = () => {
      if (stageRef.current)
        setDims({ w: stageRef.current.offsetWidth, h: stageRef.current.offsetHeight })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (stageRef.current) ro.observe(stageRef.current)
    return () => ro.disconnect()
  }, [])

  // Click outside → cloud
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setSelected(null); setMode('cloud')
      }
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  // ── Butter-smooth RAF float loop — writes directly to DOM, zero re-renders ──
  useEffect(() => {
    let t0: number | null = null
    const tick = (ts: number) => {
      if (t0 === null) t0 = ts
      const t = ts - t0
      const isNeural = modeRef.current === 'neural'

      nodeRefs.current.forEach((el, i) => {
        if (!el) return
        const f  = FLOAT[i]
        const dy = Math.sin(t * f.speedY + f.phaseY) * f.ampY
        const dx = Math.cos(t * f.speedX + f.phaseX) * f.ampX
        const s  = isNeural ? 0.3 : 1
        el.style.transform = `translate(${dx * s}px,${dy * s}px)`
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const handleClick = (idx: number) => {
    if (mode === 'neural' && selected === idx) { setSelected(null); setMode('cloud') }
    else { setSelected(idx); setMode('neural') }
  }

  const others      = stack.map((_, i) => i).filter(i => i !== selected)
  const connections = buildConnections(others.length)
  const svgCX = dims.w / 2
  const svgCY = dims.h / 2

  const getTarget = (idx: number) => {
    if (mode === 'cloud') return { x: CLOUD[idx].fx * dims.w, y: CLOUD[idx].fy * dims.h, size: CLOUD[idx].size }
    if (idx === selected)  return { x: 0, y: 0, size: 118 }
    const oi = others.indexOf(idx)
    const p  = neuralPos(oi, others.length)
    return { x: p.x, y: p.y, size: 86 }
  }

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark)' }}
    >
      {/* BG watermark */}
      <div className="section-bg-text" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden>
        TECH STACK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span style={{
            fontSize: '0.7rem', letterSpacing: '0.22em', color: '#6aaa6a',
            textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem', fontWeight: 500,
          }}>Interactive · Click any bubble</span>
          <h2 style={{
            fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 800,
            color: '#f0fdf4', letterSpacing: '-0.03em', lineHeight: 1.1,
          }}>Tech Stack</h2>
        </motion.div>

        {/* Stage */}
        <motion.div
          ref={wrapRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            height: 'clamp(520px,68vh,680px)',
            background: C.stage,
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.7)',
          }}
        >
          {/* Dot-grid */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }} />

          {/* Stage measure div + click-outside handler */}
          <div
            ref={stageRef}
            style={{ position: 'absolute', inset: 0 }}
            onClick={() => { if (mode === 'neural') { setSelected(null); setMode('cloud') } }}
          />

          {/* SVG lines (neural only) */}
          <AnimatePresence>
            {mode === 'neural' && selected !== null && (
              <motion.svg
                key="lines"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}
                width={dims.w} height={dims.h}
              >
                {others.map((ti, oi) => {
                  const p = neuralPos(oi, others.length)
                  const isHov = hovered === ti
                  return (
                    <motion.line
                      key={`hub-${ti}`}
                      x1={svgCX} y1={svgCY} x2={svgCX + p.x} y2={svgCY + p.y}
                      stroke={isHov ? 'rgba(255,255,255,0.22)' : C.line}
                      strokeWidth={isHov ? 1.3 : 0.75}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: oi * 0.015 }}
                    />
                  )
                })}
                {connections.map((c, ci) => {
                  const a = neuralPos(c.a, others.length)
                  const b = neuralPos(c.b, others.length)
                  return (
                    <motion.line
                      key={`conn-${ci}`}
                      x1={svgCX + a.x} y1={svgCY + a.y} x2={svgCX + b.x} y2={svgCY + b.y}
                      stroke={C.lineWeak} strokeWidth={0.5} strokeDasharray="3 5"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.08 + ci * 0.008 }}
                    />
                  )
                })}
                {[62, 132, 200].map(r => (
                  <circle key={r} cx={svgCX} cy={svgCY} r={r}
                    fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth={1} />
                ))}
              </motion.svg>
            )}
          </AnimatePresence>

          {/* Bubble nodes */}
          {stack.map((item, idx) => {
            const { x, y, size } = getTarget(idx)
            const isSel = selected === idx
            const isHov = hovered  === idx

            // Icon size scales with bubble size
            const iconSize = isSel ? '2.4rem' : size > 108 ? '1.9rem' : '1.55rem'
            const fontSize = isSel ? '0.68rem' : size > 108 ? '0.62rem' : '0.55rem'

            const springDelay = mode === 'cloud'
              ? (inView ? CLOUD[idx].delay : 0)
              : isSel ? 0 : 0.03 + others.indexOf(idx) * 0.012

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1, scale: 1,
                  x: svgCX + x - size / 2,
                  y: svgCY + y - size / 2,
                  width: size, height: size,
                }}
                transition={{
                  type: 'spring', stiffness: 220, damping: 28, delay: springDelay,
                  opacity: { duration: 0.35, delay: springDelay },
                  width:  { type: 'spring', stiffness: 200, damping: 28 },
                  height: { type: 'spring', stiffness: 200, damping: 28 },
                }}
                style={{
                  position: 'absolute', top: 0, left: 0,
                  zIndex: isSel ? 60 : isHov ? 50 : 10,
                  cursor: 'pointer',
                }}
                onClick={(e) => { e.stopPropagation(); handleClick(idx) }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* RAF float target — transform written directly here */}
                <div
                  ref={el => { nodeRefs.current[idx] = el }}
                  style={{ width: '100%', height: '100%', willChange: 'transform' }}
                >
                  {/* Bubble shell */}
                  <div style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '5px',
                    position: 'relative', overflow: 'hidden',
                    background: isSel ? C.bubbleSelected : isHov ? C.bubbleHover : C.bubble,
                    border: `1.5px solid ${isSel ? C.borderSelected : isHov ? C.borderHover : C.border}`,
                    boxShadow: isSel
                      ? '0 10px 36px rgba(0,0,0,0.75)'
                      : isHov ? '0 7px 24px rgba(0,0,0,0.65)'
                      : '0 5px 18px rgba(0,0,0,0.55)',
                    transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
                  }}>

                    {/* Subtle sphere sheen */}
                    <div style={{
                      position: 'absolute', top: '9%', left: '18%',
                      width: '28%', height: '14%', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.055)',
                      filter: 'blur(5px)', pointerEvents: 'none',
                    }} />

                    {/* ── Devicon — renders as a crisp vector glyph ── */}
                    <i
                      className={`${item.icon} colored`}
                      style={{
                        fontSize: iconSize,
                        lineHeight: 1,
                        display: 'block',
                        // Force brand color if `colored` variant not supported
                        color: item.color,
                        filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))',
                        transition: 'font-size 0.3s ease',
                        flexShrink: 0,
                      }}
                      aria-hidden
                    />

                    {/* Name label */}
                    <span style={{
                      color: '#dff0df',
                      fontSize,
                      fontWeight: isSel ? 600 : 500,
                      letterSpacing: '0.03em',
                      textShadow: '0 1px 4px rgba(0,0,0,0.9)',
                      lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap',
                    }}>{item.name}</span>

                    {/* Selected indicator dot */}
                    {isSel && (
                      <motion.div
                        initial={{ scale: 0 }} animate={{ scale: 1 }}
                        style={{
                          position: 'absolute', top: 7, right: 7,
                          width: 10, height: 10, borderRadius: '50%',
                          background: '#9ecf9e',
                          border: '1.5px solid rgba(0,0,0,0.5)',
                        }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Status pill */}
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                key="pill"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                style={{
                  position: 'absolute', bottom: 20, left: '50%',
                  transform: 'translateX(-50%)',
                  background: C.bubble,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '999px', padding: '8px 22px',
                  whiteSpace: 'nowrap', zIndex: 80, pointerEvents: 'none',
                }}
              >
                <span style={{ color: '#c5e3c5', fontSize: '0.8rem' }}>
                  <span style={{ color: '#e8f5e8', fontWeight: 600 }}>
                    {stack[selected].name}
                  </span>
                  {' '}· click again or tap outside to return
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          style={{
            textAlign: 'center', marginTop: '1.25rem',
            fontSize: '0.75rem', color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.05em',
          }}
        >
          Cloud view — click a bubble to expand into neural network view
        </motion.p>
      </div>
    </section>
  )
}
