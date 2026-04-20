export default function PageHeader({ eyebrow, title, italic, sub }: { eyebrow: string; title: string; italic: string; sub?: string }) {
  return (
    <section style={{ padding: '72px 32px 56px', borderBottom: '0.5px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position: 'absolute', right: -180, top: -140, width: 560, height: 560, opacity: 0.05, pointerEvents: 'none' }}/>
      <div style={{ position: 'relative', maxWidth: 1200 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, letterSpacing: '-0.045em', lineHeight: 0.95, fontSize: 'clamp(56px,8vw,112px)', margin: '18px 0 24px', color: 'var(--forest)' }}>
          {title} <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>{italic}</span>
        </h1>
        {sub && <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: '58ch' }}>{sub}</p>}
      </div>
    </section>
  )
}
