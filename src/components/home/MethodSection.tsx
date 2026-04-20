const steps = [
  {
    num: '01',
    title: 'Read',
    detail: 'Safar connects directly to Epic, Cerner, athenahealth, and any FHIR R4 endpoint. No chart pulls, no manual exports. The connection is read-only, fully audited, and operates inside the hospital\'s existing security perimeter.',
  },
  {
    num: '02',
    title: 'Match',
    detail: 'Our protocol parser converts inclusion/exclusion criteria into structured clinical queries. The Matcher scores every eligible patient against every active study in real time — across diagnoses, labs, vitals, medications, and prior procedures.',
  },
  {
    num: '03',
    title: 'Route',
    detail: 'A match surfaces as a single row inside the treating clinician\'s existing chart view. No new portal. No separate login. The right patient, in front of the right team, at the moment the decision is live.',
  },
]

export default function MethodSection() {
  return (
    <section style={{ padding: '80px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>— HOW IT WORKS</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,54px)', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '16px 0 20px', color: 'var(--forest)' }}>
            Enrollment as a <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>routing problem.</span>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: '32ch' }}>
            Not a marketing problem. Not a referral network problem. The patients exist — the system just hasn&apos;t connected them to the study yet.
          </p>
        </div>
        <div>
          {steps.map((s, i) => (
            <div
              key={s.num}
              style={{
                display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24,
                padding: '28px 0',
                borderBottom: i < steps.length - 1 ? '0.5px solid var(--border)' : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--fg-3)', paddingTop: 4 }}>{s.num}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.03em', color: 'var(--forest)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--fg-2)' }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
