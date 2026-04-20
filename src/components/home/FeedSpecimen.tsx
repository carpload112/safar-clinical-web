export default function FeedSpecimen() {
  const rows = [
    ['09:42:17','MRN ·481','MEM-SLOAN-KETTERING','NSCLC · EGFR T790M','0.94',true],
    ['09:41:58','MRN ·217','DANA-FARBER','NSCLC · EGFR L858R','0.91',false],
    ['09:38:02','MRN ·912','JOHNS HOPKINS','NSCLC · EXON 19 DEL','0.88',false],
    ['09:33:44','MRN ·063','UCSF HEALTH','NSCLC · EGFR T790M','0.86',false],
    ['09:29:10','MRN ·748','NYU LANGONE','NSCLC · UNCOMMON','0.81',false],
    ['09:24:55','MRN ·302','CLEVELAND CLINIC','NSCLC · EGFR T790M','0.79',false],
  ] as const
  return (
    <>
      <style>{`
        @keyframes livePulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
        .live-dot { animation:livePulse 1.8s ease-in-out infinite }
        @media(max-width:960px){
          .fs-grid{grid-template-columns:1fr!important;gap:40px!important}
          .fs-pad{padding:72px 24px!important}
        }
      `}</style>
      <section className="fs-pad" style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)' }}>
        <div className="fs-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:64 }}>
          <div>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--brand)' }}>— SPECIMEN · THE MATCHER</span>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:'clamp(40px,5vw,56px)', margin:'18px 0 20px', color:'var(--forest)' }}>
              A quiet feed of <span style={{ fontStyle:'italic', color:'var(--brand)' }}>qualified patients.</span>
            </h2>
            <p style={{ fontSize:14, lineHeight:1.6, color:'var(--fg-2)', maxWidth:'42ch' }}>
              Every row is a patient the protocol missed during conventional screening. Safar found them in unstructured notes and structured labs, scored the match, and surfaced the result in the clinician's chart.
            </p>
            <div style={{ marginTop:28 }}>
              <a href="/method" style={{ fontSize:13, color:'var(--brand)', textDecoration:'underline', textUnderlineOffset:5, textDecorationThickness:'0.5px' }}>See sample match report →</a>
            </div>
          </div>
          <div style={{ background:'var(--cream)', border:'0.5px solid var(--border)', overflow:'hidden' }}>
            <div style={{ padding:'14px 18px', borderBottom:'0.5px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:10, flexWrap:'wrap' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>— NCT05783438 · PHASE II · ONCOLOGY</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--lime)', display:'inline-flex', alignItems:'center', gap:6 }}>
                <span className="live-dot" style={{ width:6, height:6, borderRadius:999, background:'var(--lime)', display:'inline-block' }}/> LIVE · 2 NEW SINCE 09:42
              </span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'90px 80px 1.4fr 1.6fr 60px 80px', padding:'10px 18px', borderBottom:'0.5px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em', color:'var(--fg-3)', textTransform:'uppercase' }}>
              <span>TIME</span><span>MRN</span><span>SITE</span><span>CRITERIA</span><span style={{ textAlign:'right' }}>SCORE</span><span style={{ textAlign:'right' }}>STATUS</span>
            </div>
            {rows.map((r,i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'90px 80px 1.4fr 1.6fr 60px 80px', padding:'12px 18px', borderBottom: i===rows.length-1 ? 'none' : '0.5px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:11, color:'var(--forest)', alignItems:'center', background: r[5] ? 'rgba(99,164,38,0.10)' : 'transparent' }}>
                <span style={{ color:'var(--fg-3)' }}>{r[0]}</span>
                <span>{r[1]}</span>
                <span style={{ letterSpacing:'0.06em' }}>{r[2]}</span>
                <span style={{ letterSpacing:'0.04em' }}>{r[3]}</span>
                <span style={{ textAlign:'right', fontFamily:'var(--font-display)', fontSize:18, letterSpacing:'-0.02em', color: r[5] ? 'var(--brand)' : 'var(--forest)' }}>{r[4]}</span>
                <span style={{ textAlign:'right', fontSize:9, letterSpacing:'0.14em', color: r[5] ? 'var(--brand)' : 'var(--fg-3)' }}>{r[5] ? '— NEW' : '· QUEUED'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
