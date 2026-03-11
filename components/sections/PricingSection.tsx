'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

// ─── Pricing data ─────────────────────────────────────────────────────────────
const plans = [
  {
    id: '01',
    name: 'Launch',
    tagline: 'For startups & MVPs',
    price: { monthly: 20000, annual: 18000 },
    description: 'Everything you need to go from idea to a polished, live product fast.',
    cta: 'Start Launch',
    ctaHref: '/contact?plan=launch',
    highlight: false,
    features: [
      { text: 'Up to 4 pages / screens', included: true },
      { text: 'Responsive web design', included: true },
      { text: 'Custom UI components', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Contact / lead form', included: true },
      { text: '2 rounds of revisions', included: true },
      { text: 'CMS integration', included: false },
      { text: 'API / backend development', included: false },
      { text: 'Dedicated project manager', included: false },
    ],
    deliveryWeeks: '2–3',
    accentColor: 'rgba(245,234,208,0.55)',
    borderColor: 'rgba(245,234,208,0.08)',
    bgGlow: 'rgba(245,234,208,0.02)',
  },
  {
    id: '02',
    name: 'Scale',
    tagline: 'Most popular',
    price: { monthly: 50000, annual: 44000 },
    description: 'Full-stack builds with custom motion, integrations, and a dedicated team.',
    cta: 'Start Scale',
    ctaHref: '/contact?plan=scale',
    highlight: true,
    features: [
      { text: 'Up to 10 pages / screens', included: true },
      { text: 'Responsive web design', included: true },
      { text: 'Custom UI components', included: true },
      { text: 'Advanced SEO + analytics', included: true },
      { text: 'Contact / lead form', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Custom animations', included: true },
      { text: 'API / backend development', included: false },
      { text: 'Dedicated project manager', included: false },
    ],
    deliveryWeeks: '6–8',
    accentColor: '#3ec76e',
    borderColor: 'rgba(62,199,110,0.25)',
    bgGlow: 'rgba(62,199,110,0.04)',
  },
  {
    id: '03',
    name: 'Enterprise',
    tagline: 'For ambitious brands',
    price: { monthly: null, annual: null },
    description: 'End-to-end product engineering — design, build, ship, and scale.',
    cta: 'Let\'s Talk',
    ctaHref: '/contact?plan=enterprise',
    highlight: false,
    features: [
      { text: 'Unlimited pages / screens', included: true },
      { text: 'Responsive web design', included: true },
      { text: 'Custom UI components', included: true },
      { text: 'Advanced SEO + analytics', included: true },
      { text: 'Contact / lead form', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Custom animations', included: true },
      { text: 'API / backend development', included: true },
      { text: 'Dedicated project manager', included: true },
    ],
    deliveryWeeks: 'Custom',
    accentColor: 'rgba(245,234,208,0.55)',
    borderColor: 'rgba(245,234,208,0.08)',
    bgGlow: 'rgba(245,234,208,0.02)',
  },
]

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

// ─── Check icon ───────────────────────────────────────────────────────────────
function Check({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="6.5" stroke={color} strokeOpacity="0.3" />
      <path d="M4.5 7L6.2 8.8L9.5 5.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r="6.5" stroke="rgba(245,234,208,0.1)" />
      <path d="M5 5l4 4M9 5l-4 4" stroke="rgba(245,234,208,0.2)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

// ─── Single pricing card ──────────────────────────────────────────────────────
function PricingCard({
  plan,
  index,
  billing,
  inView,
}: {
  plan: typeof plans[0]
  index: number
  billing: 'monthly' | 'annual'
  inView: boolean
}) {
  const price = plan.price[billing]
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ transform: plan.highlight ? 'translateY(-12px)' : undefined, zIndex: plan.highlight ? 2 : 1, position: 'relative' }}>
    <motion.div
      custom={index}
      variants={CARD_VARIANTS}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        padding: plan.highlight ? '2px' : '1.5px',
        background: plan.highlight
          ? hovered
            ? 'linear-gradient(135deg, #3ec76e99, #1a6b3c66, #3ec76e88)'
            : 'linear-gradient(135deg, #3ec76e55, #1a6b3c33, #3ec76e44)'
          : hovered
            ? `linear-gradient(135deg, rgba(62,199,110,0.22), rgba(62,199,110,0.08), rgba(62,199,110,0.18))`
            : `linear-gradient(135deg, ${plan.borderColor}, transparent, ${plan.borderColor})`,
        cursor: 'default',
      }}
    >
      {/* Highlight label */}
      {plan.highlight && (
        <div
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#3ec76e',
            borderRadius: '999px',
            padding: '4px 16px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            fontWeight: 700,
            color: '#020a06',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            zIndex: 10,
          }}
        >
          Most Popular
        </div>
      )}

      {/* Card inner */}
      <div
        style={{
          borderRadius: '18px',
          background: plan.highlight
            ? 'linear-gradient(160deg, #0d2b17 0%, #060e06 60%)'
            : `linear-gradient(160deg, ${plan.bgGlow} 0%, #060e06 50%)`,
          padding: '36px 32px 32px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          position: 'relative',
          overflow: 'hidden',
          transition: 'background 0.3s ease',
        }}
      >
        {/* Hover glow overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '18px',
          background: plan.highlight
            ? `radial-gradient(ellipse at 50% 0%, rgba(62,199,110,${hovered ? '0.13' : '0.0'}), transparent 65%)`
            : `radial-gradient(ellipse at 50% 0%, rgba(62,199,110,${hovered ? '0.07' : '0.0'}), transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        }} />
        {/* Subtle corner glow */}
        {plan.highlight && (
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: hovered ? '240px' : '180px',
            height: hovered ? '240px' : '180px',
            background: 'radial-gradient(circle at top right, rgba(62,199,110,0.14), transparent 70%)',
            pointerEvents: 'none',
            transition: 'width 0.4s ease, height 0.4s ease',
          }} />
        )}

        {/* Plan ID + tagline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <span style={{
            fontFamily: 'var(--font-number)',
            fontSize: '0.65rem',
            fontWeight: 700,
            color: plan.accentColor,
            letterSpacing: '0.12em',
            opacity: 0.7,
          }}>
            {plan.id}
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            padding: '3px 10px',
            borderRadius: '999px',
            border: `1px solid ${plan.borderColor}`,
            color: plan.accentColor,
            letterSpacing: '0.06em',
            opacity: plan.highlight ? 1 : 0.7,
          }}>
            {plan.tagline}
          </span>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
          fontWeight: 800,
          color: plan.highlight ? '#f0fdf4' : 'var(--cream)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: '10px',
        }}>
          {plan.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.78rem',
          color: 'rgba(245,234,208,0.4)',
          lineHeight: 1.7,
          marginBottom: '28px',
          minHeight: '52px',
        }}>
          {plan.description}
        </p>

        {/* Price */}
        <div style={{ marginBottom: '28px' }}>
          {price !== null ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontFamily: 'var(--font-number)',
                fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: plan.highlight ? '#f0fdf4' : 'var(--cream)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}>
                Rs{price.toLocaleString()}
              </span>
                <div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    color: 'rgba(245,234,208,0.35)',
                    display: 'block',
                    lineHeight: 1.3,
                  }}>
                    / project
                  </span>
                  {billing === 'annual' && (
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6rem',
                      color: plan.highlight ? '#3ec76e' : 'rgba(245,234,208,0.3)',
                      letterSpacing: '0.04em',
                    }}>
                      billed annually
                    </span>
                  )}
                </div>
            </div>
          ) : (
            <div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: 'var(--cream)',
                letterSpacing: '-0.03em',
              }}>
                Custom
              </span>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'rgba(245,234,208,0.35)',
                marginTop: '4px',
              }}>
                Scoped to your project
              </p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: `linear-gradient(90deg, ${plan.borderColor}, transparent)`,
          marginBottom: '24px',
        }} />

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '11px', flex: 1 }}>
          {plan.features.map((f, fi) => (
            <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {f.included ? <Check color={plan.accentColor} /> : <Cross />}
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.76rem',
                color: f.included ? 'rgba(245,234,208,0.7)' : 'rgba(245,234,208,0.22)',
                lineHeight: 1.4,
                textDecoration: f.included ? 'none' : 'none',
              }}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Delivery badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          borderRadius: '10px',
          background: 'rgba(255,255,255,0.03)',
          border: `1px solid ${plan.borderColor}`,
          marginBottom: '20px',
        }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.8" stroke={plan.accentColor} strokeOpacity="0.5" strokeWidth="1.1" />
            <path d="M6.5 3.5v3l2 1.5" stroke={plan.accentColor} strokeOpacity="0.8" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            color: 'rgba(245,234,208,0.45)',
          }}>
            Delivered in{' '}
            <span style={{ color: plan.accentColor, fontWeight: 600 }}>
              {plan.deliveryWeeks} {plan.deliveryWeeks === 'Custom' ? '' : 'weeks'}
            </span>
          </span>
        </div>

        <Link href={plan.ctaHref} style={{ textDecoration: 'none' }}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: plan.highlight ? 'none' : `1px solid ${plan.borderColor}`,
              background: plan.highlight
                ? 'linear-gradient(135deg, #3ec76e, #27a357)'
                : 'transparent',
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: plan.highlight ? '#020a06' : plan.accentColor,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
          >
            {plan.cta} →
          </motion.button>
        </Link>
      </div>
    </motion.div>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  const savings = Math.round(((2900 - 2400) / 2900) * 100)

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden px-6 md:px-12 lg:px-20"
      style={{ background: 'var(--dark)' }}
    >
      {/* Background watermark */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(5rem, 14vw, 13rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.012)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        letterSpacing: '-0.04em',
        pointerEvents: 'none',
      }}>
        PRICING
      </div>

      {/* Ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(26,107,60,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '0' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              color: 'var(--green-bright)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
              fontWeight: 500,
            }}>
              Transparent pricing
            </span>

            {/* Heading + billing toggle on same row */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--cream)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                maxWidth: '18ch',
              }}>
                Simple plans,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--green-bright)' }}>no surprises</em>
              </h2>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                flexShrink: 0,
                alignSelf: 'flex-start',
                marginTop: '8px',
              }}>
                {(['monthly', 'annual'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBilling(b)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '8px',
                      border: 'none',
                      background: billing === b ? 'rgba(62,199,110,0.15)' : 'transparent',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.74rem',
                      fontWeight: billing === b ? 600 : 400,
                      color: billing === b ? '#3ec76e' : 'rgba(245,234,208,0.35)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.03em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {b === 'monthly' ? 'Monthly' : 'Annual'}
                    {b === 'annual' && (
                      <span style={{
                        marginLeft: '6px',
                        padding: '2px 6px',
                        borderRadius: '999px',
                        background: billing === 'annual' ? '#3ec76e' : 'rgba(62,199,110,0.2)',
                        color: billing === 'annual' ? '#020a06' : '#3ec76e',
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                      }}>
                        -{savings}%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'start',
        }}
          className="pricing-grid"
        >
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={i}
              billing={billing}
              inView={inView}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            marginTop: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {[
            { icon: '🔒', text: 'No hidden fees' },
            { icon: '↩', text: '14-day money-back guarantee' },
            { icon: '📞', text: 'Free discovery call' },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.74rem',
              color: 'rgba(245,234,208,0.35)',
              letterSpacing: '0.02em',
            }}>
              <span style={{ fontSize: '0.85rem' }}>{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Responsive grid override */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
          }
          .pricing-grid > div {
            transform: none !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .pricing-grid {
            gap: 14px !important;
          }
        }
      ` }} />
    </section>
  )
}
