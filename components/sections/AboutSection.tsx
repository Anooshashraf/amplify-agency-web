'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

// ── SVG icons (outline style, matching reference) ─────────────────────────────
const icons = {
  web: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="56" height="38" rx="3"/>
      <path d="M4 18h56"/>
      <circle cx="11" cy="14" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="23" cy="14" r="1.5" fill="currentColor" stroke="none"/>
      <path d="M20 28h24M20 34h16M20 40h20"/>
      <path d="M22 52h20M32 48v4"/>
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="56" height="38" rx="3"/>
      <path d="M4 18h56"/>
      <path d="M22 30h5l2 10h10l2-10h5"/>
      <path d="M24 35h14"/>
      <circle cx="27" cy="42" r="2"/>
      <circle cx="37" cy="42" r="2"/>
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="4" width="28" height="56" rx="4"/>
      <path d="M18 12h28M18 52h28"/>
      <circle cx="32" cy="57" r="1.5" fill="currentColor" stroke="none"/>
      <rect x="24" y="20" width="16" height="12" rx="1.5"/>
      <path d="M24 36h16M24 40h12M24 44h8"/>
    </svg>
  ),
  uiux: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="52" height="52" rx="4"/>
      <circle cx="32" cy="32" r="12"/>
      <circle cx="32" cy="32" r="4"/>
      <path d="M32 14v4M32 46v4M14 32h4M46 32h4"/>
      <path d="M20 20l3 3M41 41l3 3M20 44l3-3M41 23l3-3"/>
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="28" r="16"/>
      <path d="M40 40l14 14"/>
      <path d="M22 28h12M28 22v12"/>
      <path d="M10 48h10M10 54h20M10 42h6"/>
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6l6 13h14l-11 8 4 14-13-9-13 9 4-14L12 19h14z"/>
      <path d="M32 36v16M24 52h16"/>
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="48" height="48" rx="3"/>
      <path d="M8 20h48"/>
      <path d="M20 8v12M32 8v12M44 8v12"/>
      <rect x="16" y="28" width="10" height="10" rx="1"/>
      <rect x="32" y="28" width="10" height="10" rx="1"/>
      <rect x="16" y="42" width="10" height="10" rx="1"/>
      <rect x="32" y="42" width="10" height="10" rx="1"/>
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M48 40a12 12 0 0 0-2-23.8 16 16 0 0 0-30 6 12 12 0 0 0 2 23.8"/>
      <path d="M32 36v18M24 46l8 8 8-8"/>
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="56" height="56" rx="3"/>
      <path d="M14 44l10-14 10 8 10-18 10 10"/>
      <path d="M4 54h56"/>
      <path d="M14 54v-4M24 54v-8M34 54v-6M44 54v-12M54 54v-8"/>
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="14,10 54,32 14,54"/>
      <path d="M6 10v44M58 10v44"/>
      <path d="M6 32h4M54 32h4"/>
    </svg>
  ),
  api: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="56" height="36" rx="3"/>
      <path d="M4 22h56"/>
      <path d="M14 32h8M14 38h12"/>
      <path d="M36 30l4 4-4 4M44 30l4 4-4 4"/>
      <circle cx="11" cy="18" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="16" cy="18" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 4l22 8v16c0 14-10 26-22 30C20 54 10 42 10 28V12z"/>
      <path d="M22 32l6 6 14-14"/>
    </svg>
  ),
}

const services = [
  { key: 'web',       label: 'Web Design\n& Development',    icon: icons.web       },
  { key: 'ecommerce', label: 'E-Commerce\nSolutions',        icon: icons.ecommerce },
  { key: 'mobile',    label: 'Mobile\nApps',                 icon: icons.mobile    },
  { key: 'uiux',      label: 'UI / UX\nDesign',              icon: icons.uiux      },
  { key: 'seo',       label: 'SEO &\nAnalytics',             icon: icons.seo       },
  { key: 'branding',  label: 'Branding &\nIdentity',         icon: icons.branding  },
  { key: 'crm',       label: 'CRM\nIntegration',             icon: icons.crm       },
  { key: 'cloud',     label: 'Cloud &\nDevOps',              icon: icons.cloud     },
  { key: 'analytics', label: 'Data &\nAnalytics',            icon: icons.analytics },
  { key: 'motion',    label: 'Motion &\n3D Design',          icon: icons.motion    },
  { key: 'api',       label: 'API &\nBackend Dev',           icon: icons.api       },
  { key: 'security',  label: 'Security &\nCompliance',       icon: icons.security  },
]

// ── Single animated icon tile ──────────────────────────────────────────────────
function ServiceTile({
  service, index, inView,
}: {
  service: typeof services[0]; index: number; inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.05 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-3 rounded-2xl p-4 cursor-default transition-all duration-300"
      style={{
        background: hovered ? 'rgba(34,197,94,0.07)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(34,197,94,0.35)' : 'rgba(34,197,94,0.09)'}`,
        boxShadow: hovered ? '0 0 28px rgba(34,197,94,0.12), inset 0 0 20px rgba(34,197,94,0.04)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Icon wrapper with glow pulse on hover */}
      <motion.div
        animate={hovered ? { scale: [1, 1.12, 1.08] } : { scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center"
        style={{
          width: '52px',
          height: '52px',
          color: hovered ? 'var(--green-bright)' : 'rgba(34,197,94,0.55)',
          filter: hovered ? 'drop-shadow(0 0 8px rgba(34,197,94,0.6))' : 'none',
          transition: 'color 0.3s, filter 0.3s',
        }}
      >
        {service.icon}
      </motion.div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textAlign: 'center',
          lineHeight: 1.5,
          color: hovered ? 'var(--cream)' : 'rgba(245,234,208,0.70)',
          transition: 'color 0.3s',
          whiteSpace: 'pre-line',
        }}
      >
        {service.label}
      </div>

      {/* Bottom accent line — slides in on hover */}
      <div
        style={{
          height: '1.5px',
          width: hovered ? '70%' : '0%',
          background: 'linear-gradient(90deg, transparent, var(--green-bright), transparent)',
          borderRadius: '2px',
          transition: 'width 0.35s ease',
        }}
      />
    </motion.div>
  )
}

// ── Main section ───────────────────────────────────────────────────────────────
export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark-3)' }}
    >
      {/* Background watermark */}
      <div
        className="section-bg-text"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        aria-hidden
      >
        ABOUT
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 50% at 25% 50%, rgba(26,107,60,0.07) 0%, transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 40% at 75% 50%, rgba(34,197,94,0.04) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* ── LEFT: Icon grid (3 cols × 4 rows) ── */}
          <div className="lg:col-span-3">
            {/* Section label */}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                letterSpacing: '0.22em', color: 'var(--green-bright)',
                textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem',
              }}
            >
              Our Services
            </motion.span>

            {/* Grid */}
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              {services.map((s, i) => (
                <ServiceTile key={s.key} service={s} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Why Amplify copy ── */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                letterSpacing: '0.22em', color: 'var(--green-bright)',
                textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem',
              }}
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 800, color: 'var(--cream)',
                letterSpacing: '-0.03em', lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Why Is{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--green-bright)' }}>Amplify</em>{' '}
              A Better Choice
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'rgba(245,234,208,0.75)', lineHeight: 1.85,
                marginBottom: '1.25rem',
              }}
            >
              Hiring Amplify to lead your digital presence will be a decision you'll never regret. We pair deep technical expertise with sharp design thinking — every project is custom-built around your business, not templated.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.33 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'rgba(245,234,208,0.75)', lineHeight: 1.85,
                marginBottom: '2.5rem',
              }}
            >
              From business modelling to requirement analysis, from UX research to pixel-perfect implementation, from launch to long-term scaling — Amplify handles every layer of the stack so you can focus on what matters.
            </motion.p>

            {/* Stats row */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { value: '50+', label: 'Projects' },
                { value: '8+',  label: 'Countries' },
                { value: '100%', label: 'Satisfaction' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 flex flex-col items-center text-center"
                  style={{
                    background: 'rgba(34,197,94,0.04)',
                    border: '1px solid rgba(34,197,94,0.1)',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    fontWeight: 800, color: 'var(--green-bright)', lineHeight: 1,
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                    color: 'rgba(245,234,208,0.35)',
                    letterSpacing: '0.08em', marginTop: '4px',
                    textTransform: 'uppercase',
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div> */}

            {/* Differentiators checklist */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.48 }}
              className="flex flex-col gap-3 mb-8"
            >
              {[
                'End-to-end product ownership',
                'AI-augmented development pipeline',
                'Transparent pricing, no surprises',
                'Post-launch support included',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ width: '20px', height: '20px', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}
                  >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#3ec76e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.83rem',
                    color: 'rgba(245,234,208,0.78)',
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              <Link href="/contact">
                <button className="btn-primary"><span>Start a Project</span></button>
              </Link>
              <Link
                href="/work"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                  color: 'var(--green-bright)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = '8px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '5px')}
              >
                View Our Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
