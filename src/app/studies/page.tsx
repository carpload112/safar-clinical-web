'use client'
import { useState } from 'react'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'
import { useOpenCta } from '@/components/CtaContext'

const studies = [
  ['NCT05783438','Oncology','NSCLC · EGFR T790M','II','Memorial Sloan Kettering +5','240/240','COMPLETE','LPI · 9 weeks'],
  ['NCT05412991','Hematology','AML · FLT3‑ITD','II','Dana‑Farber +3','88/120','ENROLLING','On pace · 14 weeks'],
  ['NCT06120014','Cardiology','HFpEF · SGLT2','III','Cleveland Clinic +12','12/420','SCREENING','Started 03‑12'],
  ['NCT05902840','Rare','Pompe · late‑onset','II','NIH + 4 EU sites','6/18','ENROLLING','Rare · longitudinal'],
  ['NCT05330001','Neurology','ALS · C9orf72','II','UCSF + 2','24/40','ENROLLING','On pace'],
  ['NCT05884712','Immunology','SLE · type I IFN','III','NYU + 18','142/300','ENROLLING','Ahead · 11 weeks'],
  ['NCT06001283','Oncology','TNBC · ADC','II','MD Anderson +6','58/140','ENROLLING','On pace'],
  ['NCT05719003','Endocrine','T2D · GLP‑1','III','Community AMCs · 22','312/800','ENROLLING','Ahead · 18 weeks'],
  ['NCT05662104','Oncology','CRC · KRAS G12C','I/II','Johns Hopkins +2','34/60','ENROLLING','On pace'],
  ['NCT05529912','Neurology','MS · BTK','III','Mass General +14','188/420','ENROLLING','On pace'],
] as const

const areas = ['All','Oncology','Hematology','Cardiology','Rare','Neurology','Immunology','Endocrine']
const phases = ['All','I/II','II','III']
const statusColors: Record<string,string> = { COMPLETE:'var(--fg-3)', ENROLLING:'var(--lime)', SCREENING:'var(--amber)' }

function StudiesContent() {
  const openCta = useOpenCta()
  const [area, setArea] = useState('All')
  const [phase, setPhase] = useState('All')
  const filtered = studies.filter(s => (area === 'All' || s[1] === area) && (phase === 'All' || s[3] === phase))

  return (
    <>
      <PageHeader eyebrow="— STUDIES · LIVE PORTFOLIO" title="Forty‑two studies." italic="Three hundred twelve sites." sub="A public read of the studies Safar is currently routing. Filter by therapeutic area or phase. Live counts update weekly; site‑level detail is available on request under NDA." />

      <section style={{ padding:'28px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)', position:'sticky', top:63, zIndex:10, backdropFilter:'blur(12px)' }}>
        <div style={{ display:'flex', gap:32, alignItems:'center', flexWrap:'wrap' }}>
          <div style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>— AREA</span>
            {areas.map(a => (
              <button key={a} onClick={() => setArea(a)} style={{ background:'none', border:0, padding:'4px 0', fontSize:12, cursor:'pointer', color: area===a ? 'var(--brand)' : 'var(--forest)', borderBottom: area===a ? '0.5px solid var(--brand)' : '0.5px solid transparent' }}>{a}</button>
            ))}
          </div>
          <div style={{ width:1, height:14, background:'var(--border)' }}/>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>— PHASE</span>
            {phases.map(p => (
              <button key={p} onClick={() => setPhase(p)} style={{ background:'none', border:0, padding:'4px 0', fontSize:12, cursor:'pointer', color: phase===p ? 'var(--brand)' : 'var(--forest)', borderBottom: phase===p ? '0.5px solid var(--brand)' : '0.5px solid transparent' }}>{p}</button>
            ))}
          </div>
          <div style={{ marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>{filtered.length} OF {studies.length} SHOWN</div>
        </div>
      </section>

      <section style={{ padding:'0 32px 88px', borderBottom:'0.5px solid var(--border)' }}>
        <style>{`.study-row{transition:background 180ms var(--ease)}.study-row:hover{background:var(--surface)}`}</style>
        <div style={{ display:'grid', gridTemplateColumns:'140px 110px 1fr 60px 1.1fr 110px 110px 1fr', padding:'18px 0', gap:16, borderBottom:'0.5px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase' }}>
          <span>Identifier</span><span>Area</span><span>Indication</span><span style={{textAlign:'center'}}>Phase</span><span>Sites</span><span style={{textAlign:'right'}}>Enrolled</span><span>Status</span><span>Notes</span>
        </div>
        {filtered.map((s,i) => (
          <div key={i} className="study-row" style={{ display:'grid', gridTemplateColumns:'140px 110px 1fr 60px 1.1fr 110px 110px 1fr', padding:'18px 0', gap:16, alignItems:'center', borderBottom:'0.5px solid var(--border)', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--forest)' }}>
            <span style={{ color:'var(--brand)', letterSpacing:'0.06em' }}>{s[0]}</span>
            <span style={{ color:'var(--fg-2)' }}>{s[1]}</span>
            <span style={{ fontFamily:'var(--font-display)', fontSize:16, letterSpacing:'-0.02em' }}>{s[2]}</span>
            <span style={{ textAlign:'center', color:'var(--fg-3)' }}>{s[3]}</span>
            <span style={{ fontSize:11, color:'var(--fg-2)' }}>{s[4]}</span>
            <span style={{ textAlign:'right', fontFamily:'var(--font-display)', fontSize:18, letterSpacing:'-0.02em', fontVariantNumeric:'tabular-nums' }}>{s[5]}</span>
            <span style={{ fontSize:9, letterSpacing:'0.14em', color:statusColors[s[6]], display:'inline-flex', alignItems:'center', gap:6 }}>
              <span style={{ width:6, height:6, borderRadius:999, background:statusColors[s[6]], display:'inline-block' }}/>{s[6]}
            </span>
            <span style={{ fontSize:11, color:'var(--fg-2)' }}>{s[7]}</span>
          </div>
        ))}
        <div style={{ padding:'32px 0', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>— FIGURES UPDATED 2026‑04‑19 · PROVENANCE ON REQUEST</span>
          <button onClick={openCta} style={{ background:'none', border:0, padding:0, fontSize:13, color:'var(--brand)', cursor:'pointer', textDecoration:'underline', textUnderlineOffset:4, textDecorationThickness:'0.5px' }}>Request site‑level breakdown →</button>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export default function StudiesPage() {
  return (
    <PageShell>
      <StudiesContent />
    </PageShell>
  )
}
