import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NovusScript from '@/components/NovusScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forge Mobile - Dev Tools for Termux',
  description: 'Build software on your phone. No laptop required.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NovusScript />
        {children}
      </body>
    </html>
  )
}
