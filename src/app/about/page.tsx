import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'About' }

const team = [
  ['Co‑founder · CEO','Clinical','Oncologist. A decade in real‑world data before this.'],
  ['Co‑founder · CTO','Engineering','EHR integrations engineer. FHIR + HL7 for longer than she\'d like.'],
  ['Chief Medical Officer','Clinical','Trialist. Has run the screen‑fail meetings you\'re trying to avoid.'],
  ['Head of Regulatory','Ops','Part 11 + GCP. Writes the audit responses sponsors actually read.'],
  ['VP Engineering','Engineering','Distributed systems. Has opinions about eventual consistency in charts.'],
  ['VP Clinical','Clinical','Coordinator‑turned‑PM. Knows where the real friction lives.'],
]

const milestones = [
  ['2023','Founded','First protocol routed end‑to‑end inside a live EHR.'],
  ['2024','SOC 2 Type II','Continuous audit. BAA templates standardized.'],
  ['2024','21 CFR Part 11','Signed attestation. First sponsor partnership live.'],
  ['2025','HITRUST CSF','Cross‑mapped controls. First multi‑site rescue completed.'],
  ['2025','Epic + Cerner','Certified integrations. Sites onboarding self‑serve.'],
  ['2026','Today','Working with pharma, biotech, CROs, and academic medical centers.'],
]

const principles = [
  ['01','Routed, not broadcast','A trial doesn\'t need another email blast. It needs to land on the one chart where it applies, at the moment the clinician is already there.'],
  ['02','Clinician in the loop','The PI sees every match before the patient does. No cold outreach, no surprise calls. We\'re a tool for the care team, not a replacement.'],
  ['03','Inside the EHR','Epic, Cerner, Meditech. We live where the work already happens. No parallel dashboard, no yet‑another‑login.'],
  ['04','Audited by default','Every match is a timestamped event, every consent is signed and hashed, every amendment is rescored. The ledger is the product.'],
  ['05','Patient‑controlled consent','The patient authorizes disclosure, not the vendor. We never move PHI without a signature we can prove.'],
  ['06','Quiet','No animations, no dopamine, no leaderboards. Coordinators are busy. The best UX is one you don\'t notice.'],
]

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero with contour bg */}
      <div style={{ position:'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/contour-hero.svg" alt="" aria-hidden style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', pointerEvents:'none', opacity:0.9 }}/>
        <div style={{ position:'relative' }}>
          <PageHeader
            eyebrow="— ABOUT · WHY WE EXIST"
            title="Trial matching is"
            italic="a coordination mess."
            sub="Sponsors write a protocol. Sites self‑report eligible patient counts from memory. Coordinators comb charts by hand. Patients find out about trials from ads, not from their own doctor. Nobody owns the routing, nobody audits the match, and nobody is accountable for the gap. We built Safar to sit in that gap."
          />
        </div>
      </div>

      {/* FIG 01 Gap diagram */}
      <section style={{ padding:'64px 32px 96px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>— FIG. 01 · THE COORDINATION GAP</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>DASHED = HANDOFF WITHOUT EVIDENCE</span>
        </div>
        <div style={{ marginTop:40, padding:'24px 8px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/diagram-gap.svg" alt="Diagram showing coordination gaps between sponsor protocol, site feasibility estimate, chart review, and patient awareness — with Safar as the routing layer." style={{ width:'100%', maxWidth:880, display:'block', margin:'0 auto' }}/>
        </div>
        <p style={{ marginTop:28, fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-3)', maxWidth:'72ch', lineHeight:1.6 }}>
          Each dashed segment is a handoff where the evidence drops — protocol to feasibility, feasibility to chart, chart to patient. Safar replaces each with a routed, timestamped, audited event. That's the whole product.
        </p>
      </section>

      {/* The Problem */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64, alignItems:'start' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)' }}>— THE PROBLEM</span>
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.035em', lineHeight:1.0, fontSize:'clamp(36px,4.5vw,64px)', color:'var(--forest)', maxWidth:'22ch' }}>
              The eligible patient exists. <span style={{ fontStyle:'italic', color:'var(--brand)' }}>The routing to them doesn't.</span>
            </h2>
            <p style={{ marginTop:32, fontSize:16, lineHeight:1.7, color:'var(--fg-2)', maxWidth:'58ch' }}>
              Most trials miss enrollment targets. Most sites over‑promise patient counts because they're estimating from gut. Most coordinators waste weeks on chart review. Most patients never hear about a study they'd qualify for. It's not a recruiting problem — it's a routing problem. Nobody has been accountable for connecting the protocol to the record, at the moment of care, with evidence attached. Safar is that layer: quiet, auditable, and built to live inside the chart the clinician is already in.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none', opacity:0.35 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/constellation-principles.svg" alt="" aria-hidden style={{ width:'100%', maxWidth:1200, display:'block' }}/>
        </div>
        <div style={{ position:'relative' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', gap:12, flexWrap:'wrap' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>— FIG. 02 · OPERATING PRINCIPLES</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>SIX · NON‑NEGOTIABLE</span>
          </div>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:1.0, fontSize:'clamp(40px,5vw,72px)', margin:'32px 0 64px', color:'var(--forest)', maxWidth:'22ch' }}>
            How we work — <span style={{ fontStyle:'italic', color:'var(--brand)' }}>in six lines.</span>
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
            {principles.map(([n,head,body],i) => (
              <div key={i} style={{ padding:'32px 32px 32px 0', paddingLeft: i%2===0 ? 0 : 32, borderLeft: i%2===0 ? 'none' : '0.5px solid var(--border)', borderBottom: i<4 ? '0.5px solid var(--border)' : 'none', background:'rgba(241,239,232,0.72)', backdropFilter:'blur(2px)' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:16, marginBottom:14 }}>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.18em', color:'var(--brand)' }}>— {n}</span>
                  <div style={{ flex:1, height:1, background:'var(--border)' }}/>
                </div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:26, letterSpacing:'-0.025em', lineHeight:1.1, color:'var(--forest)' }}>{head}</h3>
                <p style={{ marginTop:12, fontSize:14, lineHeight:1.6, color:'var(--fg-2)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>— TEAM · CLINICAL + ENGINEERING + REGULATORY</span>
          <a href="#" style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)', textDecoration:'underline', textUnderlineOffset:3 }}>OPEN ROLES ↗</a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0 }}>
          {team.map(([name,role,bio],i) => (
            <div key={i} style={{ padding:'36px 28px 36px 0', paddingLeft: i%3===0 ? 0 : 28, borderLeft: i%3===0 ? 'none' : '0.5px solid var(--border)', borderBottom: i<3 ? '0.5px solid var(--border)' : 'none' }}>
              <div style={{ width:'100%', aspectRatio:'4/5', background:'var(--forest)', marginBottom:20, position:'relative', overflow:'hidden' }}>
                <svg viewBox="0 0 100 125" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }} preserveAspectRatio="xMidYMid slice">
                  <rect width="100" height="125" fill="#114A13"/>
                  <circle cx="50" cy="48" r="18" fill="#0a3a0c"/>
                  <path d="M 15 125 Q 15 85 50 85 Q 85 85 85 125 Z" fill="#0a3a0c"/>
                  <text x="50" y="118" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="5" letterSpacing="0.8" fill="#C5E85C" opacity="0.6">PORTRAIT · TBD</text>
                </svg>
                <div style={{ position:'absolute', top:10, left:10, fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em', color:'var(--lime)' }}>— {String(i+1).padStart(2,'0')}</div>
              </div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:20, letterSpacing:'-0.025em', color:'var(--forest)', lineHeight:1.1 }}>{name}</div>
              <div style={{ marginTop:4, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--brand)', textTransform:'uppercase' }}>{role}</div>
              <p style={{ marginTop:14, fontSize:13, lineHeight:1.55, color:'var(--fg-2)' }}>{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)', position:'relative', overflow:'hidden' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)', position:'relative' }}>— THE ROUTE SO FAR</span>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:1.0, fontSize:'clamp(44px,5vw,72px)', margin:'20px 0 40px', color:'var(--cream)', position:'relative' }}>
          Three years. <span style={{ fontStyle:'italic', color:'var(--lime)' }}>Six waypoints.</span>
        </h2>
        <div style={{ margin:'0 -32px 40px', padding:'0 16px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/route-topo.svg" alt="Topographic route showing Safar's waypoints from 2023 to 2026" style={{ width:'100%', display:'block' }}/>
        </div>
        {milestones.map(([y,q,body],i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 60px 1fr', gap:32, padding:'24px 0', borderTop:'0.5px solid rgba(241,239,232,0.14)', alignItems:'baseline' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize:32, letterSpacing:'-0.03em', color:'var(--lime)' }}>{y}</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--sage-soft)' }}>{q}</span>
            <span style={{ fontSize:15, lineHeight:1.55, color:'var(--cream)' }}>{body}</span>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section style={{ padding:'80px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)', position:'relative', overflow:'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/ledger-watermark.svg" alt="" aria-hidden style={{ position:'absolute', top:0, right:-40, height:'100%', width:'auto', opacity:0.6, pointerEvents:'none' }}/>
        <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0 }}>
          {[['press@safar.clinical','Press'],['careers@safar.clinical','Careers'],['hello@safar.clinical','Everything else']].map(([email,label],i) => (
            <div key={i} style={{ padding:'32px 28px 32px 0', paddingLeft: i===0 ? 0 : 28, borderLeft: i===0 ? 'none' : '0.5px solid var(--border)' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase' }}>— {label}</div>
              <a href={'mailto:'+email} style={{ marginTop:14, display:'inline-block', fontFamily:'var(--font-display)', fontSize:24, letterSpacing:'-0.02em', color:'var(--brand)', textDecoration:'underline', textUnderlineOffset:4, textDecorationThickness:'0.5px' }}>{email}</a>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
