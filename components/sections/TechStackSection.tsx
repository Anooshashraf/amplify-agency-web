// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const stack = [
//   { name: 'React', imgSrc: '/images/react.png' },
//   { name: 'Next.js', imgSrc: '/images/nextjs.png' },
//   { name: 'TypeScript', imgSrc: '/images/TS.png' },
//   { name: 'Node.js', imgSrc: '/images/node.png' },
//   { name: 'PostgreSQL', imgSrc: '/images/postgresql.png' },
//   { name: 'Three.js', imgSrc: '/images/animate.png' },
//   { name: 'Tailwind', imgSrc: '/images/tailwind.svg' },
//   { name: 'Framer', imgSrc: '/images/framer.webp' },
//   { name: 'GraphQL', imgSrc: '/images/graphql.png' },
//   { name: 'Prisma', imgSrc: '/images/prisma.svg' },
//   { name: 'Docker', imgSrc: '/images/docker.svg' },
//   { name: 'AWS', imgSrc: '/images/aws.png' },
//   { name: 'Figma', imgSrc: '/images/ui-ux.jpg' },
//   { name: 'Redis', imgSrc: '/images/devops.jpg' },
//   { name: 'Vercel', imgSrc: '/images/Vercel-Logo.jpg' },
//   { name: 'Jest', imgSrc: '/images/jest.png' },
//   { name: 'Git', imgSrc: '/images/Git_icon.svg.png' },
//   { name: 'Github', imgSrc: '/images/github.png' },
// ]

// const bubbleSlots = [
//   { left: '35%', top: '42%', size: 78, delay: 0.1, y: -8, x: 4, rotate: -5 },
//   { left: '42%', top: '31%', size: 74, delay: 0.3, y: -9, x: -4, rotate: 7 },
//   { left: '53%', top: '28%', size: 72, delay: 0.45, y: -8, x: 5, rotate: -6 },
//   { left: '64%', top: '32%', size: 76, delay: 0.2, y: -10, x: -3, rotate: 5 },
//   { left: '72%', top: '42%', size: 74, delay: 0.55, y: -8, x: 4, rotate: -4 },
//   { left: '73%', top: '54%', size: 76, delay: 0.4, y: -9, x: -4, rotate: 6 },
//   { left: '66%', top: '65%', size: 72, delay: 0.7, y: -8, x: 3, rotate: -7 },
//   { left: '55%', top: '71%', size: 72, delay: 0.65, y: -9, x: 2, rotate: 8 },
//   { left: '44%', top: '70%', size: 70, delay: 0.5, y: -7, x: -3, rotate: -5 },
//   { left: '35%', top: '63%', size: 72, delay: 0.35, y: -8, x: 3, rotate: 6 },
//   { left: '29%', top: '53%', size: 74, delay: 0.8, y: -9, x: -2, rotate: -6 },
//   { left: '29%', top: '41%', size: 70, delay: 0.25, y: -7, x: 2, rotate: 4 },
//   { left: '47%', top: '50%', size: 66, delay: 0.6, y: -8, x: -2, rotate: -5 },
//   { left: '58%', top: '49%', size: 66, delay: 0.75, y: -8, x: 2, rotate: 5 },
//   { left: '50%', top: '60%', size: 64, delay: 0.9, y: -7, x: 1, rotate: -4 },
//   { left: '50%', top: '40%', size: 64, delay: 1.0, y: -7, x: 1, rotate: 4 },
// ]

// export default function TechStackSection() {
//   const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

//   return (
//     <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: 'var(--dark)' }}>
//       <div
//         className="section-bg-text"
//         style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 'clamp(5rem, 15vw, 14rem)' }}
//         aria-hidden
//       >
//         TECH STACK
//       </div>

//       <div className="absolute inset-0 pointer-events-none" aria-hidden>
//         <div className="dot-grid absolute inset-0 opacity-20" />
//         <motion.div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//           animate={{ scale: [0.95, 1.04, 0.95], opacity: [0.18, 0.34, 0.18] }}
//           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
//           style={{
//             width: '640px',
//             height: '640px',
//             borderRadius: '999px',
//             backgroundColor: 'rgba(62,199,110,0.2)',
//             filter: 'blur(88px)',
//           }}
//         />
//       </div>

//       <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mb-12"
//         >
//           <span
//             style={{
//               fontFamily: 'var(--font-body)',
//               fontSize: '0.75rem',
//               letterSpacing: '0.2em',
//               color: 'var(--green-bright)',
//               textTransform: 'uppercase',
//               display: 'block',
//               marginBottom: '1rem',
//             }}
//           >
//             Build stack
//           </span>
//           <h2
//             style={{
//               fontFamily: 'var(--font-display)',
//               fontSize: 'clamp(2rem, 4.8vw, 3.8rem)',
//               fontWeight: 800,
//               color: 'var(--cream)',
//               letterSpacing: '-0.03em',
//               lineHeight: 1.08,
//               maxWidth: '14ch',
//             }}
//           >
//             Live tech bubbles
//             <br />
//             behind every build
//           </h2>
//         </motion.div>

//         <div className="relative h-[500px] sm:h-[540px] md:h-[560px] rounded-3xl border border-[rgba(62,199,110,0.18)] bg-[rgba(255,255,255,0.02)] overflow-hidden">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.9, delay: 0.15 }}
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
//             style={{
//               width: 'min(34vw, 220px)',
//               height: 'min(34vw, 220px)',
//               minWidth: '170px',
//               minHeight: '170px',
//               background: '#0b3a21',
//               border: '1px solid rgba(255,255,255,0.18)',
//               boxShadow: '0 24px 50px rgba(0,0,0,0.35), 0 0 26px rgba(255,255,255,0.08)',
//               backdropFilter: 'blur(12px)',
//               WebkitBackdropFilter: 'blur(12px)',
//             }}
//           >
//             <div className="h-full w-full flex flex-col items-center justify-center px-4 text-center">
//               <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#ffffff', fontWeight: 800 }}>
//                 Amplify
//               </div>
//               <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.74rem', color: 'rgba(255,255,255,0.78)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
//                 Production Stack
//               </div>
//             </div>
//           </motion.div>

//           {stack.map((item, i) => {
//             const slot = bubbleSlots[i % bubbleSlots.length]
//             return (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.7, delay: slot.delay }}
//                 className="absolute -translate-x-1/2 -translate-y-1/2"
//                 style={{ left: slot.left, top: slot.top }}
//               >
//                 <motion.div
//                   animate={{ y: [0, slot.y, 0], x: [0, slot.x, 0], rotate: [0, slot.rotate, 0] }}
//                   whileHover={{ y: -14, scale: 1.14, rotate: slot.rotate * 0.5 }}
//                   whileTap={{ scale: 1.05 }}
//                   transition={{ duration: 4.2 + i * 0.35, repeat: Infinity, ease: 'easeInOut' }}
//                   className="rounded-full flex flex-col items-center justify-center cursor-pointer"
//                   style={{
//                     width: `${slot.size}px`,
//                     height: `${slot.size}px`,
//                     background: '#0b3a21',
//                     border: '1px solid rgba(255,255,255,0.18)',
//                     boxShadow: '0 14px 26px rgba(0,0,0,0.3), 0 0 18px rgba(255,255,255,0.08)',
//                     backdropFilter: 'blur(10px)',
//                     WebkitBackdropFilter: 'blur(10px)',
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '34px',
//                       height: '34px',
//                       borderRadius: '10px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: '#ffffff',
//                       border: '1px solid rgba(255,255,255,0.25)',
//                       background: 'rgba(255,255,255,0.08)',
//                       position: 'relative',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <Image
//                       src={item.imgSrc}
//                       alt={`${item.name} logo`}
//                       fill
//                       sizes="34px"
//                       className="object-contain p-1"
//                     />
//                   </div>
//                   <span
//                     style={{
//                       marginTop: '0.4rem',
//                       fontFamily: 'var(--font-body)',
//                       fontSize: '0.6rem',
//                       color: '#ffffff',
//                       letterSpacing: '0.03em',
//                     }}
//                   >
//                     {item.name}
//                   </span>
//                 </motion.div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }







'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stack = [
  { name: 'React', imgSrc: '/images/react.png', category: 'Frontend' },
  { name: 'Next.js', imgSrc: '/images/nextjs.png', category: 'Frontend' },
  { name: 'TypeScript', imgSrc: '/images/TS.png', category: 'Language' },
  { name: 'Node.js', imgSrc: '/images/node.png', category: 'Backend' },
  { name: 'PostgreSQL', imgSrc: '/images/postgresql.png', category: 'Database' },
  { name: 'Three.js', imgSrc: '/images/animate.png', category: 'Frontend' },
  { name: 'Tailwind', imgSrc: '/images/tailwind.svg', category: 'Frontend' },
  { name: 'Framer', imgSrc: '/images/framer.webp', category: 'Frontend' },
  { name: 'GraphQL', imgSrc: '/images/graphql.png', category: 'API' },
  { name: 'Prisma', imgSrc: '/images/prisma.svg', category: 'Database' },
  { name: 'Docker', imgSrc: '/images/docker.svg', category: 'DevOps' },
  { name: 'AWS', imgSrc: '/images/aws.png', category: 'Cloud' },
  { name: 'Figma', imgSrc: '/images/ui-ux.jpg', category: 'Design' },
  { name: 'Redis', imgSrc: '/images/devops.jpg', category: 'Database' },
  { name: 'Vercel', imgSrc: '/images/Vercel-Logo.jpg', category: 'Cloud' },
  { name: 'Jest', imgSrc: '/images/jest.png', category: 'Testing' },
  { name: 'Git', imgSrc: '/images/Git_icon.svg.png', category: 'Tools' },
  { name: 'Github', imgSrc: '/images/github.png', category: 'Tools' },
]

// Ultra-tight grape cluster formation - like real grapes
const clusterPositions = [
  // Tighter overlap for the free state
  { x: 0, y: -24 },
  { x: -16, y: -18 },
  { x: 16, y: -18 },
  { x: -28, y: -8 },
  { x: 28, y: -8 },
  { x: -34, y: 8 },
  { x: 34, y: 8 },
  { x: -26, y: 22 },
  { x: 26, y: 22 },
  { x: -12, y: 30 },
  { x: 12, y: 30 },
  { x: 0, y: 18 },
  { x: -8, y: 2 },
  { x: 8, y: 2 },
  { x: -2, y: 14 },
  { x: -20, y: 10 },
  { x: 20, y: 10 },
  { x: -36, y: -2 },
  { x: 36, y: -2 },
]

const WEB_RING_RADIUS = 182

function getWebNodePosition(index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  return {
    x: Math.cos(angle) * WEB_RING_RADIUS,
    y: Math.sin(angle) * WEB_RING_RADIUS,
  }
}

// Solid matte dark green colors
const grapeColors = [
  '#1a3a1a', // deep forest
  '#1f4a1f', // dark green
  '#154015', // very dark green
  '#1e3f1e', // pine
  '#1a451a', // hunter green
  '#1d3d1d', // dark moss
  '#174217', // deep emerald
]

export default function TechStackSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle click outside to deselect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedTech(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleTechClick = (techName: string) => {
    setSelectedTech(selectedTech === techName ? null : techName)
  }

  const webNodes = selectedTech
    ? stack.filter(t => t.name !== selectedTech).map((tech, i, arr) => ({
        name: tech.name,
        pos: getWebNodePosition(i, arr.length),
      }))
    : []

  // Get position for each tech item
  const getPosition = (index: number, techName: string) => {
    if (selectedTech === techName) {
      return { x: 0, y: 0 }
    } else if (selectedTech) {
      const otherTechs = stack.filter(t => t.name !== selectedTech)
      const otherIndex = otherTechs.findIndex(t => t.name === techName)
      return getWebNodePosition(otherIndex, otherTechs.length)
    } else {
      return clusterPositions[index % clusterPositions.length]
    }
  }

  // Get random matte dark green color for each grape
  const getGrapeColor = (index: number) => {
    return grapeColors[index % grapeColors.length]
  }

  // Get size variation (grapes are slightly different sizes)
  const getGrapeSize = (techName: string, isSelected: boolean, isHovered: boolean) => {
    const baseSize = 94
    if (isSelected) return baseSize + 24
    if (isHovered) return baseSize + 10
    
    // Natural size variation for grapes
    const variation = Math.sin(techName.length) * 4
    return baseSize + variation
  }

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: 'var(--dark)' }}>
      {/* Background text */}
      <div
        className="section-bg-text"
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          fontSize: 'clamp(5rem, 15vw, 14rem)',
          color: '#1a2a1a',
          opacity: 0.5,
          fontWeight: 800,
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
        aria-hidden
      >
        TECH STACK
      </div>

      {/* Simple dark green glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: '#1a3a1a',
            filter: 'blur(120px)',
            opacity: 0.3,
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: '#4ade80',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            Interactive cluster
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.8vw, 3.8rem)',
              fontWeight: 800,
              color: '#f0fdf4',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              maxWidth: '14ch',
            }}
          >
            A bunch of tech,
            <br />
            like grapes on a vine
          </h2>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative h-[650px] sm:h-[700px] md:h-[750px] rounded-3xl bg-[#0a120a] overflow-hidden"
          style={{
            border: '1px solid #1f3a1f',
            boxShadow: 'inset 0 0 30px rgba(0,10,0,0.8), 0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {/* Vine element */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-20 bg-[#2d4a2d] rounded-t-full" 
               style={{ boxShadow: '0 5px 10px rgba(0,0,0,0.5)' }} />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-3 bg-[#2d4a2d] rounded-full" 
               style={{ boxShadow: '0 5px 10px rgba(0,0,0,0.5)' }} />
          
          {/* Grape cluster container */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '550px',
              height: '550px',
            }}
          >
            {selectedTech && (
              <svg
                className="absolute inset-0 pointer-events-none"
                width="550"
                height="550"
                viewBox="0 0 550 550"
                aria-hidden
              >
                {webNodes.map((node) => (
                  <line
                    key={`center-${node.name}`}
                    x1="275"
                    y1="275"
                    x2={275 + node.pos.x}
                    y2={275 + node.pos.y}
                    stroke="rgba(134, 239, 172, 0.32)"
                    strokeWidth="1.6"
                  />
                ))}
                {webNodes.map((node, idx) => {
                  const next = webNodes[(idx + 1) % webNodes.length]
                  return (
                    <line
                      key={`ring-${node.name}`}
                      x1={275 + node.pos.x}
                      y1={275 + node.pos.y}
                      x2={275 + next.pos.x}
                      y2={275 + next.pos.y}
                      stroke="rgba(74, 222, 128, 0.18)"
                      strokeWidth="1.2"
                    />
                  )
                })}
              </svg>
            )}

            <AnimatePresence>
              {stack.map((item, index) => {
                const position = getPosition(index, item.name)
                const isSelected = selectedTech === item.name
                const isHovered = hoveredTech === item.name
                const grapeColor = getGrapeColor(index)
                const grapeSize = getGrapeSize(item.name, isSelected, isHovered)
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: position.x,
                      y: position.y,
                      transition: {
                        type: 'spring',
                        stiffness: 280,
                        damping: 30,
                        delay: inView ? index * 0.02 : 0,
                      }
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      zIndex: isSelected ? 50 : isHovered ? 40 : 10,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleTechClick(item.name)}
                    onHoverStart={() => setHoveredTech(item.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    <motion.div
                      animate={!selectedTech ? {
                        y: [0, -3, 1, -2, 0],
                      } : isSelected ? {
                        y: [0, -5, 2, -3, 0],
                      } : {}}
                      transition={!selectedTech ? {
                        duration: 6 + (index % 3),
                        repeat: Infinity,
                        ease: 'easeInOut',
                      } : isSelected ? {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      } : {}}
                      className="rounded-full flex flex-col items-center justify-center"
                      style={{
                        width: `${grapeSize}px`,
                        height: `${grapeSize}px`,
                        background: grapeColor,
                        border: isSelected 
                          ? '3px solid #86efac' 
                          : isHovered 
                            ? '2px solid #4ade80' 
                            : '1px solid #2d4a2d',
                        boxShadow: isSelected 
                          ? '0 15px 30px rgba(0,30,0,0.8), 0 0 0 4px rgba(74,222,128,0.2)' 
                          : isHovered
                            ? '0 12px 25px rgba(0,25,0,0.7)'
                            : '0 8px 18px rgba(0,15,0,0.6)',
                        transition: 'border 0.2s ease, box-shadow 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0,0,0,0.5)',
                          border: '1px solid #2d4a2d',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <Image
                          src={item.imgSrc}
                          alt={`${item.name} logo`}
                          fill
                          sizes="48px"
                          className="object-cover"
                          style={{
                            filter: 'brightness(1.2) contrast(1.1)',
                          }}
                        />
                      </div>
                      <span
                        style={{
                          marginTop: '0.5rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: isSelected ? '0.7rem' : '0.6rem',
                          fontWeight: isSelected ? 600 : 400,
                          color: '#e2e8f0',
                          textShadow: '0 2px 3px rgba(0,0,0,0.5)',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item.name}
                      </span>
                      
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: '#4ade80',
                            border: '2px solid #0a0f0a',
                          }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Selection info card */}
          <AnimatePresence>
            {selectedTech && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 rounded-xl"
                style={{
                  background: '#0f1a0f',
                  border: '1px solid #1f3a1f',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.7)',
                }}
              >
                <p style={{ color: '#bbf7d0', fontSize: '0.9rem' }}>
                  <span style={{ color: '#4ade80', fontWeight: 600 }}>{selectedTech}</span> selected — click again or outside to rejoin the bunch
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-6 text-sm"
          style={{ color: '#4a6b4a' }}
        >
          Free mode: overlapped grapes • Click a grape for spider-web node view
        </motion.p>
      </div>
    </section>
  )
}