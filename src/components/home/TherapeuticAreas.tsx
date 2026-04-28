const areas: Array<[string, string]> = [
  ['Oncology', '◉'],
  ['Cardiology', '♡'],
  ['Rare disease', '✦'],
  ['Hematology', '◆'],
  ['Neurology · CNS', '◎'],
  ['Immunology', '⬡'],
  ['Endocrinology', '◈'],
  ['Dermatology', '△'],
  ['Nephrology', '◐'],
  ['Infectious dis.', '✧'],
  ['Mental health', '◇'],
  ['Respiratory', '◍'],
]

export default function TherapeuticAreas() {
  return (
    <section
      className="sf-section ta-pad"
      style={{
        padding: '96px 32px',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <style>{`
        .ta-cell:hover { background: var(--cream) !important; }
        @media (max-width: 1024px) {
          .ta-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .ta-grid > .ta-cell:nth-child(3n) { border-right: none !important; }
          .ta-grid > .ta-cell:not(:nth-child(3n)) { border-right: 0.5px solid var(--border) !important; }
          .ta-grid > .ta-cell { border-bottom: 0.5px solid var(--border) !important; }
          .ta-grid > .ta-cell:nth-last-child(-n+3) { border-bottom: none !important; }
        }
        @media (max-width: 760px) {
          .ta-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ta-grid > .ta-cell { border-right: none !important; border-bottom: 0.5px solid var(--border) !important; padding: 22px 16px !important; min-height: 120px !important; }
          .ta-grid > .ta-cell:nth-child(odd) { border-right: 0.5px solid var(--border) !important; }
          .ta-grid > .ta-cell:nth-last-child(-n+2) { border-bottom: none !important; }
        }
        @media (max-width: 640px) {
          .ta-head .sf-h2 { font-size: 32px !important; }
          .ta-grid > .ta-cell > div > div:first-child { font-size: 16px !important; }
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 28, borderBottom: '0.5px solid var(--border)', gap: 16, flexWrap: 'wrap' }}>
        <span className="sf-eyebrow" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand)' }}>— SUCCESS ACROSS THERAPEUTIC AREAS</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>Q1 2026 · LIVE</span>
      </div>

      <div className="ta-head" style={{ paddingTop: 32, paddingBottom: 40, maxWidth: 820 }}>
        <h2
          className="sf-h2"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 0.98,
            fontSize: 'clamp(36px,5vw,56px)',
            margin: 0,
            color: 'var(--forest)',
          }}
        >
          The record reads the same{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>in every specialty.</span>
        </h2>
        <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: '56ch' }}>
          Safar is trained on the clinical vocabulary of each therapeutic area — oncology genomics, rare-disease phenotypes, cardiology imaging notes, CNS rating scales. The engine is the same; the criteria change.
        </p>
      </div>

      <div
        className="ta-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '0.5px solid var(--border)',
        }}
      >
        {areas.map((a, i) => (
          <a
            key={a[0]}
            className="ta-cell"
            style={{
              padding: '28px 24px',
              borderRight: (i + 1) % 4 !== 0 ? '0.5px solid var(--border)' : 'none',
              borderBottom: i < areas.length - 4 ? '0.5px solid var(--border)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              textDecoration: 'none',
              color: 'var(--forest)',
              cursor: 'pointer',
              transition: 'background 200ms var(--ease)',
              minHeight: 160,
            }}
          >
            <span style={{ fontSize: 28, color: 'var(--brand)', opacity: 0.7, fontFamily: 'var(--font-display)' }}>{a[1]}</span>
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: '-0.025em', lineHeight: 1.15, color: 'var(--forest)' }}>{a[0]}</div>
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>
          — 50+ PROTOCOLS · 312 SITES · 28 HEALTH SYSTEMS
        </span>
        <a
          href="/studies"
          style={{
            fontSize: 13,
            color: 'var(--brand)',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            textDecorationThickness: '0.5px',
          }}
        >
          See all studies →
        </a>
      </div>
    </section>
  )
}
