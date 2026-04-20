'use client'
import { useState } from 'react'

const items = [
  ['Does Safar handle PHI?', 'Yes, under a BAA in every deployment. Data is processed inside the health system boundary where possible; no PHI leaves a signed environment. HIPAA, SOC 2 Type II, 21 CFR Part 11, HITRUST.'],
  ['Which EHRs are supported?', 'Epic, Cerner (Oracle Health), athenahealth, MEDITECH, and any FHIR R4 endpoint. Typical integration is two weeks with IT; no custom builds per protocol.'],
  ['How is a match scored?', 'We parse the protocol into structured criteria, then evaluate each patient against inclusion, exclusion, prior therapy, labs, and longitudinal signals. The score is explainable: every match comes with the criteria it hit and the evidence it was drawn from.'],
  ['What about consent?', 'Matches surface to the treating clinician inside their chart. Outreach and consent follow the site\'s existing, IRB‑approved workflow. Safar does not contact patients.'],
  ['What does it cost?', 'Per‑study, with pricing tied to enrollment delivered — not clicks, not contacts. We\'ll send a sample contract after an intro call.'],
  ['Who\'s behind it?', 'Founders from oncology trials, hospital CIO offices, and clinical NLP. Backed by Section 32, Founders Fund, and a group of sponsor CMOs.'],
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <style>{`
        @media(max-width:860px){
          .faq-grid{grid-template-columns:1fr!important;gap:40px!important}
          .faq-pad{padding:72px 24px!important}
          .faq-head{font-size:44px!important}
          .faq-q{font-size:20px!important}
        }
      `}</style>
      <section className="faq-pad" style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div className="faq-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.8fr', gap:64 }}>
          <div>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--fg-3)' }}>— FREQUENTLY ASKED</span>
            <h2 className="faq-head" style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:56, margin:'18px 0 0', color:'var(--forest)' }}>
              Questions <span style={{ fontStyle:'italic', color:'var(--brand)' }}>worth asking.</span>
            </h2>
          </div>
          <div style={{ borderTop:'0.5px solid var(--border)' }}>
            {items.map(([q,a],i) => {
              const isOpen = open === i
              return (
                <div key={i} style={{ borderBottom:'0.5px solid var(--border)' }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width:'100%', background:'transparent', border:0, cursor:'pointer', padding:'24px 0', textAlign:'left', display:'grid', gridTemplateColumns:'44px 1fr 24px', alignItems:'baseline', gap:16 }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color: isOpen ? 'var(--brand)' : 'var(--fg-3)' }}>— {String(i+1).padStart(2,'0')}</span>
                    <span className="faq-q" style={{ fontFamily:'var(--font-display)', fontSize:24, letterSpacing:'-0.03em', lineHeight:1.15, color:'var(--forest)' }}>{q}</span>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:16, color:'var(--fg-3)', textAlign:'right', transition:'transform 220ms var(--ease)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', display:'block' }}>+</span>
                  </button>
                  <div style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0, overflow:'hidden', transition:'max-height 320ms var(--ease), opacity 240ms var(--ease), padding 240ms var(--ease)', padding: isOpen ? '0 40px 28px 60px' : '0 40px 0 60px', fontSize:14, lineHeight:1.65, color:'var(--fg-2)', maxWidth:'62ch' }}>
                    {a}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
