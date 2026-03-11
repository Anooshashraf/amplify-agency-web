'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const ParticleGlobe = dynamic(() => import('@/components/three/ParticleGlobe'), { ssr: false })

const allServices = [
  {
    id: '01',
    title: 'Web Development',
    description:
      'Blazing-fast, SEO-optimised web experiences. From marketing sites to complex SaaS platforms, we build for performance, scalability, and conversion.',
    features: ['Next.js / React', 'Server-side rendering', 'SEO optimisation', 'Performance tuning', 'CMS integration'],
    accent: 'var(--green-bright)',
    imgSrc: '/images/devops.jpg',
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS & Android apps with React Native. Native-level performance with a single codebase. App Store and Play Store ready.',
    features: ['React Native', 'Expo', 'Push notifications', 'Offline support', 'In-app purchases'],
    accent: 'var(--cream)',
    imgSrc: '/images/mobile-app.jpg',
  },
  {
    id: '03',
    title: 'UI/UX Design',
    description:
      'User interfaces that convert. We conduct real research, build design systems, and create high-fidelity prototypes before a single line of code is written.',
    features: ['User research', 'Wireframing', 'High-fidelity design', 'Design systems', 'Usability testing'],
    accent: 'var(--green-bright)',
    imgSrc: '/images/ui-ux.jpg',
  },
  {
    id: '04',
    title: 'Backend & API Development',
    description:
      'Robust, scalable server infrastructure. REST and GraphQL APIs, database architecture, authentication, and cloud deployment.',
    features: ['Node.js / Python', 'PostgreSQL / MongoDB', 'REST & GraphQL', 'AWS / Vercel', 'Docker / CI/CD'],
    accent: 'var(--cream)',
    imgSrc: '/images/ecommerce.webp',
  },
  {
    id: '05',
    title: 'AI Integration',
    description:
      'Embed real intelligence into your product. LLM integrations, custom model fine-tuning, RAG pipelines, and AI-powered features that users love.',
    features: ['OpenAI / Claude API', 'LangChain', 'Vector databases', 'Fine-tuning', 'AI agents'],
    accent: 'var(--green-bright)',
    imgSrc: '/images/seo.jpg',
  },
  {
    id: '06',
    title: 'Maintenance & Support',
    description:
      '24/7 support, monitoring, updates, and ongoing development. We don\'t disappear after launch — we grow with you.',
    features: ['24/7 monitoring', 'Bug fixes', 'Feature updates', 'Performance reports', 'Dedicated Slack channel'],
    accent: 'var(--cream)',
    imgSrc: '/images/team_collaboration.png',
  },
]

function ServiceCard({ service, index }: { service: typeof allServices[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card relative overflow-hidden rounded-2xl p-8 group hover:glow-green transition-all duration-500"
      style={{ borderColor: 'rgba(34,197,94,0.1)' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `url(${service.imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.38) saturate(0.78) contrast(0.98)',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(2,10,6,0.72) 0%, rgba(2,10,6,0.68) 50%, rgba(2,10,6,0.74) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(34,197,94,0.08)',
        }}
      />

      <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            color: 'rgba(245,234,208,0.25)',
            letterSpacing: '0.15em',
          }}
        >
          {service.id}
        </span>
        
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          fontWeight: 800,
          color: 'var(--cream)',
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'rgba(245,234,208,0.5)',
          lineHeight: 1.75,
          marginBottom: '1.5rem',
        }}
      >
        {service.description}
      </p>

      <div className="line-sep mb-4" />

      <div className="space-y-2">
        {service.features.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--green-glow)',
                flexShrink: 0,
                boxShadow: '0 0 6px var(--green-glow)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'rgba(245,234,208,0.45)',
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPageContent() {
  return (
    <main style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-bg-text" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden>
          WORK
        </div>
        <div className="hero-gradient absolute inset-0" />
        <ParticleGlobe className="absolute inset-0 opacity-40" particleCount={1800} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--green-bright)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.5rem',
            }}
          >
            What we build
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 800,
              color: 'var(--cream)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: '1.5rem',
            }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(245,234,208,0.45)',
              maxWidth: '50ch',
              lineHeight: 1.7,
            }}
          >
            End-to-end digital product development. We handle everything from
            strategy and design through to development and ongoing support.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-20 text-center"
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(245,234,208,0.4)',
                marginBottom: '2rem',
              }}
            >
              Ready to get started?
            </p>
            <Link href="/contact">
              <button className="btn-primary text-sm py-4 px-10">
                <span>Start Your Project</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
