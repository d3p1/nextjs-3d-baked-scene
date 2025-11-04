import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-3d-baked-scene',
  turbopack: {
    rules: {
      '*.glsl': {
        loaders: ['raw-loader', 'glslify-loader'],
        as: '*.js',
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
}

export default nextConfig
