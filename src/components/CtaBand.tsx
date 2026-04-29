'use client'
import { useOpenCta } from './CtaContext'

export default function CtaBand() {
  const openCta = useOpenCta()
  return (
    <section style={{ padding: '120px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', width: 540, height: 540, opacity: 0.07, pointerEvents: 'none' }}/>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 72, alignItems: 'end' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand)' }}>— A CALL, NOT A DEMO</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '-0.045em', lineHeight: 0.92, fontSize: 'clamp(52px,6.5vw,96px)', margin: '20px 0 0', color: 'var(--forest)' }}>
            Let&apos;s <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>talk.</span>
          </h2>
        </div>
        <div style={{ paddingBottom: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <button onClick={openCta} style={{ background: 'none', border: 0, padding: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 24, letterSpacing: '-0.02em', color: 'var(--forest)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: '0.5px' }}>Request a walkthrough →</button>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>— OR EMAIL HELLO@SAFAR.CLINICAL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
