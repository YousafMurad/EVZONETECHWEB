import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContextTemp'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://evzonetech.com'),
  title: 'Evzone Tech',
  description: 'Leading provider of software quality assurance, testing solutions, and end-to-end development services. Expert QA testing for functional, automation, API, mobile, and security testing.',
  keywords: 'QA testing, software testing, quality assurance, automation testing, manual testing, API testing, mobile testing, security testing',
  authors: [{ name: 'EvZone Tech' }],
  creator: 'EvZone Tech',
  publisher: 'EvZone Tech',
  
  // Add icons configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
  },
  
  openGraph: {
    title: 'Evzone Tech',
    description: 'Leading provider of software quality assurance and testing solutions.',
    url: 'https://evzonetech.com',
    siteName: 'EvZone Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evzone Tech',
    description: 'Leading provider of software quality assurance and testing solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add this direct link tag */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

