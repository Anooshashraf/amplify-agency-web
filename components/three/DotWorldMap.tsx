'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Simplified world map dot coordinates (normalized -1 to 1)
const WORLD_DOTS = [
  // North America
  [-0.9, 0.6], [-0.85, 0.65], [-0.8, 0.7], [-0.75, 0.72], [-0.7, 0.68],
  [-0.85, 0.55], [-0.8, 0.58], [-0.75, 0.62], [-0.7, 0.6], [-0.65, 0.58],
  [-0.8, 0.48], [-0.75, 0.52], [-0.7, 0.5], [-0.65, 0.48], [-0.6, 0.45],
  [-0.75, 0.4], [-0.7, 0.42], [-0.65, 0.38], [-0.6, 0.36], [-0.7, 0.3],
  // South America
  [-0.65, 0.1], [-0.6, 0.08], [-0.62, 0.0], [-0.58, -0.05], [-0.6, -0.15],
  [-0.62, -0.25], [-0.6, -0.35], [-0.58, -0.45], [-0.62, -0.55],
  // Europe
  [-0.1, 0.7], [-0.05, 0.72], [0.0, 0.7], [0.05, 0.68], [0.1, 0.72],
  [-0.05, 0.62], [0.0, 0.65], [0.05, 0.62], [0.1, 0.65], [0.15, 0.62],
  [0.0, 0.55], [0.05, 0.58], [0.1, 0.55], [0.15, 0.58],
  // Africa
  [-0.05, 0.4], [0.0, 0.42], [0.05, 0.4], [0.1, 0.42],
  [-0.02, 0.3], [0.02, 0.32], [0.08, 0.3], [0.05, 0.22],
  [0.0, 0.15], [0.05, 0.12], [0.02, 0.05], [0.05, -0.05],
  // Asia
  [0.2, 0.65], [0.3, 0.7], [0.4, 0.68], [0.5, 0.65], [0.6, 0.62],
  [0.25, 0.58], [0.35, 0.62], [0.45, 0.6], [0.55, 0.58], [0.65, 0.55],
  [0.3, 0.5], [0.4, 0.52], [0.5, 0.5], [0.6, 0.48], [0.7, 0.45],
  [0.35, 0.4], [0.45, 0.42], [0.55, 0.4], [0.65, 0.38],
  [0.4, 0.3], [0.5, 0.32], [0.6, 0.3], [0.7, 0.28],
  // Australia
  [0.6, -0.2], [0.65, -0.18], [0.7, -0.2], [0.65, -0.28], [0.62, -0.32],
  // Japan
  [0.75, 0.55], [0.78, 0.52], [0.76, 0.48],
]

function WorldDots() {
  const meshRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Points>(null)

  const { positions, glowPositions } = useMemo(() => {
    const pos: number[] = []
    const glowPos: number[] = []

    WORLD_DOTS.forEach(([nx, ny]) => {
      // Convert normalized to 3D on a flat-ish curved surface
      const x = nx * 5
      const y = ny * 3
      const z = 0
      pos.push(x, y, z)

      // Add surrounding glow dots
      for (let i = 0; i < 3; i++) {
        glowPos.push(
          x + (Math.random() - 0.5) * 0.3,
          y + (Math.random() - 0.5) * 0.3,
          z + (Math.random() - 0.5) * 0.3
        )
      }
    })

    return {
      positions: new Float32Array(pos),
      glowPositions: new Float32Array(glowPos),
    }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.1) * 0.05
    }
  })

  return (
    <group ref={meshRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#22c55e"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
      <points ref={glowRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[glowPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#f5ead0"
          transparent
          opacity={0.15}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export default function DotWorldMap({ className = '' }: { className?: string }) {
  return (
    <div className={className} style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <WorldDots />
      </Canvas>
    </div>
  )
}
