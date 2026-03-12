'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* ── Fake "before" website rendered in SVG/HTML ─────────────────── */
function BeforeSite() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      fontSize: '10px',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Nav */}
      <div style={{ background: '#003366', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '11px' }}>MY WEBSITE</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['Home','About','Services','Contact'].map(l => (
            <span key={l} style={{ color: '#aac', fontSize: '8px', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(180deg,#003366,#0055aa)',
        padding: '16px 12px',
        textAlign: 'center',
      }}>
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>
          Welcome To My Website
        </div>
        <div style={{ color: '#ccd', fontSize: '8px', marginBottom: '10px', lineHeight: 1.4 }}>
          We offer various services to our customers. Contact us today for more information about what we do and how we can help you.
        </div>
        <div style={{
          display: 'inline-block',
          background: '#ff6600', color: '#fff',
          padding: '4px 10px', fontSize: '8px', fontWeight: 'bold',
          border: '2px outset #ff8833',
        }}>
          CLICK HERE !!
        </div>
      </div>
      {/* Marquee text */}
      <div style={{ background: '#ffff00', color: '#000', fontSize: '8px', padding: '3px 8px', borderBottom: '1px solid #ccc' }}>
        ★ SPECIAL OFFER ★ CALL US NOW ★ LIMITED TIME ★ DON'T MISS OUT ★ BEST PRICES ★
      </div>
      {/* Content boxes */}
      <div style={{ padding: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', flex: 1 }}>
        {['Our Services','About Us','Contact'].map((t, i) => (
          <div key={t} style={{
            border: '2px solid #003366',
            padding: '6px',
            background: i === 1 ? '#eef' : '#fff',
          }}>
            <div style={{ color: '#003366', fontWeight: 'bold', fontSize: '8px', marginBottom: '4px', borderBottom: '1px solid #003366', paddingBottom: '2px' }}>{t}</div>
            <div style={{ color: '#666', fontSize: '7px', lineHeight: 1.4 }}>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</div>
            <div style={{ color: '#0000ff', fontSize: '7px', marginTop: '4px', textDecoration: 'underline', cursor: 'pointer' }}>Read More &gt;&gt;</div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div style={{
        background: '#003366', color: '#aac',
        padding: '5px 10px', fontSize: '7px',
        textAlign: 'center', borderTop: '3px solid #ff6600',
      }}>
        © 2009 My Website. All Rights Reserved. | Best viewed in Internet Explorer 6.0
      </div>
    </div>
  )
}

/* ── Beautiful "after" Amplify site ─────────────────────────────── */
function AfterSite() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#020a06',
      fontFamily: 'system-ui, sans-serif',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '40%',
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(34,197,94,0.15), transparent)',
        borderRadius: '50%', pointerEvents: 'none',
        filter: 'blur(30px)',
      }} />
      {/* Nav */}
      <div style={{
        padding: '8px 14px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid rgba(34,197,94,0.1)',
        background: 'rgba(2,10,6,0.8)', backdropFilter: 'blur(10px)',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
            <path d="M50 8L85 30L85 70L50 92L15 70L15 30Z" stroke="#22c55e" strokeWidth="5" fill="none" opacity="0.6"/>
            <path d="M35 58L50 30L65 58" stroke="#22c55e" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{ color: '#f5ead0', fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em' }}>Amplify</span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {['Work','Services','Contact'].map(l => (
            <span key={l} style={{ color: 'rgba(245,234,208,0.75)', fontSize: '7px', letterSpacing: '0.05em' }}>{l}</span>
          ))}
        </div>
        <div style={{
          background: 'linear-gradient(135deg,#1a6b3c,#2d9b5a)',
          padding: '3px 8px', borderRadius: '100px',
          color: '#f5ead0', fontSize: '7px', fontWeight: 600, letterSpacing: '0.05em',
        }}>Start Project</div>
      </div>

      {/* Hero */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        padding: '10px 14px', position: 'relative',
      }}>
        <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
          <div style={{
            fontSize: '7px', color: '#22c55e',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            Web & App Agency
          </div>
          <div style={{
            fontSize: '17px', fontWeight: 800,
            color: '#fdf6e8', lineHeight: 1.1,
            letterSpacing: '-0.03em', marginBottom: '8px',
          }}>
            Building<br />
            <span style={{ color: '#3ec76e', fontStyle: 'italic' }}>Digital</span>{' '}
            Solutions<br />That Matter
          </div>
          <div style={{ fontSize: '7px', color: 'rgba(245,234,208,0.70)', lineHeight: 1.6, marginBottom: '10px', maxWidth: '160px' }}>
            We craft high-performance web experiences that transform businesses and drive real results.
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{
              background: 'linear-gradient(135deg,#1a6b3c,#3ec76e)',
              padding: '4px 10px', borderRadius: '100px',
              color: '#fdf6e8', fontSize: '7px', fontWeight: 600,
            }}>Start Project →</div>
            <div style={{
              border: '1px solid rgba(245,234,208,0.2)',
              padding: '4px 10px', borderRadius: '100px',
              color: 'rgba(245,234,208,0.6)', fontSize: '7px',
            }}>Our Work</div>
          </div>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '12px' }}>
            {[['50+','Projects'],['100%','Satisfaction'],['24/7','Support']].map(([v,l]) => (
              <div key={l}>
                <div style={{ color: '#f5ead0', fontSize: '11px', fontWeight: 800, lineHeight: 1 }}>{v}</div>
                <div style={{ color: 'rgba(245,234,208,0.35)', fontSize: '6px', marginTop: '2px', letterSpacing: '0.05em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini particle globe visual */}
        <div style={{
          width: '100px', height: '100px',
          position: 'relative', flexShrink: 0,
        }}>
          {Array.from({ length: 42 }).map((_, i) => {
            const angle = (i / 42) * Math.PI * 2
            const r = 35 + Math.sin(i * 1.3) * 8
            const x = 50 + Math.cos(angle) * r
            const y = 50 + Math.sin(angle) * r * 0.6
            const size = i % 5 === 0 ? 2.5 : 1.5
            const opacity = 0.3 + (Math.sin(i * 0.7) + 1) * 0.35
            return (
              <div key={i} style={{
                position: 'absolute',
                left: `${x}%`, top: `${y}%`,
                width: `${size}px`, height: `${size}px`,
                borderRadius: '50%',
                background: i % 3 === 0 ? '#22c55e' : '#f5ead0',
                opacity,
                transform: 'translate(-50%,-50%)',
              }} />
            )
          })}
          {/* Glow under globe */}
          <div style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: '60px', height: '20px',
            background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.3), transparent)',
            filter: 'blur(8px)',
          }} />
        </div>
      </div>

      {/* Bottom SEO bar */}
      <div style={{
        padding: '5px 14px',
        borderTop: '1px solid rgba(34,197,94,0.08)',
        display: 'flex', gap: '8px', alignItems: 'center',
        background: 'rgba(6,15,9,0.9)',
      }}>
        {[
          { icon: '⚡', label: '99 Performance' },
          { icon: '♿', label: '100 Accessibility' },
          { icon: '🔍', label: '100 SEO' },
          { icon: '✅', label: '100 Best Practices' },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <span style={{ fontSize: '7px' }}>{icon}</span>
            <span style={{ fontSize: '6px', color: '#22c55e', fontWeight: 600, letterSpacing: '0.03em' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Laptop SVG shell ────────────────────────────────────────────── */
function LaptopFrame({ children, label, labelColor, accentColor }: {
  children: React.ReactNode
  label: string
  labelColor: string
  accentColor: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Screen */}
      <div style={{
        width: '100%',
        background: '#1a1a1a',
        borderRadius: '10px 10px 0 0',
        padding: '6px 6px 0',
        border: `1px solid ${accentColor}30`,
        borderBottom: 'none',
        boxShadow: `0 0 40px ${accentColor}15, 0 20px 60px rgba(0,0,0,0.6)`,
      }}>
        {/* Camera dot */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2a2a2a' }} />
        </div>
        {/* Browser chrome */}
        <div style={{
          background: '#111',
          borderRadius: '6px 6px 0 0',
          padding: '5px 8px',
          display: 'flex', alignItems: 'center', gap: '5px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {['#ff5f57','#febc2e','#28c840'].map(c => (
              <div key={c} style={{ width: '5px', height: '5px', borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1, background: '#1e1e1e', borderRadius: '3px',
            padding: '2px 6px', fontSize: '7px',
            color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace',
          }}>
            {label === 'BEFORE' ? 'http://myoldwebsite.com' : 'https://amplifyagency.com'}
          </div>
        </div>
        {/* Screen content */}
        <div style={{ height: 'clamp(160px, 22vw, 280px)', overflow: 'hidden', borderRadius: '0 0 2px 2px' }}>
          {children}
        </div>
      </div>
      {/* Base */}
      <div style={{
        width: '108%',
        height: '12px',
        background: 'linear-gradient(180deg, #1a1a1a, #111)',
        borderRadius: '0 0 4px 4px',
        borderTop: `2px solid ${accentColor}20`,
      }} />
      <div style={{
        width: '120%', height: '4px',
        background: '#0d0d0d',
        borderRadius: '0 0 8px 8px',
      }} />
    </div>
  )
}

export default function BeforeAfterSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark-3)' }}
    >
      <div className="section-bg-text" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden>
        RESULTS
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,107,60,0.06), transparent)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              letterSpacing: '0.2em', color: 'var(--green-bright)',
              textTransform: 'uppercase' as const, display: 'block', marginBottom: '1rem',
            }}
          >The Amplify difference</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 800, color: 'var(--cream)',
              letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1.25rem',
            }}
          >
            Before Amplify.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--green-bright)' }}>After Amplify.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem',
              color: 'rgba(245,234,208,0.65)', maxWidth: '48ch',
              lineHeight: 1.7, margin: '0 auto',
            }}
          >
            The gap between an average website and one built by Amplify is
            night and day — in performance, aesthetics, and results.
          </motion.p>
        </div>

        {/* Laptops side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-end">

          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 8 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1000px' }}
          >
            {/* Label badge */}
            <div className="flex items-center gap-2 mb-6">
              <div style={{
                background: 'rgba(239,68,68,0.12)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '100px', padding: '0.35rem 1rem',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', letterSpacing: '0.1em' }}>BEFORE</span>
              </div>
            </div>
            <LaptopFrame label="BEFORE" labelColor="#ef4444" accentColor="#ef4444">
              <BeforeSite />
            </LaptopFrame>
            {/* Pain points */}
            <div className="mt-6 space-y-2">
              {[
                'Outdated design — drives visitors away',
                'No SEO — invisible to Google',
                'Slow load times — 8+ seconds',
                'Not mobile responsive',
                'Zero conversion optimisation',
              ].map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#ef4444', fontSize: '0.75rem', flexShrink: 0 }}>✗</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(245,234,208,0.65)' }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1000px' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.35)',
                borderRadius: '100px', padding: '0.35rem 1rem',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.1em' }}>AFTER AMPLIFY</span>
              </div>
            </div>
            <LaptopFrame label="AFTER" labelColor="#22c55e" accentColor="#22c55e">
              <AfterSite />
            </LaptopFrame>
            {/* Wins */}
            <div className="mt-6 space-y-2">
              {[
                'Premium design — keeps visitors engaged',
                '100/100 SEO score — ranks on Google',
                'Sub-1s load time with Next.js',
                'Fully responsive on all devices',
                'Conversion-optimised with clear CTAs',
              ].map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#22c55e', fontSize: '0.75rem', flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(245,234,208,0.65)' }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* VS divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center justify-center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '56px', height: '56px',
            borderRadius: '50%',
            background: 'var(--dark-3)',
            border: '2px solid rgba(34,197,94,0.25)',
            zIndex: 10,
            boxShadow: '0 0 30px rgba(34,197,94,0.1)',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem', fontWeight: 800,
            color: 'rgba(245,234,208,0.75)',
            letterSpacing: '0.05em',
          }}>VS</span>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-20"
        >
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.9rem',
            color: 'rgba(245,234,208,0.65)', marginBottom: '1.5rem',
          }}>
            Ready to make the switch?
          </p>
          <a href="/contact">
            <button className="btn-primary">
              <span>Get Your Amplify Website →</span>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
