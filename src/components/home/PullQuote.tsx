export default function PullQuote() {
  return (
    <>
      <style>{`
        @media(max-width:860px){
          .pq-pad{padding:80px 24px!important}
          .pq-text{font-size:40px!important}
        }
      `}</style>
      <section className="pq-pad" style={{ padding:'120px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)', position:'relative', overflow:'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position:'absolute', left:-120, bottom:-220, width:720, height:720, opacity:0.06, pointerEvents:'none', filter:'brightness(2)' }}/>
        <figure style={{ position:'relative', margin:'0 auto', maxWidth:1080, display:'flex', flexDirection:'column', gap:32 }}>
          <blockquote className="pq-text" style={{ margin:0, fontFamily:'var(--font-display)', fontStyle:'italic', fontWeight:400, letterSpacing:'-0.035em', lineHeight:1.06, fontSize:'clamp(40px,5vw,68px)', color:'var(--cream)' }}>
            "Every patient who qualifies but never enrolls is a <span style={{ color:'var(--lime)' }}>silent failure</span> of the system. Safar made that silence legible."
          </blockquote>
          <figcaption style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--sage-soft)', textTransform:'uppercase' }}>
            — DR. A. PATEL · CMO · ONCOLOGY SPONSOR, TOP‑10
          </figcaption>
        </figure>
      </section>
    </>
  )
}
