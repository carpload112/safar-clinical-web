'use client'
import { useEffect } from 'react'

export default function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(17,74,19,0.78)', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(8px)', padding: 20
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'var(--cream)', width: 560, maxWidth: '100%',
        padding: 40, border: '0.5px solid var(--border)'
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>— REQUEST A WALKTHROUGH</span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, letterSpacing: '-0.04em', margin: '14px 0 28px', lineHeight: 1.02, color: 'var(--forest)' }}>
          Tell us about <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>the study.</span>
        </h3>
        <div style={{ display: 'grid', gap: 20 }}>
          {(['WORK EMAIL', 'ORGANIZATION', 'THERAPEUTIC AREA'] as const).map((l) => {
            const placeholders: Record<string, string> = {
              'WORK EMAIL': 'a.patel@sponsor.com',
              'ORGANIZATION': 'Top-10 sponsor, CRO, or site',
              'THERAPEUTIC AREA': 'e.g. oncology, rare disease',
            }
            return (
              <label key={l} style={{ display: 'grid', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)' }}>— {l}</span>
                <input placeholder={placeholders[l]} style={{ font: '400 16px var(--font-body)', padding: '8px 0', border: 0, borderBottom: '0.5px solid var(--forest)', background: 'transparent', outline: 'none', color: 'var(--forest)' }}/>
              </label>
            )
          })}
        </div>
        <div style={{ marginTop: 36, display: 'flex', gap: 24, justifyContent: 'flex-end', alignItems: 'center' }}>
          <button onClick={onClose} style={{ background: 'none', border: 0, fontSize: 13, color: 'var(--fg-3)', cursor: 'pointer' }}>Cancel</button>
          <button onClick={onClose} style={{ background: 'none', border: 0, fontSize: 14, color: 'var(--brand)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 5, textDecorationThickness: '0.5px' }}>Send request →</button>
        </div>
      </div>
    </div>
  )
}
