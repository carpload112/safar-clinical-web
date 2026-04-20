import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'Security' }

const certs = [
  ['HIPAA','BAA in every deployment','Signed before any data access. Covered under §164.502(e)(1)(ii).'],
  ['SOC 2 TYPE II','Continuous audit · Q1 2026','Trust services criteria: security, availability, confidentiality.'],
  ['21 CFR PART 11','Electronic records, signatures','Audit trail, operational checks, authority checks, device checks.'],
  ['HITRUST CSF','Certified · v11','Cross‑mapped to HIPAA, NIST 800‑53, ISO 27001, PCI DSS.'],
  ['GDPR','EU data residency','Deployed in Frankfurt, Dublin, Stockholm for EU studies.'],
  ['ISO 27001','In progress · 2026','Information security management system, next audit Q3.'],
]

const arch = [
  ['Read the record in place.','Safar runs inside the health system boundary where possible — a container that sees the EHR but never ships PHI outbound. Where we operate hosted, data is encrypted in transit (TLS 1.3) and at rest (AES‑256) under per‑tenant keys in KMS.'],
  ['No PHI leaves a signed environment.','Every deployment is governed by a BAA and a DPA. PHI is tenant‑isolated. There is no global user table. There is no shared training corpus. Models are scoped per protocol, not per industry.'],
  ['Access is principled.','Short‑lived, just‑in‑time credentials. MFA on everything. Break‑glass access is logged, alerted, and reviewed weekly by the CTO and outside counsel. No one at Safar can read a single note without an audit record.'],
  ['Every match is auditable.','Every query, score, and evidence trace writes to an immutable append‑only log. We export the full audit to the sponsor\'s TMF on request. Revocation is one click and propagates in under 60 seconds.'],
]

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="— SECURITY · THE FLOOR, NOT THE CEILING" title="We read the record" italic="without ever owning it." sub="Safar Clinical operates under BAAs in every deployment, SOC 2 Type II, HITRUST CSF, and 21 CFR Part 11. What follows is not a marketing page — it's the operating posture we put in writing." />

      <section style={{ padding:'88px 32px', borderBottom:'0.5px solid var(--border)' }}>
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

      <section style={{ padding:'72px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--forest)', color:'var(--cream)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:32 }}>
          {[['SECURITY QUESTIONNAIRE','We respond within 48h.','security@safar.clinical'],['RESPONSIBLE DISCLOSURE','Bug bounty via HackerOne.','h1.com/safar‑clinical'],['VENDOR RISK','Full SIG + CAIQ available.','vendors@safar.clinical']].map(([k,v,c],i) => (
            <div key={i} style={{ borderLeft: i===0 ? 'none' : '0.5px solid rgba(241,239,232,0.14)', paddingLeft: i===0 ? 0 : 28 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)' }}>— {k}</div>
              <div style={{ marginTop:12, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, letterSpacing:'-0.02em', color:'var(--cream)', lineHeight:1.15 }}>{v}</div>
              <a style={{ marginTop:10, display:'inline-block', fontSize:13, color:'var(--lime)', textDecoration:'underline', textUnderlineOffset:4, textDecorationThickness:'0.5px', cursor:'pointer' }}>{c}</a>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
