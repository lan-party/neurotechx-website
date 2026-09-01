import type { Metadata } from 'next'
import { Inter, Aldrich } from 'next/font/google'
import '../globals.css'

const aldrich = Aldrich({ weight: '400', subsets: ['latin'], variable: '--font-sans' })
const inter = Inter({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'NeuroTechX',
  description: 'The global community for neurotechnology.',
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${aldrich.variable} ${inter.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
