import type { Metadata } from 'next'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'For Sites' }

const promises = [
  ['No new dashboard.','Safar lives inside the chart you already have open. Epic, Cerner, athena, MEDITECH. A single row, one keystroke.'],
  ['No PHI leaves the building.','We run inside your boundary, under your BAA, on your audit trail. We never own the data. You can revoke our read in sixty seconds.'],
  ['The clinician remains the trusted party.','Safar flags. The clinician decides. We never message the patient. We never join a chart note. We never mark an encounter.'],
  ['Every match comes with its evidence.','Nothing in your queue is a black box. We show the criteria, the note lines, and the lab values that produced the score. You can disagree — and log why, in one click.'],
]

const workflow = [
  ['IN THE CHART','A subtle Safar chip appears on eligible patients\' schedule line. No pop‑ups. No interruptions. One click expands the evidence drawer.'],
  ['AT THE VISIT','The attending reviews the match at the point of care — where they already have the patient\'s file open. Accept, defer, or decline with a reason.'],
  ['TO THE COORDINATOR','Accepted matches land in your existing research coordinator queue. Outreach, consent, and screening follow your existing SOPs. No new workflow.'],
  ['TO THE PI','Portfolio dashboard shows open matches, screen conversion, and enrollment pacing across every active study. Exportable. Auditable.'],
]

export default function ForSitesPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="— FOR SITES · HOSPITALS, PIs, COORDINATORS" title="A research workflow" italic="that respects your clinic." sub="Research shouldn't fight clinical care. Safar reads the record you already use and surfaces trial‑eligible patients inside it — without cold outreach, without new logins, without ever touching a chart note." />

      <section style={{ padding:'88px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>— FOUR PROMISES TO THE CLINIC</span>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:'clamp(48px,5.5vw,80px)', margin:'20px 0 56px', color:'var(--forest)', maxWidth:'22ch' }}>
          We are a <span style={{ fontStyle:'italic', color:'var(--brand)' }}>reader.</span> Not a recruiter.
        </h2>
        {promises.map(([t,b],i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 1fr 2fr', gap:32, padding:'32px 0', borderTop:'0.5px solid var(--border)', alignItems:'start' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--brand)' }}>— 0{i+1}</span>
            <div style={{ fontFamily:'var(--font-display)', fontSize:26, letterSpacing:'-0.03em', lineHeight:1.05, color:'var(--forest)' }}>{t}</div>
            <p style={{ fontSize:14.5, lineHeight:1.65, color:'var(--fg-2)' }}>{b}</p>
          </div>
        ))}
      </section>

      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:28, borderBottom:'0.5px solid var(--border)', marginBottom:8, gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)' }}>— WHERE SAFAR LIVES · THE PATH OF A MATCH</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>FOUR TOUCHPOINTS · ZERO NEW UI</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:0 }}>
          {workflow.map(([k,v],i) => (
            <div key={i} style={{ padding:'40px 24px 40px 0', paddingLeft: i===0 ? 0 : 24, borderLeft: i===0 ? 'none' : '0.5px solid var(--border)' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--brand)' }}>— STAGE 0{i+1}</span>
              <div style={{ marginTop:14, fontFamily:'var(--font-display)', fontSize:24, letterSpacing:'-0.025em', lineHeight:1.1, color:'var(--forest)' }}>{k}</div>
              <p style={{ marginTop:12, fontSize:13, lineHeight:1.6, color:'var(--fg-2)' }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)', position:'relative', overflow:'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position:'absolute', right:-180, top:-200, width:560, height:560, opacity:0.06, filter:'brightness(2.5)', pointerEvents:'none' }}/>
        <style>{`
          @media(max-width:860px){
            .fs-quote-grid{grid-template-columns:1fr!important;gap:40px!important}
          }
        `}</style>
        <div className="fs-quote-grid" style={{ position:'relative', display:'grid', gridTemplateColumns:'0.7fr 1.6fr', gap:56, alignItems:'center' }}>
          <figure style={{ margin:0 }}>
            <div style={{ width:'100%', paddingTop:'120%', position:'relative', border:'0.5px solid rgba(241,239,232,0.2)', overflow:'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=70"
                alt="A patient enrolled through a Safar match"
                fill
                sizes="(max-width:860px) 100vw, 25vw"
                style={{ objectFit:'cover' }}
              />
            </div>
            <figcaption style={{ marginTop:14, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--sage-soft)', textTransform:'uppercase', lineHeight:1.6 }}>
              — THE PATIENT · ENROLLED BY FRIDAY<br/>· ILLUSTRATIVE
            </figcaption>
          </figure>
          <div>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)' }}>— FROM THE FIELD</span>
            <blockquote style={{ margin:'28px 0 0', fontFamily:'var(--font-display)', fontWeight:400, fontStyle:'italic', fontSize:'clamp(32px,4vw,56px)', letterSpacing:'-0.03em', lineHeight:1.1, color:'var(--cream)' }}>
              "It's the first research tool that didn't ask my clinic to change. The match was there when I opened the chart. I said yes. The patient was enrolled by Friday."
            </blockquote>
            <div style={{ marginTop:32, fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--sage-soft)' }}>
              — DR. AMINA OKONKWO · PI · HEMATOLOGY · DANA‑FARBER
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
