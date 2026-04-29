const pillars = [
  {
    n: '01',
    title: 'Find patients where they already are.',
    body: 'No mailers, no registry farms, no cold outreach. Safar reads structured fields and free-text notes across the live EHR, so the patients you need appear in the chart — not in a marketing funnel.',
    k: 'IN THE RECORD',
  },
  {
    n: '02',
    title: "Qualified before they're surfaced.",
    body: 'Every match is pre-screened against inclusion, exclusion, prior therapy, labs, and longitudinal signals. Screen-fail rates drop from 26% to 8% because the filter runs upstream of the conversation.',
    k: 'PRE-QUALIFIED',
  },
  {
    n: '03',
    title: 'Live analytics — no waiting for weekly reports.',
    body: 'Sponsors, CROs and sites see the same live view: matches surfaced, accepted, routed to consent, and enrolled. Every decision is auditable to the criterion it hit and the source it was drawn from.',
    k: 'LIVE · AUDITABLE',
  },
]

export default function WhyThree() {
  return (
    <section className="sf-section wt-pad" style={{ padding: '80px 32px', borderBottom: '0.5px solid var(--border)' }}>
      <style>{`
        @media (max-width: 860px) {
          .wt-grid { grid-template-columns: 1fr !important; }
          .wt-cell { padding: 36px 0 !important; border-right: none !important; border-top: 0.5px solid var(--border); min-height: 0 !important; }
          .wt-cell:first-child { border-top: none !important; }
        }
        @media (max-width: 640px) {
          .wt-cell { padding: 28px 0 !important; }
          .wt-cell h3 { font-size: 24px !important; }
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 28, borderBottom: '0.5px solid var(--border)', gap: 16, flexWrap: 'wrap' }}>
        <span className="sf-eyebrow" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>— WHY SAFAR</span>
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, letterSpacing: '-0.025em', color: 'var(--forest)' }}>
          Full patient management platform. Identification, enrollment, and management.
        </span>
      </div>
      <div
        className="wt-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 0,
          marginTop: 0,
        }}
      >
        {pillars.map((p, i) => {
          const words = p.title.split(' ')
          const last = words.slice(-1).join(' ')
          const head = words.slice(0, -1).join(' ')
          return (
            <div
              key={p.n}
              className="wt-cell"
              style={{
                padding: '48px 36px 36px',
                borderRight: i < 2 ? '0.5px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 360,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--brand)' }}>— {p.n}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.16em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>{p.k}</span>
              </div>
              <h3
                className="sf-h3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.04,
                  fontSize: 30,
                  margin: 0,
                  color: 'var(--forest)',
                }}
              >
                {head}{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>{last}</span>
              </h3>
              <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)', flex: 1 }}>{p.body}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
