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
import AuthProviders from '@/components/AuthProviders'
import { getServerSession } from 'next-auth'
import { addUser } from '@/lib/db'
import { sendWelcomeEmail } from '@/lib/email'
import DashboardHeader from '@/components/DashboardHeader'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${aldrich.variable} ${inter.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col">
          
            <AuthProviders session={session} addUser={addUser} sendWelcomeEmai={sendWelcomeEmail}>
              <DashboardHeader />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </AuthProviders>
        </div>
      </body>
    </html>
  )
}
