import {
  ContactShadows,
  Float,
  MeshDistortMaterial,
  Sparkles,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { DoubleSide, type Group, type Mesh } from 'three'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function Scene({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null)
  const knot = useRef<Mesh>(null)
  const ringA = useRef<Mesh>(null)
  const ringB = useRef<Mesh>(null)
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    if (!reduced) {
      group.current.rotation.y = t * 0.22 + target.current.x * 0.35
      group.current.rotation.x =
        Math.sin(t * 0.35) * 0.18 + target.current.y * -0.28
      group.current.position.x +=
        (target.current.x * 0.35 - group.current.position.x) * 0.04
      group.current.position.y +=
        (target.current.y * -0.25 - group.current.position.y) * 0.04
    }
    if (knot.current) {
      knot.current.rotation.z = t * 0.15
    }
    if (ringA.current) {
      ringA.current.rotation.x = t * 0.4
      ringA.current.rotation.y = t * 0.25
    }
    if (ringB.current) {
      ringB.current.rotation.z = -t * 0.35
      ringB.current.rotation.x = t * 0.2
    }
  })

  const sparkles = useMemo(() => (!reduced ? 48 : 12), [reduced])

  return (
    <>
      <color attach="background" args={['#00000000']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 2]} intensity={1.4} color="#ffe8ff" />
      <pointLight position={[-4, -2, -3]} intensity={1.7} color="#ff7ab8" />
      <pointLight position={[3, -1, 4]} intensity={1.4} color="#57e2ff" />
      <pointLight position={[0, 3, -2]} intensity={0.9} color="#a78bfa" />

      <Float
        speed={reduced ? 0 : 1.6}
        rotationIntensity={reduced ? 0 : 0.55}
        floatIntensity={reduced ? 0 : 0.85}
      >
        <group ref={group}>
          <mesh>
            <icosahedronGeometry args={[1.05, 1]} />
            <MeshDistortMaterial
              color="#1a1240"
              attach="material"
              distort={reduced ? 0.08 : 0.28}
              speed={reduced ? 0.4 : 1.4}
              roughness={0.16}
              metalness={0.88}
              emissive="#4c1d95"
              emissiveIntensity={0.45}
            />
          </mesh>

          <mesh scale={1.18}>
            <icosahedronGeometry args={[1.05, 0]} />
            <meshBasicMaterial
              color="#ff7ab8"
              wireframe
              transparent
              opacity={0.34}
            />
          </mesh>

          <mesh ref={knot} scale={0.42} position={[0, 0, 0]}>
            <torusKnotGeometry args={[0.55, 0.14, 128, 16]} />
            <meshStandardMaterial
              color="#57e2ff"
              metalness={0.9}
              roughness={0.18}
              emissive="#57e2ff"
              emissiveIntensity={0.4}
            />
          </mesh>

          <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.3, 0]}>
            <torusGeometry args={[1.55, 0.015, 16, 100]} />
            <meshBasicMaterial color="#57e2ff" transparent opacity={0.55} />
          </mesh>
          <mesh ref={ringB} rotation={[0.4, Math.PI / 3, 0.2]}>
            <torusGeometry args={[1.75, 0.01, 16, 120]} />
            <meshBasicMaterial color="#ff7ab8" transparent opacity={0.4} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.95, 2.02, 64]} />
            <meshBasicMaterial
              color="#a78bfa"
              transparent
              opacity={0.35}
              side={DoubleSide}
            />
          </mesh>

          <mesh position={[1.45, 0.55, 0.3]}>
            <sphereGeometry args={[0.12, 24, 24]} />
            <meshStandardMaterial
              color="#ff7ab8"
              emissive="#ff7ab8"
              emissiveIntensity={1}
            />
          </mesh>
          <mesh position={[-1.25, -0.7, 0.45]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#a78bfa"
              emissiveIntensity={0.95}
            />
          </mesh>
          <mesh position={[0.9, -1.1, 0.2]}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial
              color="#57e2ff"
              emissive="#57e2ff"
              emissiveIntensity={0.8}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        </group>
      </Float>

      <Sparkles
        count={sparkles}
        scale={4.2}
        size={2.4}
        speed={reduced ? 0.1 : 0.45}
        opacity={0.65}
        color="#57e2ff"
      />

      <ContactShadows
        position={[0, -1.7, 0]}
        opacity={0.5}
        scale={9}
        blur={2.8}
        far={3.2}
        color="#000000"
      />
    </>
  )
}

function CssFallback() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-champagne/40 via-orchid/25 to-ice/20 blur-3xl" />
      <div className="absolute inset-[22%] rounded-full border border-orchid/35 bg-gradient-to-br from-elevated via-panel to-ink" />
      <div className="absolute inset-[30%] animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-ice/40" />
      <div className="absolute top-[28%] right-[20%] size-3 rounded-full bg-champagne" />
      <div className="absolute bottom-[32%] left-[22%] size-2 rounded-full bg-ice" />
    </div>
  )
}

export function AiOrb() {
  const reduced = usePrefersReducedMotion()
  const [webglOk, setWebglOk] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebglOk(Boolean(gl))
    } catch {
      setWebglOk(false)
    }
  }, [])

  if (!webglOk) return <CssFallback />

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.15, 3.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        aria-label="Interactive 3D sculpture"
        role="img"
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} />
        </Suspense>
      </Canvas>
      <noscript>
        <CssFallback />
      </noscript>
    </div>
  )
}
