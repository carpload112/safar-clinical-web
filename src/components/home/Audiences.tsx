import Image from 'next/image'
import Link from 'next/link'

const cards = [
  { tag:'— FOR SPONSORS', title:'Enrollment without mailers.', body:'See cohort feasibility before the protocol is locked. Get qualified matches in the first 72 hours, not the first 11 months.', img:'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=70', href:'/for-sponsors', link:'For pharma & biotech sponsors' },
  { tag:'— FOR CROS', title:'A straighter path to LPI.', body:'Bring a reading of the EHR to every site you operate. Fewer dropped screen failures, cleaner pipelines, auditable routing.', img:'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=70', href:'/for-sponsors', link:'For contract research orgs' },
  { tag:'— FOR SITES', title:'Matches in the chart.', body:'No new dashboard. A single row inside the record the clinician already has open — accept, defer, decline.', img:'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=70', href:'/for-sites', link:'For hospitals & research sites' },
]

export default function Audiences() {
  return (
    <>
      <style>{`
        .aud-card { transition:transform 280ms var(--ease); cursor:pointer; }
        .aud-card:hover { transform:translateY(-4px); }
        .aud-img { transition:filter 400ms var(--ease); }
        .aud-card:hover .aud-img { filter:grayscale(0.3) contrast(1.05)!important; }
        @media(max-width:860px){
          .aud-grid{grid-template-columns:1fr!important;gap:40px!important}
          .aud-pad{padding:72px 24px!important}
        }
      `}</style>
      <section className="aud-pad" style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:32, borderBottom:'0.5px solid var(--border)', marginBottom:48, gap:16, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--fg-3)' }}>— WHO IT'S FOR</span>
          <span style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, letterSpacing:'-0.025em', color:'var(--forest)' }}>Three audiences. One reading of the record.</span>
        </div>
        <div className="aud-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:32 }}>
          {cards.map((c,i) => (
            <article key={i} className="aud-card" style={{ display:'flex', flexDirection:'column', gap:20 }}>
              <div className="aud-img" style={{ width:'100%', paddingTop:'64%', position:'relative', filter:'grayscale(1) contrast(1.05)', border:'0.5px solid var(--border)', overflow:'hidden' }}>
                <Image src={c.img} alt={c.title} fill style={{ objectFit:'cover' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(17,74,19,0.05) 0%,rgba(17,74,19,0.45) 100%)' }}/>
                <span style={{ position:'absolute', left:14, top:14, fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.16em', color:'var(--cream)', textTransform:'uppercase' }}>{c.tag}</span>
              </div>
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.035em', lineHeight:1.02, fontSize:32, color:'var(--forest)' }}>
                {c.title.split(' ').slice(0,-1).join(' ')}{' '}
                <span style={{ fontStyle:'italic', color:'var(--brand)' }}>{c.title.split(' ').slice(-1)}</span>
              </h3>
              <p style={{ fontSize:14, lineHeight:1.6, color:'var(--fg-2)' }}>{c.body}</p>
              <Link href={c.href} style={{ fontSize:13, color:'var(--forest)', textDecoration:'underline', textUnderlineOffset:4, textDecorationThickness:'0.5px', textDecorationColor:'var(--border)' }}>{c.link} →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
