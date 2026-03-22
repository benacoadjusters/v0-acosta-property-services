import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { company } from '@/content/company'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Professional Pest Control in Puerto Rico`,
    template: `%s | ${company.name}`
  },
  description: company.description,
  keywords: [
    "pest control",
    "fumigation",
    "termite control",
    "rodent control",
    "Puerto Rico",
    "exterminator",
    "residential pest control",
    "commercial pest control"
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: company.name,
    title: `${company.name} | Professional Pest Control in Puerto Rico`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Professional Pest Control in Puerto Rico`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
