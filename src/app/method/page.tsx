import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'The Method' }

const steps = [
  {n:'01',t:'Ingest the protocol',p:'A PDF lands. The parser lifts inclusion, exclusion, prior therapy, labs, demographics, and longitudinal constraints into a structured query — reviewed by a clinical reader in under 90 minutes.'},
  {n:'02',t:'Mirror the record',p:'Safar connects to Epic, Cerner, athena, MEDITECH, or any FHIR R4 endpoint. We read structured fields and unstructured notes inside the health system boundary. No PHI leaves the signed environment.'},
  {n:'03',t:'Score every patient',p:'Each patient is evaluated continuously against the query. The score is explainable: every match ships with the criteria it hit and the evidence it was drawn from — down to the note line.'},
  {n:'04',t:'Route to the chart',p:'Eligible patients surface inside the clinician\'s existing workflow at the moment of care. A single row inside the record they already have open: accept, defer, or decline.'},
  {n:'05',t:'Hand off, cleanly',p:'Accepted matches move to the site\'s existing, IRB-approved screening and consent workflow. Outreach follows site policy. Safar never contacts patients directly.'},
  {n:'06',t:'Audit everything',p:'Every query, match, evidence trace, and outcome is logged to a 21 CFR Part 11-compliant audit trail. Exportable to the sponsor\'s TMF in one click.'},
]

const principles = [
  ['We don\'t contact patients.','The chart is the venue. The clinician is the trusted party. Safar is the reader.'],
  ['We don\'t operate a consent farm.','No recruitment mailers. No ad tracking. No cold outreach. Consent stays with the site.'],
  ['Every score is explainable.','If we can\'t show the evidence, we don\'t surface the match. No black boxes.'],
  ['We work inside the record.','No new dashboard to adopt. If it\'s not in the chart, it didn\'t happen.'],
]

const evidence = [
  ['INCLUSION · EGFR T790M','Pathology · 2025‑11‑12 · Foundation One CDx · "EGFR T790M detected, allele frequency 14.2%"'],
  ['INCLUSION · AGE ≥ 18','Demographics · DOB 1962‑03‑14 · age 63'],
  ['INCLUSION · ECOG 0‑1','Note · 2026‑02‑04 · Dr. Kim · "Pt ambulatory, KPS 90, ECOG 1."'],
  ['INCLUSION · PRIOR TKI','Medication · osimertinib 80mg QD · 2024‑06 → 2025‑10 · progression on surveillance CT'],
  ['EXCLUSION · PRIOR ICI — NOT MET','Med list reviewed. No prior checkpoint inhibitor.'],
]

export default function MethodPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="— THE METHOD" title="Enrollment as a" italic="routing problem." sub="Safar reads the record a clinician already uses and surfaces trial‑eligible patients at the moment of decision. No mailers. No dashboards. No black boxes." />

      {/* Principles */}
      <section style={{ padding:'88px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)', textTransform:'uppercase' }}>— FIRST PRINCIPLES</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>FOUR · NON‑NEGOTIABLE</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
          {principles.map(([title,body],i) => (
            <div key={i} style={{ padding:'32px 32px 32px 0', borderRight: i%2===0 ? '0.5px solid var(--border)' : 'none', paddingLeft: i%2===1 ? 32 : 0, borderBottom: i<2 ? '0.5px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:28, letterSpacing:'-0.03em', lineHeight:1.1, color:'var(--forest)', marginBottom:12 }}>
                <span style={{ fontStyle:'italic', color:'var(--brand)' }}>{title.split(' ')[0]}</span>{' '}{title.split(' ').slice(1).join(' ')}
              </div>
              <p style={{ fontSize:14, lineHeight:1.6, color:'var(--fg-2)', maxWidth:'48ch' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:28, borderBottom:'0.5px solid var(--border)', marginBottom:24, gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase' }}>— THE LOOP · PROTOCOL TO LPI</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>SIX STAGES · TYPICAL 9 WEEKS</span>
        </div>
        {steps.map(s => (
          <div key={s.n} style={{ display:'grid', gridTemplateColumns:'96px 1fr 1.4fr', gap:32, padding:'36px 0', borderBottom:'0.5px solid var(--border)', alignItems:'start' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'0.14em', color:'var(--brand)' }}>— {s.n}</span>
            <div style={{ fontFamily:'var(--font-display)', fontSize:32, letterSpacing:'-0.03em', lineHeight:1.02, color:'var(--forest)' }}>{s.t}.</div>
            <p style={{ fontSize:14.5, lineHeight:1.6, color:'var(--fg-2)' }}>{s.p}</p>
          </div>
        ))}
      </section>

      {/* Evidence specimen */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)', position:'relative', overflow:'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position:'absolute', right:-160, bottom:-180, width:560, height:560, opacity:0.06, filter:'brightness(2.5)', pointerEvents:'none' }}/>
        <div style={{ position:'relative', maxWidth:1000 }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)' }}>— EVIDENCE · WHY THIS MATCH</span>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:'clamp(40px,5vw,56px)', margin:'18px 0 40px', color:'var(--cream)' }}>
            Every score ships with <span style={{ fontStyle:'italic', color:'var(--lime)' }}>its sources.</span>
          </h2>
          <div style={{ background:'rgba(241,239,232,0.06)', border:'0.5px solid rgba(241,239,232,0.14)', padding:32 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', borderBottom:'0.5px solid rgba(241,239,232,0.14)', paddingBottom:12, marginBottom:20, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--sage-soft)', flexWrap:'wrap', gap:8 }}>
              <span>— MRN ·481 · NCT05783438 · PHASE II · NSCLC</span>
              <span>SCORE <span style={{ color:'var(--lime)', fontFamily:'var(--font-display)', fontSize:20, marginLeft:8 }}>0.94</span></span>
            </div>
            <div style={{ display:'grid', gap:14 }}>
              {evidence.map(([k,v],i) => (
                <div key={i} style={{ display:'grid', gridTemplateColumns:'260px 1fr', gap:20, paddingBottom:12, borderBottom: i===evidence.length-1 ? 'none' : '0.5px solid rgba(241,239,232,0.08)' }}>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.12em', color:'var(--lime)' }}>{k}</span>
                  <span style={{ fontSize:13, lineHeight:1.5, color:'var(--cream)' }}>{v}</span>
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
