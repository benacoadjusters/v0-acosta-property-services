import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
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
    default: `${company.name} | Control de Plagas Profesional en Puerto Rico`,
    template: `%s | ${company.name}`
  },
  description: "Servicios profesionales de control de plagas para hogares y negocios en todo Puerto Rico. Mas de 300 clientes satisfechos.",
  keywords: [
    "control de plagas",
    "fumigacion",
    "control de termitas",
    "control de roedores",
    "Puerto Rico",
    "exterminador",
    "plagas residencial",
    "plagas comercial"
  ],
  authors: [{ name: company.name }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    siteName: company.name,
    title: `${company.name} | Control de Plagas Profesional en Puerto Rico`,
    description: "Servicios profesionales de control de plagas para hogares y negocios en todo Puerto Rico.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#5B8A7A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          <SiteHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
