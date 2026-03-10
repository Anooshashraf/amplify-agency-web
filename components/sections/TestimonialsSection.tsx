'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  {
    quote:
      'The Amplify team worked with me to build my e-commerce site. Within 90 days of launch, our store was exceeding $100k in monthly revenue.',
    image: '/images/client4.jpg',
    name: 'Jay W.',
    title: 'Founder, Drift Coffee',
  },
  {
    quote:
      'We worked with Amplify to redesign our marketing site and SaaS platform, increasing our conversions and dramatically increasing revenue.',
    image: '/images/client2.jpg',
    name: 'Jen P.',
    title: 'President, Pacify',
  },
  {
    quote:
      'Working with Amplify on our booking platform with Antimatter was exceptional; we were able to design and build an entirely new platform from scratch.',
    image: '/images/client3.jpg',
    name: 'Mike B.',
    title: 'VP, Fiuze',
  },
  {
    quote:
      'Incredible attention to detail. They delivered our app ahead of schedule and it exceeded every expectation we had. The quality speaks for itself.',
    image: '/images/client1.webp',
    name: 'Sarah K.',
    title: 'CEO, LaunchPad',
  },
]

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'var(--dark)' }}
    >
      <div
        className="section-bg-text"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(5rem, 14vw, 13rem)',
          opacity: 1,
        }}
        aria-hidden
      >
        TESTIMONIALS
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          backgroundColor: 'rgba(26,107,60,0.16)',
          filter: 'blur(90px)',
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--green-bright)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            Social proof
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'var(--cream)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            What our clients<br />say about us
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-1 testimonial-card glass-card"
          >
            <div
              style={{
                position: 'absolute',
                top: '-0.5rem',
                left: '1.5rem',
                fontSize: '5rem',
                fontFamily: 'var(--font-display)',
                color: 'rgba(34,197,94,0.15)',
                lineHeight: 1,
                userSelect: 'none',
              }}
              aria-hidden
            >
              "
            </div>
            <div className="pt-8">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: 'rgba(245,234,208,0.7)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                }}
              >
                {clients[0].quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[rgba(245,234,208,0.28)]">
                  <Image
                    src={clients[0].image}
                    alt={`${clients[0].name} portrait`}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--cream)' }}>
                    {clients[0].name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(245,234,208,0.4)' }}>
                    {clients[0].title}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2 flex flex-col gap-6">
            {clients.slice(1).map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
                className="testimonial-card glass-card relative"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    left: '1.5rem',
                    fontSize: '4rem',
                    fontFamily: 'var(--font-display)',
                    color: 'rgba(34,197,94,0.1)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                  aria-hidden
                >
                  "
                </div>
                <div className="pt-6">
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'rgba(245,234,208,0.65)',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {client.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[rgba(245,234,208,0.24)]">
                      <Image
                        src={client.image}
                        alt={`${client.name} portrait`}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cream)' }}>
                        {client.name}
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'rgba(245,234,208,0.4)' }}>
                        {client.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
