const rows: Array<[string, string]> = [
  ['Epic', 'Hyperspace, Haiku, MyChart'],
  ['Oracle Health (Cerner)', 'Millennium, PowerChart'],
  ['athenahealth', 'athenaOne'],
  ['MEDITECH', 'Expanse'],
  ['FHIR R4', 'Any compliant endpoint'],
  ['Veeva', 'CTMS, Vault'],
  ['IQVIA', 'OCE, RIM'],
  ['Florence eBinders', 'Site startup'],
]

export default function Integrations() {
  return (
    <>
      <style>{`.int-row:hover { background: var(--surface-2); }`}</style>
      <section className="int-pad" style={{ padding: '88px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 28, borderBottom: '0.5px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
          <span className="sf-eyebrow" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand)' }}>— INTEGRATIONS · READS THE RECORD IN PLACE</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>8 OF 8 LIVE</span>
        </div>
        <div className="int-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {rows.map(([name, detail], i) => (
            <div
              key={name}
              className="int-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto',
                alignItems: 'baseline',
                padding: '24px 0',
                gap: 16,
                borderBottom: '0.5px solid var(--border)',
                paddingLeft: i % 2 === 1 ? 32 : 0,
                paddingRight: i % 2 === 0 ? 32 : 0,
                borderRight: i % 2 === 0 ? '0.5px solid var(--border)' : 'none',
                transition: 'background 180ms var(--ease)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)' }}>— {String(i + 1).padStart(2, '0')}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: '-0.025em', color: 'var(--forest)', lineHeight: 1 }}>{name}</div>
                <div style={{ marginTop: 6, fontSize: 12, color: 'var(--fg-2)' }}>{detail}</div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--lime)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--lime)', display: 'inline-block' }} /> LIVE
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
