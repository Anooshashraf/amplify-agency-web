'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const ParticleGlobe = dynamic(() => import('@/components/three/ParticleGlobe'), {
  ssr: false,
  loading: () => null,
})

const projects = [
  {
    id: '01',
    title: 'AutoElite',
    category: 'Automotive',
    year: '2024',
    liveUrl: '/work/Autoelite.html',
    description:
      'AutoElite needed a digital showroom that matched the premium feel of their physical dealership. We designed a cinematic, high-contrast site with bold typography, clip-path shapes, and a live inventory search — creating an experience as premium as the vehicles themselves.',
    challenge: 'The existing site was generic and failed to convey the luxury positioning. Conversions were low and bounce rate was high.',
    solution: 'We rebuilt from the ground up with a cinematic dark aesthetic, interactive inventory browser, and streamlined enquiry flow optimised for mobile.',
    services: ['Web Design', 'Development', 'UI/UX', 'SEO'],
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'PostgreSQL'],
    color: '#E63030',
    stat1: { label: 'Conversion Rate', value: '+38%' },
    stat2: { label: 'Bounce Rate', value: '−52%' },
    stat3: { label: 'Avg. Session', value: '3.8 min' },
    gradient: 'linear-gradient(135deg, rgba(230,48,48,0.06) 0%, transparent 60%)',
  },
  {
    id: '02',
    title: 'Ember & Salt',
    category: 'Restaurant',
    year: '2024',
    liveUrl: '/work/EmberSalt.html',
    description:
      'Ember & Salt is a modern fine-dining restaurant that needed its website to reflect its refined, seasonal menu philosophy. We built an editorial experience using warm amber tones, split-column layouts, and a seamless reservation integration that mirrors the dining atmosphere.',
    challenge: 'The previous site was outdated, not mobile-friendly, and the reservation flow was clunky — causing drop-offs before bookings were completed.',
    solution: 'A complete redesign with an editorial grid layout, custom reservation flow, menu animations, and a parallax gallery showcasing the restaurant atmosphere.',
    services: ['Web Design', 'Development', 'Reservation Integration', 'Photography Direction'],
    tech: ['Next.js', 'GSAP', 'Lenis', 'Tailwind CSS', 'OpenTable API'],
    color: '#D4820A',
    stat1: { label: 'Reservations', value: '+61%' },
    stat2: { label: 'Avg. Session', value: '4.2 min' },
    stat3: { label: 'Mobile Traffic', value: '+78%' },
    gradient: 'linear-gradient(135deg, rgba(212,130,10,0.06) 0%, transparent 60%)',
  },
  {
    id: '03',
    title: 'NovaTech',
    category: 'Tech Agency',
    year: '2023',
    liveUrl: '/work/NovaTech.html',
    description:
      'NovaTech is a digital innovation agency that required a website communicating cutting-edge expertise. We created a dual-accent design with deep dark surfaces, noise textures, and animated service cards that feel as technically sophisticated as the products NovaTech builds.',
    challenge: "NovaTech's previous site was template-based and failed to differentiate them in a crowded market. The site wasn't generating qualified leads.",
    solution: 'A bespoke design with particle animations, a case study showcase, animated service section, and a conversion-optimised contact flow.',
    services: ['Brand Identity', 'Web Design', 'Development', 'Motion Design'],
    tech: ['Next.js', 'React Three Fiber', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#7B5CF5',
    stat1: { label: 'Lead Gen', value: '+89%' },
    stat2: { label: 'Time on Site', value: '+3.1×' },
    stat3: { label: 'MQL Quality', value: '+55%' },
    gradient: 'linear-gradient(135deg, rgba(123,92,245,0.06) 0%, transparent 60%)',
  },
  {
    id: '04',
    title: 'FreshCart',
    category: 'E-Commerce',
    year: '2023',
    liveUrl: '/work/FreshCart.html',
    description:
      "FreshCart is a premium grocery delivery service targeting health-conscious urban customers. We built a light-theme e-commerce platform with a forest green palette — making the shopping experience feel luxurious while remaining intuitive and fast.",
    challenge: "FreshCart was losing customers at checkout. The site felt generic and didn't justify the premium pricing tier they were targeting.",
    solution: 'A full e-commerce platform redesign with a premium light aesthetic, streamlined checkout (3 steps), subscription management, and a personalised recommendation system.',
    services: ['E-Commerce Design', 'Development', 'Checkout Optimisation', 'Analytics'],
    tech: ['Next.js', 'Stripe', 'Framer Motion', 'Prisma', 'PostgreSQL', 'Vercel'],
    color: '#3ec76e',
    stat1: { label: 'Cart Value', value: '+44%' },
    stat2: { label: 'Return Users', value: '67%' },
    stat3: { label: 'Checkout Drops', value: '−38%' },
    gradient: 'linear-gradient(135deg, rgba(62,199,110,0.06) 0%, transparent 60%)',
  },
]

// ── Browser Preview Modal ─────────────────────────────────────────────────────
function PreviewModal({ url, title, color, onClose }: {
  url: string; title: string; color: string; onClose: () => void
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
        style={{ background: 'rgba(2,10,6,0.92)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl"
          style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-t-xl flex-shrink-0"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${color}30`,
              borderBottom: 'none',
            }}
          >
            {/* Traffic lights */}
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full transition-opacity hover:opacity-80"
                style={{ background: '#ff5f57' }}
              />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>

            {/* URL bar */}
            <div
              className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg mx-2"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Lock icon */}
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" style={{ flexShrink: 0 }}>
                <rect x="1" y="5" width="8" height="7" rx="1.5" stroke={color} strokeWidth="1.2"/>
                <path d="M3 5V3.5a2 2 0 0 1 4 0V5" stroke={color} strokeWidth="1.2"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'rgba(245,234,208,0.45)',
                letterSpacing: '0.02em',
              }}>
                amplifyagency.com{url}
              </span>
            </div>

            {/* Open in new tab */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all hover:opacity-80 flex-shrink-0"
              style={{
                background: `${color}18`,
                border: `1px solid ${color}35`,
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                color: color,
                letterSpacing: '0.05em',
                textDecoration: 'none',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H5M9 1V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Open
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-7 h-7 rounded-lg transition-all hover:opacity-70 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1l-8 8" stroke="rgba(245,234,208,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* iframe */}
          <div
            className="flex-1 rounded-b-xl overflow-hidden"
            style={{
              border: `1px solid ${color}30`,
              minHeight: '75vh',
            }}
          >
            <iframe
              src={url}
              title={title}
              className="w-full h-full"
              style={{ minHeight: '75vh', border: 'none', display: 'block' }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative rounded-2xl overflow-hidden mb-8"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: `1px solid ${project.color}20`,
        }}
      >
        {/* Gradient bg */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: project.gradient }} />

        <div className="relative z-10 p-8 md:p-12">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                  color: project.color, fontFamily: 'var(--font-number)',
                }}>
                  {project.id}
                </span>
                <span style={{
                  fontSize: '0.72rem', padding: '4px 12px', borderRadius: '100px',
                  border: `1px solid ${project.color}40`, color: project.color,
                  fontFamily: 'var(--font-body)',
                }}>
                  {project.category}
                </span>
                <span style={{
                  fontSize: '0.72rem', color: 'rgba(245,234,208,0.25)',
                  fontFamily: 'var(--font-number)',
                }}>
                  {project.year}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                fontWeight: 800, color: 'var(--cream)',
                letterSpacing: '-0.03em', lineHeight: 1.05,
              }}>
                {project.title}
              </h3>
            </div>

            {/* Stats */}
            <div className="flex gap-6 flex-shrink-0">
              {[project.stat1, project.stat2, project.stat3].map((stat, si) => (
                <div key={si} className="text-right">
                  <div style={{
                    fontFamily: 'var(--font-number)',
                    fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                    fontWeight: 700, color: project.color, lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.62rem', color: 'rgba(245,234,208,0.35)',
                    fontFamily: 'var(--font-body)', letterSpacing: '0.05em', marginTop: '2px',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full mb-8" style={{
            background: `linear-gradient(90deg, ${project.color}30, rgba(255,255,255,0.04), transparent)`,
          }} />

          {/* ── LIVE PREVIEW STRIP ── */}
          <div
            className="relative overflow-hidden mb-8 cursor-pointer group -mx-8 md:-mx-12"
            style={{
              border: `1px solid ${project.color}25`,
              borderLeft: 'none',
              borderRight: 'none',
              height: '340px',
            }}
            onClick={() => setPreviewOpen(true)}
          >
            {/* Scaled iframe preview (non-interactive thumbnail) */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
            >
              <iframe
                src={project.liveUrl}
                title={`${project.title} preview`}
                scrolling="no"
                style={{
                  width: '300%',
                  height: '300%',
                  border: 'none',
                  transformOrigin: 'top left',
                  transform: 'scale(0.334)',
                  pointerEvents: 'none',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>

            {/* Dark overlay with click-to-view prompt */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-all duration-400"
              style={{
                background: 'rgba(2,10,6,0.45)',
              }}
            >
              <div
                className="flex flex-col items-center gap-3 transition-all duration-300 group-hover:scale-105"
              >
                {/* Play/view button */}
                <div
                  className="flex items-center gap-3 px-5 py-3 rounded-full"
                  style={{
                    background: `${project.color}22`,
                    border: `1px solid ${project.color}60`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: project.color }}
                  >
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="white"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--cream)',
                    letterSpacing: '0.02em',
                  }}>
                    Preview Live Site
                  </span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  color: 'rgba(245,234,208,0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  Click to open full preview
                </span>
              </div>
            </div>

            {/* Bottom colour glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{ background: `linear-gradient(to top, ${project.color}18, transparent)` }}
            />
          </div>

          {/* Body grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.84rem',
                color: 'rgba(245,234,208,0.55)', lineHeight: 1.85, marginBottom: '2rem',
              }}>
                {project.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: project.color, marginBottom: '0.75rem',
                  }}>
                    The Challenge
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.76rem',
                    color: 'rgba(245,234,208,0.45)', lineHeight: 1.75,
                  }}>
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: project.color, marginBottom: '0.75rem',
                  }}>
                    Our Solution
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.76rem',
                    color: 'rgba(245,234,208,0.45)', lineHeight: 1.75,
                  }}>
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: services + tech + CTA */}
            <div className="flex flex-col gap-6">
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(245,234,208,0.3)', marginBottom: '0.75rem',
                }}>
                  Services
                </div>
                <div className="flex flex-col gap-2">
                  {project.services.map(s => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ background: project.color }} />
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.74rem',
                        color: 'rgba(245,234,208,0.5)',
                      }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(245,234,208,0.3)', marginBottom: '0.75rem',
                }}>
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.63rem',
                      padding: '3px 10px', borderRadius: '100px',
                      border: `1px solid ${project.color}25`,
                      color: project.color, letterSpacing: '0.04em',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-2 mt-auto pt-2">
                <button
                  onClick={() => setPreviewOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all hover:opacity-80"
                  style={{
                    background: `${project.color}18`,
                    border: `1px solid ${project.color}40`,
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: project.color,
                    cursor: 'pointer',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="2" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M1 5h12" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="3.5" cy="3.5" r="0.7" fill="currentColor"/>
                    <circle cx="5.5" cy="3.5" r="0.7" fill="currentColor"/>
                    <circle cx="7.5" cy="3.5" r="0.7" fill="currentColor"/>
                  </svg>
                  Preview in Browser
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all hover:opacity-70"
                  style={{
                    border: '1px solid rgba(245,234,208,0.08)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    color: 'rgba(245,234,208,0.4)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H6M11 1V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preview Modal */}
      {previewOpen && (
        <PreviewModal
          url={project.liveUrl}
          title={project.title}
          color={project.color}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function WorkPageContent() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [sliderPreviewOpen, setSliderPreviewOpen] = useState(false)

  const goNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--dark)', minHeight: '100vh' }}>

        {/* Hero */}
        <section ref={heroRef} className="relative pt-40 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.32 }}>
            <ParticleGlobe className="absolute inset-0" particleCount={2200} />
          </div>

          <div
            className="section-bg-text"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 'clamp(6rem, 20vw, 20rem)' }}
            aria-hidden
          >
            WORK
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,107,60,0.08) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.7rem',
                  letterSpacing: '0.2em', color: 'var(--green-bright)',
                  textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem',
                }}>
                  Selected Projects
                </span>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5.2vw, 4.6rem)',
                  fontWeight: 800, color: 'var(--cream)',
                  letterSpacing: '-0.04em', lineHeight: 1.0,
                  marginBottom: '1.25rem', maxWidth: '14ch',
                }}>
                  Work That{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--green-bright)' }}>Performs</em>
                </h1>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.76rem, 1.15vw, 0.88rem)',
                  color: 'rgba(245,234,208,0.45)',
                  maxWidth: '52ch', lineHeight: 1.8, marginBottom: '2.2rem',
                }}>
                  Every project is a collaboration. We embed ourselves in your business, understand your users, and build digital products that deliver measurable results.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span style={{ fontFamily: 'var(--font-number)', fontSize: '0.66rem', color: 'rgba(245,234,208,0.42)', letterSpacing: '0.09em' }}>
                    {projects[activeIndex].id} / {String(projects.length).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'rgba(245,234,208,0.35)', letterSpacing: '0.06em' }}>
                    Tap card to flip
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  {[
                    { value: '50+', label: 'Projects Delivered' },
                    { value: '4', label: 'Industries' },
                    { value: '100%', label: 'Client Satisfaction' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div style={{
                        fontFamily: 'var(--font-number)',
                        fontSize: 'clamp(1.35rem, 2.3vw, 2rem)',
                        fontWeight: 700, color: 'var(--cream)', lineHeight: 1,
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                        color: 'rgba(245,234,208,0.35)',
                        letterSpacing: '0.08em', marginTop: '0.25rem',
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="relative w-full max-w-[460px] mx-auto lg:ml-auto"
                style={{ perspective: '1200px', minHeight: '520px' }}
              >
                {[2, 1, 0].map((depth) => {
                  const idx = (activeIndex + depth) % projects.length
                  const p = projects[idx]
                  const isFront = depth === 0

                  return (
                    <motion.article
                      key={`${p.id}-${depth}`}
                      initial={{ opacity: 0, x: direction > 0 ? 70 : -70, rotateY: direction > 0 ? 14 : -14 }}
                      animate={{
                        opacity: 1 - depth * 0.22,
                        x: depth * 44,
                        y: depth * 20,
                        scale: 1 - depth * 0.08,
                        rotateY: -depth * 11,
                        zIndex: 30 - depth,
                      }}
                      transition={{ type: 'spring', stiffness: 170, damping: 22, mass: 0.85 }}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      onClick={isFront ? goNext : undefined}
                      whileTap={isFront ? { scale: 0.985 } : undefined}
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid ${p.color}30`,
                        boxShadow: `0 16px 38px ${p.color}14`,
                        transformStyle: 'preserve-3d',
                        pointerEvents: isFront ? 'auto' : 'none',
                        willChange: 'transform, opacity',
                        cursor: isFront ? 'pointer' : 'default',
                      }}
                    >
                      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <iframe
                          src={p.liveUrl}
                          title={`${p.title} preview stack`}
                          scrolling="no"
                          className="absolute top-0 left-0"
                          style={{
                            width: '300%',
                            height: '300%',
                            border: 'none',
                            transformOrigin: 'top left',
                            transform: 'scale(0.334)',
                            pointerEvents: 'none',
                            display: 'block',
                            filter: 'brightness(0.76)',
                          }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${p.color}66 0%, transparent 62%)` }} />
                        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full" style={{ border: `1px solid ${p.color}65` }}>
                          <span style={{ fontFamily: 'var(--font-number)', fontSize: '0.62rem', color: p.color, letterSpacing: '0.08em' }}>
                            {p.id}
                          </span>
                        </div>
                      </div>

                      {isFront ? (
                        <div className="p-5 md:p-6">
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: p.color, letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                            {p.category}
                          </p>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.05rem, 1.9vw, 1.45rem)', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.8rem' }}>
                            {p.title}
                          </h3>

                          <div className="grid grid-cols-2 gap-2">
                            {[p.stat1, p.stat2].map((stat, si) => (
                              <div key={si} className="rounded-lg px-3 py-2.5" style={{ border: `1px solid ${p.color}22`, background: 'rgba(255,255,255,0.015)' }}>
                                <div style={{ fontFamily: 'var(--font-number)', fontSize: '0.95rem', color: p.color, fontWeight: 700, lineHeight: 1.1 }}>
                                  {stat.value}
                                </div>
                                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.54rem', color: 'rgba(245,234,208,0.38)', marginTop: '2px', letterSpacing: '0.04em' }}>
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSliderPreviewOpen(true)
                            }}
                            className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg transition-opacity hover:opacity-80"
                            style={{
                              background: `${p.color}18`,
                              border: `1px solid ${p.color}40`,
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.68rem',
                              fontWeight: 600,
                              color: p.color,
                            }}
                          >
                            Preview Live Site
                          </button>
                        </div>
                      ) : (
                        <div className="h-0" />
                      )}
                    </motion.article>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {sliderPreviewOpen && (
          <PreviewModal
            url={projects[activeIndex].liveUrl}
            title={projects[activeIndex].title}
            color={projects[activeIndex].color}
            onClose={() => setSliderPreviewOpen(false)}
          />
        )}

        {/* Bottom CTA */}
        <section className="px-6 md:px-12 lg:px-20 pb-28 max-w-7xl mx-auto">
          <div
            className="rounded-2xl p-12 md:p-16 text-center"
            style={{ background: 'rgba(26,107,60,0.06)', border: '1px solid rgba(34,197,94,0.1)' }}
          >
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem',
              letterSpacing: '0.2em', color: 'var(--green-bright)',
              textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              Ready to build?
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 4vw, 3.2rem)',
              fontWeight: 800, color: 'var(--cream)',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2rem',
            }}>
              Your project could be next.
            </h2>
            <Link href="/contact">
              <button className="btn-primary"><span>Start a Project</span></button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
