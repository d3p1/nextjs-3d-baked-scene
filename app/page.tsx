/**
 * @description Page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Gltf, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

const Room = () => {
  return <Gltf src="/nextjs-3d-baked-scene/room.baked.glb" />
}

export default function Page() {
  return (
    <Canvas camera={{position: [1, 1, 1]}}>
      <OrbitControls maxPolarAngle={Math.PI / 3} />
      <Room />
    </Canvas>
  )
}
