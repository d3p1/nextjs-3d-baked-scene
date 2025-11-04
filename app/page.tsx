/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import * as THREE from 'three'
import {
  Center,
  Html,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from '@react-three/drei'
import {Canvas, useFrame} from '@react-three/fiber'
import {Suspense, useRef} from 'react'
import {GLTF} from 'three-stdlib'
import '@/app/lib/material'

type Model = GLTF & {
  nodes: {
    scene: THREE.Mesh
    pole1: THREE.Mesh
    pole2: THREE.Mesh
    portal: THREE.Mesh
  }
}

type PortalMaterial = THREE.ShaderMaterial & {uTime: number}

const Loader = () => {
  return (
    <Html center={true}>
      <p>Loading...</p>
    </Html>
  )
}

const Portal = () => {
  const portalRef = useRef<THREE.Mesh<THREE.BufferGeometry, PortalMaterial>>(
    null!,
  )

  useFrame((state) => {
    portalRef.current.material.uTime = state.clock.elapsedTime
  })

  const {nodes} = useGLTF(
    '/nextjs-3d-baked-scene/portal.glb',
  ) as unknown as Model

  const texture = useTexture('/nextjs-3d-baked-scene/portal.jpg')

  return (
    <group>
      <mesh geometry={nodes.scene.geometry} position={nodes.scene.position}>
        <meshBasicMaterial map={texture} map-flipY={false} />
      </mesh>

      <mesh geometry={nodes.pole1.geometry} position={nodes.pole1.position}>
        <meshBasicMaterial color={0xffffff} />
      </mesh>

      <mesh geometry={nodes.pole2.geometry} position={nodes.pole2.position}>
        <meshBasicMaterial color={0xffffff} />
      </mesh>

      <mesh
        geometry={nodes.portal.geometry}
        position={nodes.portal.position}
        rotation={nodes.portal.rotation}
        ref={portalRef}
      >
        <portalShaderMaterial />
      </mesh>
    </group>
  )
}

export default function Page() {
  return (
    <Canvas camera={{position: [1, 1, 4]}} flat={true}>
      <color args={['#232323']} attach="background" />

      <OrbitControls />

      <Suspense fallback={<Loader />}>
        <Center>
          <Portal />
          <Sparkles
            size={2}
            scale={[4, 2, 4]}
            position={[0, 1, 0]}
            speed={0.5}
            count={40}
          />
        </Center>
      </Suspense>
    </Canvas>
  )
}
