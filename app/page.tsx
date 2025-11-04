/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Gltf, Html, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'

const Loader = () => {
  return (
    <Html center={true}>
      <p>Loading...</p>
    </Html>
  )
}

const Portal = () => {
  return <Gltf src="/nextjs-3d-baked-scene/portal.glb" />
}

export default function Page() {
  return (
    <Canvas camera={{position: [1, 1, 4]}}>
      <OrbitControls maxPolarAngle={Math.PI / 3} />
      <Suspense fallback={<Loader />}>
        <Portal />
      </Suspense>
    </Canvas>
  )
}
