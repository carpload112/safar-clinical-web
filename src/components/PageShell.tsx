'use client'
import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Compliance from './Compliance'
import Modal from './Modal'
import { CtaContext } from './CtaContext'

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <CtaContext.Provider value={() => setOpen(true)}>
      <Nav />
      <div style={{ paddingTop: 64 }}>
        {children}
      </div>
      <Compliance />
      <Footer />
      <Modal open={open} onClose={() => setOpen(false)} />
    </CtaContext.Provider>
  )
}
