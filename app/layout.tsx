/**
 * @description Layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js | 3D Baked Scene',
  description: '3D baked scene with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen grid place-items-center text-white">
        {children}
      </body>
    </html>
  )
}
