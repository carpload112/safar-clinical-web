import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'About' }

const team: Array<[string, string, string, string]> = [
  ['Asha Patel', 'Co‑founder · CEO', 'Oncologist. A decade in real‑world data before this.', 'EAST'],
  ['Mira Chen', 'Co‑founder · CTO', "EHR integrations engineer. FHIR + HL7 for longer than she'd like.", 'WEST'],
  ['Dr. Rohan Osei', 'Chief Medical Officer', "Trialist. Has run the screen‑fail meetings you're trying to avoid.", 'NORTH'],
  ['Sara Lindgren', 'Head of Regulatory', 'Part 11 + GCP. Writes the audit responses sponsors actually read.', 'SOUTH'],
  ['Daniel Kemp', 'VP Engineering', 'Distributed systems. Has opinions about eventual consistency in charts.', 'SE'],
  ['Isabel Ferreira', 'VP Clinical', 'Coordinator‑turned‑PM. Knows where the real friction lives.', 'NW'],
]

const milestones: Array<[string, string, string, string, string]> = [
  ['2023', 'Q2', 'Founded', 'First protocol routed end‑to‑end inside a live EHR.', '1 site · NYC'],
  ['2024', 'Q1', 'SOC 2 Type II', 'Continuous audit. BAA templates standardized.', '3 sites'],
  ['2024', 'Q4', '21 CFR Part 11', 'Signed attestation. First sponsor partnership live.', '8 sites · 2 sponsors'],
  ['2025', 'Q3', 'HITRUST CSF', 'Cross‑mapped controls. First multi‑site rescue completed.', '21 sites · 6 sponsors'],
  ['2025', 'Q4', 'Epic + Cerner', 'Certified integrations. Sites onboarding self‑serve.', '32 sites · 9 sponsors'],
  ['2026', 'Now', 'Today', 'Working with pharma, biotech, CROs, and academic medical centers.', '38 sites · 12 sponsors'],
]

const principles: Array<[string, string, string]> = [
  ['01', 'Routed, not broadcast', "A trial doesn't need another email blast. It needs to land on the one chart where it applies."],
  ['02', 'Clinician in the loop', 'The PI sees every match before the patient does. No cold outreach.'],
  ['03', 'Inside the EHR', 'Epic, Cerner, Meditech. We live where the work already happens.'],
  ['04', 'Audited by default', 'Every match is timestamped. Every consent is hashed. The ledger is the product.'],
  ['05', 'Patient‑controlled consent', 'The patient authorizes disclosure, not the vendor. We never move PHI without a signature.'],
  ['06', 'Quiet', "No animations, no dopamine, no leaderboards. The best UX is one you don't notice."],
]

const ABOUT_CSS = `
  .abt-hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: stretch; }
  .abt-hero-visual { width: 100%; height: 100%; min-height: 520px; display: block; object-fit: cover; }
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

  @media (max-width: 860px) {
    .abt-hero-grid { grid-template-columns: 1fr; gap: 32px; }
    .abt-hero-visual { min-height: 380px; }
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
    .abt-snapshot-grid { padding: 0; }
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

export default function AboutPage() {
  return (
    <PageShell>
      <style>{ABOUT_CSS}</style>

      {/* HERO — split editorial with right-side compass visual */}
      <section className="sf-section" style={{ padding: 0, borderBottom: '0.5px solid var(--border)' }}>
        <div className="abt-hero-grid">
          <div style={{ padding: '72px 32px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— ABOUT · WHY WE EXIST</span>
            <h1
              className="sf-h1"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                letterSpacing: '-0.045em',
                lineHeight: 0.96,
                fontSize: 'clamp(48px, 7vw, 96px)',
                margin: '20px 0 24px',
                color: 'var(--forest)',
              }}
            >
              Trial matching is{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>a coordination mess.</span>
            </h1>
            <p className="sf-body-lg" style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: '44ch', margin: 0 }}>
              Sponsors write protocols. Sites estimate eligible patient counts from memory. Coordinators comb charts by hand. Patients hear about trials from ads, not their own doctor. Nobody owns the routing — and nobody audits the gap. We built Safar to sit there.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 24, alignItems: 'baseline', flexWrap: 'wrap' }}>
              <a href="mailto:hello@safar.clinical?subject=Walkthrough%20request" className="sf-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--brand)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>
                REQUEST A WALKTHROUGH →
              </a>
              <a href="/method" className="sf-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--fg-3)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
                READ THE METHOD →
              </a>
            </div>
          </div>
          <div style={{ background: 'var(--forest)', position: 'relative', overflow: 'hidden', minHeight: 520 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero-visual-about.svg" alt="Compass rose with topographic contour lines" className="abt-hero-visual" style={{ position: 'absolute', inset: 0 }} />
          </div>
        </div>
      </section>

      {/* SNAPSHOT BAND — three editorial visuals */}
      <section className="sf-section-tight" style={{ padding: '48px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, marginBottom: 24, borderBottom: '0.5px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— FIG. 01 · WHAT WE&apos;RE LOOKING AT</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>THREE VIEWS · ONE ROUTE</span>
        </div>
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
            <img src="/assets/snapshot-3.svg" alt="14,000 matches routed across 38 sites and 12 sponsors" />
            <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-3)' }}>— THE NUMBERS</figcaption>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-2)', margin: 0 }}>14,000 matches routed. 4,209 patients enrolled. 38 sites, 12 sponsors. Real, today.</p>
          </figure>
        </div>
      </section>

      {/* MANIFESTO PULL-QUOTE BAND */}
      <section className="sf-section" data-theme="dark" style={{ padding: '80px 32px', background: 'var(--forest)', color: 'var(--cream)', borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ maxWidth: 980 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--lime)' }}>— MANIFESTO · IN ONE BREATH</span>
          <p
            className="pq-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(34px, 4.4vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--cream)',
              margin: '24px 0 0',
              textWrap: 'pretty',
            }}
          >
            The eligible patient already exists. They are sitting in a clinic, in a chart, with a doctor who knows them.{' '}
            <span style={{ color: 'var(--lime)' }}>Trial matching isn&apos;t a discovery problem. It&apos;s a routing problem.</span>{' '}
            Until we treat it that way, the right patients keep missing the right studies.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 32, alignItems: 'baseline', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--sage-soft)', flexWrap: 'wrap' }}>
            <span>— A. PATEL · CO‑FOUNDER</span>
            <span>· 2023</span>
            <a href="/method" style={{ color: 'var(--lime)', textDecoration: 'underline', textUnderlineOffset: 3 }}>HOW IT WORKS →</a>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — split: specimen left, 6 principles right (2-col grid) */}
      <section className="sf-section" style={{ padding: '72px 32px 0', borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, marginBottom: 32, borderBottom: '0.5px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— FIG. 02 · OPERATING PRINCIPLES</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>SIX · NON‑NEGOTIABLE</span>
        </div>
        <h2
          className="sf-h2"
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
        <p className="sf-body-lg" style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: '0 0 40px', maxWidth: '60ch' }}>
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

      {/* TEAM — rich portrait gradient cards */}
      <section className="sf-section" style={{ padding: '80px 32px', borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, marginBottom: 40, borderBottom: '0.5px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— TEAM · CLINICAL · ENGINEERING · REGULATORY</span>
          <a href="mailto:careers@safar.clinical?subject=Open%20roles" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: 3 }}>OPEN ROLES — 7 ↗</a>
        </div>
        <h2
          className="sf-h2"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            fontSize: 'clamp(36px, 5vw, 64px)',
            margin: '0 0 48px',
            color: 'var(--forest)',
          }}
        >
          Twenty‑three people. <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Mostly clinicians.</span>
        </h2>
        <div className="abt-team-grid">
          {team.map(([name, role, bio, dir], i) => (
            <div key={name}>
              <div className="abt-portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/portrait-grad.svg" alt={`${name} portrait placeholder`} />
                <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--lime)' }}>— {String(i + 1).padStart(2, '0')}</div>
                <div style={{ position: 'absolute', top: 12, right: 12, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--sage-soft)' }}>{dir}</div>
                <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.14em', color: 'var(--sage-soft)' }}>
                  <span>PORTRAIT · TBD</span>
                  <span>{name.split(' ').map((s) => s[0]).join('').toUpperCase()}</span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.025em', color: 'var(--forest)', lineHeight: 1.1 }}>{name}</div>
              <div style={{ marginTop: 4, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--brand)', textTransform: 'uppercase' }}>{role}</div>
              <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.55, color: 'var(--fg-2)', margin: '12px 0 0' }}>{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROUTE / TIMELINE — split: large topo image left, milestones list right */}
      <section className="sf-section" data-theme="dark" style={{ background: 'var(--forest)', color: 'var(--cream)', borderBottom: '0.5px solid var(--border)' }}>
        <div className="abt-route-split">
          <figure className="abt-route-image" style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/route-side.svg" alt="Topographic survey showing Safar's route from 2023 to 2026" />
          </figure>
          <div className="abt-route-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 16, borderBottom: '0.5px solid rgba(241,239,232,0.16)', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--lime)' }}>— FIG. 03 · THE ROUTE SO FAR</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--sage-soft)' }}>2023 · 2026 · LIVE</span>
            </div>
            <h2
              className="sf-h2"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                fontSize: 'clamp(36px, 4.4vw, 56px)',
                margin: '20px 0 28px',
                color: 'var(--cream)',
              }}
            >
              Three years. <span style={{ fontStyle: 'italic', color: 'var(--lime)' }}>Six waypoints.</span>
            </h2>
            <div>
              {milestones.map(([y, q, head, body, meta], i) => (
                <div key={i} className="abt-route-row">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.03em', color: 'var(--lime)', lineHeight: 1 }}>{y}</span>
                  <span className="abt-route-tag" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--sage-soft)', textTransform: 'uppercase' }}>{q} · {head}</span>
                  <span className="abt-route-body" style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--cream)' }}>{body}</span>
                  <span className="abt-route-meta" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--sage-soft)' }}>{meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sf-section-tight" style={{ padding: '64px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
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
