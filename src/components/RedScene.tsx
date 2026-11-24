import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function Scene({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null)
  const ring = useRef<Mesh>(null)
  const torus = useRef<Mesh>(null)
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
    const t = state.clock.elapsedTime
    if (group.current && !reduced) {
      group.current.rotation.y = t * 0.18 + target.current.x * 0.25
      group.current.rotation.x =
        Math.sin(t * 0.3) * 0.12 + target.current.y * -0.2
      group.current.position.x +=
        (target.current.x * 0.4 - group.current.position.x) * 0.045
      group.current.position.y +=
        (target.current.y * -0.3 - group.current.position.y) * 0.045
    }
    if (ring.current) ring.current.rotation.z = t * 0.35
    if (torus.current) {
      torus.current.rotation.x = t * 0.22
      torus.current.rotation.y = -t * 0.18
    }
  })

  const sparks = useMemo(() => (reduced ? 10 : 36), [reduced])

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-3, 2, 2]} intensity={2.2} color="#e10600" />
      <pointLight position={[3, -2, -2]} intensity={1.1} color="#ff4d45" />

      <Float
        speed={reduced ? 0 : 1.4}
        rotationIntensity={reduced ? 0 : 0.45}
        floatIntensity={reduced ? 0 : 0.7}
      >
        <group ref={group} position={[1.35, 0.15, 0]} scale={0.92}>
          <mesh>
            <icosahedronGeometry args={[1.05, 1]} />
            <MeshDistortMaterial
              color="#1a0505"
              distort={reduced ? 0.06 : 0.22}
              speed={reduced ? 0.3 : 1.2}
              roughness={0.2}
              metalness={0.85}
              emissive="#e10600"
              emissiveIntensity={0.18}
            />
          </mesh>

          <mesh ref={ring} scale={1.35}>
            <torusGeometry args={[1.15, 0.015, 16, 100]} />
            <meshStandardMaterial
              color="#e10600"
              emissive="#e10600"
              emissiveIntensity={0.7}
              metalness={0.9}
              roughness={0.25}
            />
          </mesh>

          <mesh ref={torus} rotation={[Math.PI / 3, 0.4, 0]} scale={1.1}>
            <torusGeometry args={[1.45, 0.01, 12, 80]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#e10600"
              emissiveIntensity={0.25}
              metalness={0.8}
              roughness={0.3}
              transparent
              opacity={0.55}
            />
          </mesh>

          <Sparkles
            count={sparks}
            scale={4.2}
            size={2.2}
            speed={reduced ? 0.1 : 0.35}
            color="#e10600"
            opacity={0.55}
          />
        </group>
      </Float>
    </>
  )
}

export function RedScene() {
  const reduced = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (reduced) return
    const id = window.setTimeout(() => setReady(true), 60)
    return () => window.clearTimeout(id)
  }, [reduced])

  if (!ready) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-65">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  )
}
