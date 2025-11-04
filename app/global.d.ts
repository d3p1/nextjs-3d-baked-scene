/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {PortalShaderMaterial} from '@/app/lib/material'
import {ThreeElement} from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    portalShaderMaterial: ThreeElement<typeof PortalShaderMaterial>
  }
}
