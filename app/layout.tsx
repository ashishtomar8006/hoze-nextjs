import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hoze AI - Your Smart Travel Companion',
  description: 'AI-powered travel recommendations and planning assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}