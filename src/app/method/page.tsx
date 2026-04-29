import type { Metadata } from 'next'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'The Method' }

const principles: Array<[string, string, string]> = [
  ['01', 'Routed, not broadcast', "A trial doesn't need another email blast. It needs to land on the one chart where it applies."],
  ['02', 'Clinician in the loop', 'The PI sees every match before the patient does. No cold outreach.'],
  ['03', 'Inside the EHR', 'Epic, Cerner, Meditech. We live where the work already happens.'],
  ['04', 'Audited by default', 'Every match is timestamped. Every consent is hashed. The ledger is the product.'],
  ['05', 'Patient‑controlled consent', 'The patient authorizes disclosure, not the vendor. We never move PHI without a signature.'],
  ['06', 'Quiet', "No animations, no dopamine, no leaderboards. The best UX is one you don't notice."],
]

const certs: Array<[string, string, string]> = [
  ['HIPAA','BAA in every deployment','Signed before any data access. Covered under §164.502(e)(1)(ii).'],
  ['SOC 2 TYPE II','Continuous audit · Q1 2026','Trust services criteria: security, availability, confidentiality.'],
  ['21 CFR PART 11','Electronic records, signatures','Audit trail, operational checks, authority checks, device checks.'],
  ['HITRUST CSF','Certified · v11','Cross‑mapped to HIPAA, NIST 800‑53, ISO 27001, PCI DSS.'],
  ['GDPR','EU data residency','Deployed in Frankfurt, Dublin, Stockholm for EU studies.'],
  ['ISO 27001','In progress · 2026','Information security management system, next audit Q3.'],
]

const arch: Array<[string, string]> = [
  ['Read the record in place.','Safar runs inside the health system boundary where possible — a container that sees the EHR but never ships PHI outbound. Where we operate hosted, data is encrypted in transit (TLS 1.3) and at rest (AES‑256) under per‑tenant keys in KMS.'],
  ['No PHI leaves a signed environment.','Every deployment is governed by a BAA and a DPA. PHI is tenant‑isolated. There is no global user table. There is no shared training corpus. Models are scoped per protocol, not per industry.'],
  ['Access is principled.','Short‑lived, just‑in‑time credentials. MFA on everything. Break‑glass access is logged, alerted, and reviewed weekly by the CTO and outside counsel. No one at Safar can read a single note without an audit record.'],
  ["Every match is auditable.",'Every query, score, and evidence trace writes to an immutable append‑only log. We export the full audit to the sponsor’s TMF on request. Revocation is one click and propagates in under 60 seconds.'],
]

const METHOD_CSS = `
  .mh-hero{position:relative;height:min(640px,78vh);min-height:480px;border-bottom:0.5px solid var(--border);overflow:hidden}
  .ss-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0}
  .abt-snapshot-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; }
  .abt-snapshot-grid > figure { margin: 0; padding: 28px; border-left: 0.5px solid var(--border); display: flex; flex-direction: column; gap: 16px; }
  .abt-snapshot-grid > figure:first-child { border-left: none; }
  .abt-snapshot-grid img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; display: block; }
  .abt-prn-split { display: grid; grid-template-columns: 1.05fr 1.4fr; gap: 0; align-items: stretch; border-top: 0.5px solid var(--border); }
  .abt-prn-fig { background: var(--forest); position: relative; overflow: hidden; min-height: 720px; }
  .abt-prn-fig img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
  .abt-prn-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-left: 0.5px solid var(--border); }
  .abt-prn-list > div { padding: 36px 32px; border-left: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); }
  .abt-prn-list > div:nth-child(2n+1) { border-left: none; }
  .abt-prn-list > div:nth-last-child(-n+2) { border-bottom: none; }
  .abt-team-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; }
  .abt-team-grid > div { padding: 32px 24px; border-left: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); }
  .abt-team-grid > div:nth-child(3n+1) { border-left: none; }
  .abt-team-grid > div:nth-last-child(-n+3) { border-bottom: none; }
  .abt-portrait { width: 100%; aspect-ratio: 4 / 5; background: var(--forest); margin-bottom: 18px; position: relative; overflow: hidden; }
  .abt-portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .abt-route-split { display: grid; grid-template-columns: 0.85fr 1.6fr; gap: 0; align-items: stretch; }
  .abt-route-image { position: relative; min-height: 560px; }
  .abt-route-image img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
  .abt-route-content { padding: 56px 40px 56px 48px; border-left: 0.5px solid rgba(241,239,232,0.16); display: flex; flex-direction: column; justify-content: center; }
  .abt-route-row { display: grid; grid-template-columns: 76px 1fr; gap: 6px 20px; padding: 18px 0; border-top: 0.5px solid rgba(241,239,232,0.16); align-items: baseline; }
  .abt-route-row > .abt-route-tag { grid-column: 2; font-size: 10px; }
  .abt-route-row > .abt-route-body { grid-column: 1 / 3; margin-top: 2px; }
  .abt-route-row > .abt-route-meta { grid-column: 1 / 3; font-size: 9.5px; opacity: 0.75; margin-top: 2px; }
  .abt-contact-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; }
  .abt-contact-grid > div { padding: 28px 24px; border-left: 0.5px solid var(--border); }
  .abt-contact-grid > div:first-child { border-left: none; padding-left: 0; }

  @media(max-width:860px){
    .mh-hero{height:auto;min-height:520px;padding:96px 24px 64px}
    .mh-title{font-size:52px!important}
    .ss-grid{grid-template-columns:1fr}
    .ss-cell{border-right:none!important;border-bottom:0.5px solid var(--border)!important;padding:32px 0!important}
    .ss-cell:last-child{border-bottom:none!important}
    .abt-snapshot-grid, .abt-team-grid, .abt-contact-grid { grid-template-columns: 1fr 1fr; }
    .abt-team-grid > div:nth-child(3n+1),
    .abt-contact-grid > div:first-child { border-left: 0.5px solid var(--border); }
    .abt-team-grid > div:nth-child(2n+1),
    .abt-contact-grid > div:nth-child(2n+1) { border-left: none; }
    .abt-team-grid > div:nth-last-child(-n+3) { border-bottom: 0.5px solid var(--border); }
    .abt-team-grid > div:nth-last-child(-n+2) { border-bottom: none; }
    .abt-prn-split { grid-template-columns: 1fr; }
    .abt-prn-fig { min-height: 420px; }
    .abt-prn-list { border-left: none; border-top: 0.5px solid var(--border); }
    .abt-route-split { grid-template-columns: 1fr; }
    .abt-route-image { min-height: 380px; }
    .abt-route-content { border-left: none; border-top: 0.5px solid rgba(241,239,232,0.16); padding: 40px 24px; }
    .abt-snapshot-grid > figure { padding: 20px 0; border-left: none; border-top: 0.5px solid var(--border); }
    .abt-snapshot-grid > figure:first-child { border-top: none; padding-top: 0; }
  }
  @media (max-width: 480px) {
    .abt-snapshot-grid, .abt-team-grid, .abt-contact-grid { grid-template-columns: 1fr; }
    .abt-prn-list { grid-template-columns: 1fr; }
    .abt-prn-list > div { border-left: none !important; padding: 28px 0; }
    .abt-prn-list > div:nth-last-child(-n+2) { border-bottom: 0.5px solid var(--border); }
    .abt-prn-list > div:last-child { border-bottom: none; }
    .abt-team-grid > div, .abt-contact-grid > div {
      border-left: none !important; padding-left: 0; padding-right: 0;
    }
    .abt-contact-grid > div { border-top: 0.5px solid var(--border); padding: 20px 0; }
    .abt-contact-grid > div:first-child { border-top: none; padding-top: 0; }
  }
`

export default function MethodPage() {
  return (
    <PageShell>
      <style>{METHOD_CSS}</style>

      {/* Hero with photo background */}
      <section className="mh-hero">
        <Image
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit:'cover', filter:'grayscale(0.15) contrast(1.05)' }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(17,42,22,0.30) 0%, rgba(17,42,22,0.78) 100%)' }} />
        <div style={{ position:'relative', height:'100%', display:'flex', alignItems:'flex-end', padding:'72px 32px' }}>
          <div style={{ maxWidth:1200 }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--lime)' }}>— THE METHOD</span>
            <h1 className="mh-title" style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.045em', lineHeight:0.95, fontSize:'clamp(56px,8vw,112px)', margin:'18px 0 24px', color:'var(--cream)' }}>
              Enrollment as a <span style={{ fontStyle:'italic', color:'var(--lime)' }}>routing problem.</span>
            </h1>
            <p style={{ fontSize:17, lineHeight:1.55, color:'rgba(241,239,232,0.88)', maxWidth:'58ch' }}>
              Safar reads the record a clinician already uses and surfaces trial‑eligible patients at the moment of decision. No mailers. No dashboards. No black boxes.
            </p>
          </div>
        </div>
      </section>

      {/* SNAPSHOT BAND — three editorial visuals */}
      <section style={{ padding: '48px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
        <div className="abt-snapshot-grid">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/snapshot-1.svg" alt="A routing path from protocol through feasibility, chart, to match" />
            <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)' }}>— THE ROUTE</figcaption>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 }}>Every match traces a path: protocol to feasibility to chart to clinician. We make each step a logged event.</p>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/snapshot-2.svg" alt="A ledger of timestamped match, consent, and enrollment events" />
            <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)' }}>— THE LEDGER</figcaption>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 }}>Immutable. Hashed consents. Auditable amendments. The artifact your monitor actually wants.</p>
          </figure>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/snapshot-3.svg" alt="Real-time analytics and dashboards across sites and sponsors" />
            <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)' }}>— REAL‑TIME ANALYTICS</figcaption>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 }}>Live dashboards for sponsors, sites, and physicians. Every match, screen, and enrollment surfaced the moment it lands.</p>
          </figure>
        </div>
      </section>

      {/* PRINCIPLES — split: specimen left, 6 principles right */}
      <section style={{ padding: '72px 32px 0', borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, marginBottom: 32, borderBottom: '0.5px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— OPERATING PRINCIPLES</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>SIX · NON‑NEGOTIABLE</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            fontSize: 'clamp(36px, 5vw, 60px)',
            margin: '0 0 12px',
            color: 'var(--forest)',
            maxWidth: '22ch',
          }}
        >
          How we work — <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>in six lines.</span>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 0 40px', maxWidth: '60ch' }}>
          The model on the left is the actual routing graph. Sponsor protocol parses, lands in the chart, the PI signs off, the patient signs in. Six rules govern every transit.
        </p>
        <div className="abt-prn-split">
          <figure className="abt-prn-fig" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/principles-specimen.svg" alt="Routing model showing how a protocol travels from sponsor to site to chart to patient consent" />
          </figure>
          <div className="abt-prn-list">
            {principles.map(([n, head, body]) => (
              <div key={n}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--brand)' }}>— {n}</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0, color: 'var(--forest)' }}>{head}</h3>
                <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: 'var(--fg-2)', margin: '10px 0 0' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY · INTRO */}
      <section style={{ padding:'88px 32px 24px', borderBottom:'0.5px solid var(--border)' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase' }}>— SECURITY · THE FLOOR, NOT THE CEILING</span>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:'clamp(40px,5vw,68px)', margin:'18px 0 24px', color:'var(--forest)', maxWidth:'24ch' }}>
          We read the record <span style={{ fontStyle:'italic', color:'var(--brand)' }}>without ever owning it.</span>
        </h2>
        <p style={{ fontSize:16, lineHeight:1.6, color:'var(--fg-2)', maxWidth:'58ch', margin:'0 0 32px' }}>
          Safar Clinical operates under BAAs in every deployment, SOC 2 Type II, HITRUST CSF, and 21 CFR Part 11. What follows is not a marketing page — it&apos;s the operating posture we put in writing.
        </p>
      </section>

      {/* SECURITY · ATTESTATIONS */}
      <section style={{ padding:'56px 32px 88px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase' }}>— ATTESTATIONS</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)', cursor:'pointer' }}>REQUEST REPORT ↗</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:0 }}>
          {certs.map(([name,status,detail],i) => (
            <div key={i} style={{ padding:'28px 28px 28px 0', paddingLeft: i%3===0 ? 0 : 28, borderLeft: i%3===0 ? 'none' : '0.5px solid var(--border)', borderBottom: i<3 ? '0.5px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--brand)' }}>— {name}</div>
              <div style={{ marginTop:14, fontFamily:'var(--font-display)', fontSize:22, letterSpacing:'-0.025em', color:'var(--forest)' }}>{status}</div>
              <div style={{ marginTop:10, fontSize:13, color:'var(--fg-2)', lineHeight:1.5 }}>{detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY · ARCHITECTURE */}
      <section style={{ padding:'96px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)', textTransform:'uppercase' }}>— ARCHITECTURE</span>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.04em', lineHeight:0.98, fontSize:'clamp(44px,5vw,72px)', margin:'20px 0 56px', color:'var(--forest)', maxWidth:'20ch' }}>
          Four commitments we <span style={{ fontStyle:'italic', color:'var(--brand)' }}>put in writing.</span>
        </h2>
        {arch.map(([title,body],i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'80px 1fr 2fr', gap:32, padding:'36px 0', borderTop:'0.5px solid var(--border)', alignItems:'start' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--brand)' }}>— 0{i+1}</span>
            <div style={{ fontFamily:'var(--font-display)', fontSize:26, letterSpacing:'-0.03em', lineHeight:1.05, color:'var(--forest)' }}>{title}</div>
            <p style={{ fontSize:14.5, lineHeight:1.65, color:'var(--fg-2)' }}>{body}</p>
          </div>
        ))}
      </section>

      {/* SECURITY · DISCLOSURE / VENDOR / QUESTIONNAIRE */}
      <section style={{ padding:'72px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
          {[['SECURITY QUESTIONNAIRE','We respond within 48h.','security@safar.clinical'],['VENDOR RISK','Full SIG + CAIQ available.','vendors@safar.clinical']].map(([k,v,c],i) => (
            <div key={i} style={{ borderLeft: i===0 ? 'none' : '0.5px solid rgba(241,239,232,0.14)', paddingLeft: i===0 ? 0 : 28 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)' }}>— {k}</div>
              <div style={{ marginTop:12, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, letterSpacing:'-0.02em', color:'var(--cream)', lineHeight:1.15 }}>{v}</div>
              <span style={{ marginTop:10, display:'inline-block', fontSize:13, color:'var(--lime)', textDecoration:'underline', textUnderlineOffset:4, textDecorationThickness:'0.5px' }}>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '64px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, marginBottom: 28, borderBottom: '0.5px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— CONTACT · THREE INBOXES</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>RESPONSE WITHIN 1 BUSINESS DAY</span>
        </div>
        <div className="abt-contact-grid">
          {([
            ['press@safar.clinical', 'Press', 'Editorial requests, briefings, embargoed numbers.'],
            ['careers@safar.clinical', 'Careers', 'Seven open roles. Clinical, eng, regulatory.'],
            ['hello@safar.clinical', 'Everything else', 'Sponsors, sites, partnerships, the curious.'],
          ] as const).map(([email, label, sub]) => (
            <div key={email}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>— {label}</div>
              <a
                href={`mailto:${email}`}
                style={{
                  marginTop: 14,
                  display: 'inline-block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 22,
                  letterSpacing: '-0.02em',
                  color: 'var(--brand)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 4,
                  textDecorationThickness: '0.5px',
                  wordBreak: 'break-all',
                }}
              >
                {email}
              </a>
              <p style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55, color: 'var(--fg-2)', margin: '10px 0 0' }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
