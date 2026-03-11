'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ParticleGlobe = dynamic(() => import('../three/ParticleGlobe'), {
  ssr: false,
  loading: () => null,
})

const services = [
  {
    id: '01',
    title: 'Web Development',
    description:
      'Blazing-fast, SEO-optimised web experiences built with Next.js, React, and modern stacks. From landing pages to complex SaaS platforms.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    imgSrc: '/images/devops.jpg',
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps with React Native. Native performance, beautiful UI, seamless user experience.',
    tech: ['React Native', 'Expo', 'Swift', 'Kotlin'],
    imgSrc: '/images/mobile-app.jpg',
  },
  {
    id: '03',
    title: 'UI/UX Design',
    description:
      'Research-driven interfaces that convert. Every pixel crafted with intention, from wireframes to high-fidelity prototypes.',
    tech: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    imgSrc: '/images/ui-ux.jpg',
  },
  {
    id: '04',
    title: 'Backend & API',
    description:
      'Scalable server architecture, REST and GraphQL APIs, database design, and cloud infrastructure that handles any load.',
    tech: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    imgSrc: '/images/ecommerce.webp',
  },
  {
    id: '05',
    title: 'SEO & Performance',
    description:
      'Speed optimisations, technical SEO, and performance audits that boost rankings and keep users engaged. We make your site fast and findable.',
    tech: ['OpenAI', 'LangChain', 'Python', 'TensorFlow'],
    imgSrc: '/images/seo.jpg',
  },
]

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const activeService = services[active]

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden py-24"
      style={{ background: 'var(--dark-2)' }}
    >
      {/* Background text */}
      <div
        className="section-bg-text"
        style={{ top: '50%', left: '-5%', transform: 'translateY(-50%)' }}
        aria-hidden
      >
        SERVICES
      </div>

      <div className="section-gradient-left absolute inset-0" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--green-bright)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}>
              What we do
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'var(--cream)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              Our Services
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'rgba(245,234,208,0.45)',
              maxWidth: '36ch',
              lineHeight: 1.7,
            }}
          >
            We offer comprehensive digital solutions that transform your business
            and drive innovation across every touchpoint.
          </motion.p>
        </div>

        {/* ── Main grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — animated globe */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="relative flex items-center justify-center"
            style={{ height: '480px' }}
          >
            {/* Green ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(34,197,94,0.10) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            <div className="relative w-full h-full" style={{ zIndex: 2, minHeight: '480px' }}>
              <ParticleGlobe className="absolute inset-0" particleCount={3200} />

              {/* Service number badge */}
              <div
                className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(34,197,94,0.12)',
                  border: '1px solid rgba(34,197,94,0.30)',
                  zIndex: 3,
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--green-bright)',
                }}>
                  {activeService.id}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Service cards */}
          <div className="space-y-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * i + 0.3 }}
                onClick={() => setActive(i)}
                className="relative cursor-pointer rounded-xl overflow-hidden transition-all duration-400"
                style={{
                  background: i === active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)',
                  border: `1px solid ${i === active ? 'rgba(34,197,94,0.35)' : 'rgba(34,197,94,0.08)'}`,
                  boxShadow: i === active ? '0 0 28px rgba(34,197,94,0.10)' : 'none',
                  transform: i === active ? 'scale(1.01)' : 'scale(1)',
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-all duration-400"
                  style={{
                    background: i === active ? 'var(--green-bright)' : 'transparent',
                    boxShadow: i === active ? '0 0 10px var(--green-bright)' : 'none',
                  }}
                />

                {/* Image strip — visible in main card content when active */}
                <AnimatePresence>
                  {i === active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: '100px' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full overflow-hidden"
                    >
                      <img
                        src={service.imgSrc}
                        alt={service.title}
                        className="w-full object-cover"
                        style={{ height: '100px', filter: 'brightness(0.55)', objectPosition: 'center 30%' }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to bottom, transparent 20%, var(--dark-2) 100%)' }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'rgba(34,197,94,0.06)' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="px-5 py-4">
                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: i === active ? 'var(--green-bright)' : 'rgba(245,234,208,0.25)',
                      }}>
                        {service.id}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: i === active ? 'var(--cream)' : 'rgba(245,234,208,0.55)',
                        transition: 'color 0.3s',
                        letterSpacing: '-0.01em',
                      }}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: i === active ? 'rgba(34,197,94,0.18)' : 'transparent',
                        border: `1px solid ${i === active ? 'rgba(34,197,94,0.45)' : 'rgba(245,234,208,0.12)'}`,
                        transform: i === active ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 10L10 2M10 2H5M10 2V7"
                          stroke={i === active ? 'var(--green-bright)' : 'rgba(245,234,208,0.4)'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {i === active && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="h-px w-full my-3"
                          style={{ background: 'linear-gradient(90deg, rgba(34,197,94,0.30), transparent)' }}
                        />
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.82rem',
                          color: 'rgba(245,234,208,0.5)',
                          lineHeight: 1.75,
                          marginBottom: '0.85rem',
                        }}>
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t) => (
                            <span key={t} style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.68rem',
                              padding: '0.25rem 0.65rem',
                              borderRadius: '100px',
                              border: '1px solid rgba(34,197,94,0.22)',
                              color: 'var(--green-bright)',
                              letterSpacing: '0.05em',
                            }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-2"
            >
              <Link href="/services" className="inline-flex items-center gap-2 group">
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--green-bright)',
                  letterSpacing: '0.05em',
                }}>
                  View all services
                </span>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="var(--green-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
