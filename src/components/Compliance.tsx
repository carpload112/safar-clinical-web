const items = [
  ['HIPAA', 'BAA'],
  ['SOC 2', 'TYPE II'],
  ['21 CFR · PART 11', 'E\u2011RECORDS'],
  ['HITRUST', 'CSF'],
  ['GDPR', 'EU RESIDENCY'],
]

export default function Compliance() {
  return (
    <section style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '22px 32px', borderBottom: '0.5px solid rgba(241,239,232,0.08)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '0.5px solid rgba(241,239,232,0.1)', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--sage-soft)' }}>— COMPLIANCE</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--sage-soft)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationThickness: '0.5px' }}>REPORT ON REQUEST →</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 0, paddingTop: 12 }}>
        {items.map(([name, detail], i) => (
          <div key={name} style={{ padding: '4px 14px', borderLeft: i === 0 ? 'none' : '0.5px solid rgba(241,239,232,0.1)', display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: 'var(--cream)', fontWeight: 500 }}>{name}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.16em', color: 'var(--sage-soft)' }}>· {detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
