const items = [
  ['ENDPOINTS NEWS', '"Safar is what sponsors have been asking CROs to be for a decade."'],
  ['STAT', '"An EHR‑native approach to recruitment, without the consent‑farm playbook."'],
  ['FIERCE BIOTECH', '"The match rate is, by itself, an argument."'],
  ['NATURE MEDICINE', '"Reading the record like a clinician, at the scale of a data warehouse."'],
]

export default function PressSection() {
  return (
    <>
      <style>{`
        @media(max-width:860px){
          .pr-grid{grid-template-columns:1fr 1fr!important}
          .pr-grid>div:nth-child(odd){border-left:none!important;padding-left:0!important}
          .pr-grid>div:nth-child(even){padding-left:16px!important}
          .pr-pad{padding:64px 24px!important}
        }
        @media(max-width:560px){
          .pr-grid{grid-template-columns:1fr!important}
          .pr-grid>div{border-left:none!important;padding-left:0!important;border-top:0.5px solid var(--border);padding-top:24px}
          .pr-grid>div:first-child{border-top:none;padding-top:0}
        }
      `}</style>
      <section className="pr-pad" style={{ padding:'72px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--fg-3)' }}>— PRESS · IN THE PAPERS</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--brand)', cursor:'pointer' }}>ALL COVERAGE →</span>
        </div>
        <div className="pr-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:24, borderTop:'0.5px solid var(--border)', paddingTop:28 }}>
          {items.map(([src, quote], i) => (
            <div key={i} style={{ paddingLeft: i===0 ? 0 : 20, borderLeft: i===0 ? 'none' : '0.5px solid var(--border)' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--brand)', marginBottom:14 }}>— {src}</div>
              <div style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:19, letterSpacing:'-0.02em', lineHeight:1.25, color:'var(--forest)' }}>{quote}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
