const quotes = [
  {
    q: 'The match list on day seven was longer than the one our CRO had delivered at month four. It completely rearranged our conversation with the sites.',
    name: 'Dr. Marianne Okafor, MD, MPH',
    role: 'SVP, Clinical Development',
    org: 'TOP-10 ONCOLOGY SPONSOR',
  },
  {
    q: "What I liked most is that I didn't have to log into anything new. The match appeared in the chart, in the place I already work. Accept, defer, decline — that's it.",
    name: 'Dr. Jun Watanabe',
    role: 'Principal Investigator · Thoracic Oncology',
    org: 'ACADEMIC MEDICAL CENTER · NY',
  },
]

export default function Testimonials() {
  return (
    <section
      className="sf-section ts-pad"
      data-theme="dark"
      style={{
        padding: '80px 32px',
        background: 'var(--forest)',
        color: 'var(--cream)',
        borderBottom: '0.5px solid rgba(241,239,232,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 860px) {
          .ts-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .ts-card { padding: 0 !important; border-right: none !important; padding-bottom: 40px !important; }
          .ts-card:last-child { padding-top: 40px !important; padding-bottom: 0 !important; border-top: 0.5px solid rgba(241,239,232,0.14) !important; }
          .ts-quote { font-size: 24px !important; }
        }
      `}</style>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/compass-rose.svg"
        alt=""
        aria-hidden
        className="sf-bg-compass"
        style={{
          position: 'absolute',
          right: -140,
          bottom: -200,
          width: 540,
          height: 540,
          opacity: 0.05,
          pointerEvents: 'none',
          filter: 'brightness(2.5)',
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          paddingBottom: 28,
          borderBottom: '0.5px solid rgba(241,239,232,0.14)',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lime)' }}>— REAL RESULTS · REAL VOICES</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--sage-soft)' }}>2 OF 14 · MORE ON REQUEST</span>
      </div>

      <div
        className="ts-grid"
        style={{
          position: 'relative',
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}
      >
        {quotes.map((t, i) => (
          <figure
            key={t.name}
            className="ts-card"
            style={{
              margin: 0,
              padding: i === 0 ? '0 48px 0 0' : '0 0 0 48px',
              borderRight: i === 0 ? '0.5px solid rgba(241,239,232,0.14)' : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 0.6, color: 'var(--lime)', marginBottom: 12, opacity: 0.8 }}>“</span>
            <blockquote
              className="ts-quote"
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                fontSize: 30,
                color: 'var(--cream)',
              }}
            >
              {t.q}
            </blockquote>
            <figcaption style={{ marginTop: 'auto', paddingTop: 32 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '-0.02em', color: 'var(--cream)' }}>{t.name}</div>
              <div style={{ marginTop: 4, fontSize: 12, color: '#C9D4BF' }}>{t.role}</div>
              <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--lime)' }}>— {t.org}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
