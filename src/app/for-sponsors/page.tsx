import type { Metadata } from 'next'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'For Sponsors' }

const useCases = [
  ['FEASIBILITY','Before the protocol is locked.','Safar reads inclusion/exclusion against a real patient population — across 312 sites — in under 72 hours. You find the over‑tight criterion before it\'s set in stone, not after.'],
  ['SITE SELECTION','Grounded in the record.','Site rankings built from actual EHR‑visible eligible populations, not self‑reported estimates. No more selecting a site with zero of your phenotype.'],
  ['RESCUE ENROLLMENT','For studies 40% behind plan.','Median eight weeks from kickoff to first LPI uptick. We\'ve brought seventeen rescue studies back to schedule in the last eighteen months.'],
  ['PORTFOLIO HYGIENE','One view across the book.','Every study, every site, every criterion — with real eligibility numbers. Kill the portfolio dogs before they eat another quarter.'],
]

const proof = [
  ['61%','Faster LPI','Median across 42 active studies'],
  ['8.2×','Screening yield','Eligible‑to‑screened, vs. pre‑Safar baseline'],
  ['$4.7M','Saved per rescue','Phase II oncology · internal model'],
  ['0','PHI breaches','Since inception, Q3 2023'],
]

export default function ForSponsorsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="— FOR SPONSORS · PHARMA, BIOTECH, CROs" title="Stop buying cohorts." italic="Read the record." sub="Your protocol was written for a specific patient. That patient exists — somewhere in 340 million records. Safar finds them, scores them, and surfaces them to the clinician who already knows them." />

      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)' }}>— FOUR PRIMARY USE CASES</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>DEPLOYED WITH 3 OF THE TOP‑10</span>
        </div>
        <style>{`
          @media (max-width: 860px) {
            .fsp-usecase { grid-template-columns: 1fr !important; gap: 14px !important; padding: 32px 0 !important; }
            .fsp-proof { grid-template-columns: 1fr 1fr !important; gap: 0 !important; }
            .fsp-proof > div:nth-child(odd) { border-left: none !important; padding-left: 0 !important; }
            .fsp-proof > div:nth-child(even) { border-left: 0.5px solid rgba(241,239,232,0.14) !important; padding-left: 28px !important; }
            .fsp-proof > div:nth-child(-n+2) { padding-bottom: 32px !important; border-bottom: 0.5px solid rgba(241,239,232,0.14) !important; }
            .fsp-proof > div:nth-child(n+3) { padding-top: 32px !important; }
            .fsp-case-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
            .fsp-case-stats { grid-template-columns: 1fr 1fr 1fr !important; gap: 18px !important; }
          }
          @media (max-width: 480px) {
            .fsp-case-stats { grid-template-columns: 1fr !important; gap: 18px !important; }
          }
        `}</style>
        {useCases.map(([tag,title,body],i) => (
          <div key={i} className="fsp-usecase" style={{ display:'grid', gridTemplateColumns:'180px 1.1fr 1.6fr', gap:32, padding:'40px 0', borderBottom:'0.5px solid var(--border)', alignItems:'start' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--brand)' }}>— {tag}</span>
            <div style={{ fontFamily:'var(--font-display)', fontSize:32, letterSpacing:'-0.03em', lineHeight:1.02, color:'var(--forest)' }}>
              {title.split(' ').slice(0,-1).join(' ')}{' '}<span style={{ fontStyle:'italic', color:'var(--brand)' }}>{title.split(' ').slice(-1)}</span>
            </div>
            <p style={{ fontSize:14.5, lineHeight:1.65, color:'var(--fg-2)' }}>{body}</p>
          </div>
        ))}
      </section>

      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)' }}>— PROOF · 2025 OUTCOMES</span>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:'clamp(52px,6vw,88px)', margin:'20px 0 56px', color:'var(--cream)', maxWidth:'16ch' }}>
          Four numbers. <span style={{ fontStyle:'italic', color:'var(--lime)' }}>Audited by sponsors.</span>
        </h2>
        <div className="fsp-proof" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:0 }}>
          {proof.map(([k,v,sub],i) => (
            <div key={i} style={{ padding:'28px 28px 28px 0', paddingLeft: i===0 ? 0 : 28, borderLeft: i===0 ? 'none' : '0.5px solid rgba(241,239,232,0.14)' }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:400, fontSize:'clamp(60px,7vw,84px)', letterSpacing:'-0.04em', lineHeight:0.9, color:'var(--lime)' }}>{k}</div>
              <div style={{ marginTop:14, fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--cream)', textTransform:'uppercase' }}>{v}</div>
              <div style={{ marginTop:6, fontSize:12, color:'var(--sage-soft)', lineHeight:1.5 }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div className="fsp-case-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'start' }}>
          <div>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>— CASE · PHASE II AML RESCUE</span>
            <div style={{ marginTop:20, fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', color:'var(--brand)' }}>SPONSOR · TOP‑10 PHARMA · CONFIDENTIAL</div>
            <figure style={{ margin:'32px 0 0' }}>
              <div style={{ width:'100%', paddingTop:'120%', position:'relative', border:'0.5px solid var(--border)', overflow:'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=70"
                  alt="A patient enrolled through a Safar match"
                  fill
                  sizes="(max-width:860px) 100vw, 30vw"
                  style={{ objectFit:'cover' }}
                />
              </div>
              <figcaption style={{ marginTop:14, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase', lineHeight:1.6 }}>
                — ILLUSTRATIVE · PATIENT JOURNEY<br/>· ONE OF 106 MATCHES SURFACED
              </figcaption>
            </figure>
          </div>
          <div>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:400, fontSize:'clamp(36px,4vw,48px)', letterSpacing:'-0.035em', lineHeight:1.0, color:'var(--forest)' }}>
              Twelve weeks behind. <span style={{ fontStyle:'italic', color:'var(--brand)' }}>Forty‑one weeks ahead.</span>
            </h3>
            <p style={{ marginTop:28, fontSize:15, lineHeight:1.7, color:'var(--fg-2)' }}>
              Phase II, FLT3‑ITD+ AML. Enrollment stalled at 14% of plan after nine months. Safar deployed across eight existing sites; no new sites added. In the first eight weeks after go‑live, 106 evidence‑backed matches surfaced. Screen‑to‑enroll held at 72%. LPI landed forty‑one weeks ahead of the revised projection — saving the program.
            </p>
            <div className="fsp-case-stats" style={{ marginTop:32, padding:'24px 0', borderTop:'0.5px solid var(--border)', borderBottom:'0.5px solid var(--border)', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24 }}>
              {[['106','Matches surfaced · 8 wks'],['72%','Screen‑to‑enroll'],['41 wks','LPI acceleration']].map(([k,v],i) => (
                <div key={i}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:36, letterSpacing:'-0.03em', color:'var(--forest)' }}>{k}</div>
                  <div style={{ marginTop:6, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.12em', color:'var(--fg-3)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
