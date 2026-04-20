import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Safar Clinical — trial enrollment, resolved', template: '%s — Safar Clinical' },
  description: 'Safar reads Epic, Cerner and FHIR endpoints to identify trial-eligible patients at the moment of clinical decision.',
  icons: { icon: 'https://2azfdphehc8ufmtf.public.blob.vercel-storage.com/SafarClinical%20Favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
