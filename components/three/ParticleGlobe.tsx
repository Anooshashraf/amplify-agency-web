'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleSphere({
  count = 3000,
  radius = 2.8,
  color = '#22c55e',
  secondaryColor = '#f5ead0',
}: {
  count?: number
  radius?: number
  color?: string
  secondaryColor?: string
}) {
  const meshRef = useRef<THREE.Points>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const { positions, colors } = useMemo(() => {
    const pos: number[] = []
    const col: number[] = []
    const greenColor = new THREE.Color(color)
    const creamColor = new THREE.Color(secondaryColor)

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution for even spacing
      const phi = Math.acos(1 - (2 * i) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      // Add slight randomness
      const r = radius * (0.92 + Math.random() * 0.16)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      pos.push(x, y, z)

      // Color: mix green and cream based on position
      const mixFactor = (y / radius + 1) * 0.5
      const c = greenColor.clone().lerp(creamColor, mixFactor * 0.6)
      col.push(c.r, c.g, c.b)
    }

    return {
      positions: new Float32Array(pos),
      colors: new Float32Array(col),
    }
  }, [count, radius, color, secondaryColor])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime

    // Auto rotation
    meshRef.current.rotation.y = t * 0.06
    meshRef.current.rotation.x = Math.sin(t * 0.04) * 0.15

    // Subtle mouse influence
    meshRef.current.rotation.y += mouse.current.x * 0.003
    meshRef.current.rotation.x += mouse.current.y * 0.002

    // Breathing scale
    const scale = 1 + Math.sin(t * 0.5) * 0.02
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function AmbientParticles({ count = 300 }) {
  const meshRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos: number[] = []
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14
      )
    }
    return new Float32Array(pos)
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.01
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.005
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#22c55e"
        transparent
        opacity={0.2}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleGlobe({
  className = '',
  particleCount = 3000,
}: {
  className?: string
  particleCount?: number
}) {
  return (
    <div className={`canvas-container ${className}`} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <ParticleSphere count={particleCount} />
        <AmbientParticles count={250} />
      </Canvas>
    </div>
  )
}
