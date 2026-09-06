import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guardia La Realeza | Honor y Elegancia para tu Evento en Lima',
  description:
    'Guardia de honor profesional con 13 años de experiencia. Cruce de espadas para 15 años, promociones escolares, bodas y eventos sociales en todo Lima. Cotiza por WhatsApp.',
  keywords: [
    'guardia de honor',
    'cruce de espadas',
    'quinceañera',
    '15 años',
    'promociones escolares',
    'bodas',
    'Lima',
    'chambelán',
    'protocolo de 15 años',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Guardia La Realeza | Honor y Elegancia para tu Evento',
    description:
      '13 años dando honor a los eventos más importantes de Lima. Cruce de espadas para 15 años, promociones y bodas.',
    type: 'website',
    locale: 'es_PE',
    images: ['/images/hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0908',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
