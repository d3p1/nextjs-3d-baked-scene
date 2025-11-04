import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-3d-baked-scene',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })
  },
}

export default nextConfig
