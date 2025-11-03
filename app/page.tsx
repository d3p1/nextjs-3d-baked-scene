/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Html, OrbitControls, useGLTF} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'

const Loader = () => {
  return (
    <Html center={true}>
      <p>Loading...</p>
    </Html>
  )
}

const Room = () => {
  const model = useGLTF('/nextjs-3d-baked-scene/room.baked.glb')
  return <primitive object={model.scene} />
}

export default function Page() {
  return (
    <Canvas camera={{position: [1, 1, 1]}}>
      <OrbitControls maxPolarAngle={Math.PI / 3} />
      <Suspense fallback={<Loader />}>
        <Room />
      </Suspense>
    </Canvas>
  )
}
