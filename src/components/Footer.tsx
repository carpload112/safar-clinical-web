import Link from 'next/link'

const cols = [
  ['Product', [['Method','/method']]],
  ['For', [['Sponsors','/for-sponsors'],['Sites','/for-sites'],['Physicians','/for-physicians']]],
] as const

export default function Footer() {
  return (
    <footer style={{ padding: '80px 32px 40px', background: 'var(--forest)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position: 'absolute', right: -200, bottom: -340, width: 640, height: 640, opacity: 0.05, pointerEvents: 'none', filter: 'brightness(2.5)' }}/>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 48, paddingBottom: 48, borderBottom: '0.5px solid rgba(241,239,232,0.14)', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 460 }}>
          <img src="https://2azfdphehc8ufmtf.public.blob.vercel-storage.com/Safar%20Clinical%20logo.png" alt="Safar Clinical" style={{ height: 54, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}/>
          <div style={{ marginTop: 32, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: 32, letterSpacing: '-0.03em', lineHeight: 1.22, color: 'var(--cream)' }}>
            The patients already exist.<br/><span style={{ color: 'var(--lime)' }}>We just find them first.</span>
          </div>
          <p style={{ marginTop: 32, fontSize: 13, lineHeight: 1.6, color: '#C9D4BF', maxWidth: '40ch' }}>
            Safar Clinical reads the record where care actually happens. Pharma sponsors, CROs, and sites run studies; we find the patients they&apos;d otherwise miss.
          </p>
        </div>
        <div style={{ minWidth: 320, maxWidth: 380 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--lime)' }}>— DISPATCH · QUARTERLY LETTER</span>
          <p style={{ marginTop: 14, fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--cream)' }}>
            A short letter on trial enrollment. Read by ~4,000 CMOs and research operations leads.
          </p>
          <form onSubmit={e => e.preventDefault()} style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 0, borderBottom: '0.5px solid rgba(241,239,232,0.3)', paddingBottom: 8 }}>
            <input placeholder="work email" style={{ flex: 1, background: 'transparent', border: 0, outline: 0, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--cream)', padding: '4px 0' }}/>
            <button type="submit" style={{ background: 'transparent', border: 0, cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--lime)' }}>SUBSCRIBE →</button>
          </form>
          <div style={{ marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--sage-soft)' }}>· NO SPAM · UNSUBSCRIBE ANY TIME</div>
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', gap: 80, paddingTop: 56, flexWrap: 'wrap' }}>
        {cols.map(([title, items]) => (
          <div key={title}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 18 }}>— {title}</div>
            {items.map(([label, href]) => (
              <Link key={label} href={href} style={{ display: 'block', fontSize: 13, color: 'var(--cream)', padding: '6px 0', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: 'relative', marginTop: 64, paddingTop: 24, borderTop: '0.5px solid rgba(241,239,232,0.14)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--sage-soft)' }}>
        <span>— SAFAR CLINICAL, INC · 2026</span>
        <span>PRIVACY · TERMS · BAA · DISCLOSURE</span>
      </div>
    </footer>
  )
}
