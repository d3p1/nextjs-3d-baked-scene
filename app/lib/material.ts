/**
 * @description Portal material
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import portalFragmentShader from '@/app/lib/shader/portal/fragment.glsl'
import portalVertexShader from '@/app/lib/shader/portal/vertex.glsl'
import {shaderMaterial} from '@react-three/drei'
import {extend} from '@react-three/fiber'
import * as THREE from 'three'

export const PortalShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color(0xffffff),
    uColorEnd: new THREE.Color(0x000000),
  },
  portalVertexShader,
  portalFragmentShader,
)
extend({PortalShaderMaterial})
