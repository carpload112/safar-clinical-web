import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'For Physicians' }

const promises: Array<[string, string]> = [
  ['No new login.', "Safar appears inside the chart you're already in. Epic, Cerner, athena, MEDITECH. One row, one keystroke."],
  ['You decide. Always.', "Safar flags. You accept, defer, or decline — with a reason. We never message the patient. We never write a note."],
  ['Evidence on every match.', 'Every flag carries the criteria, the source notes, and the lab values that produced the score. No black box.'],
  ['Read‑only, audited, revocable.', 'We operate inside your boundary, under your BAA. You can revoke our read in sixty seconds. Every event is logged.'],
]

const stages: Array<[string, string]> = [
  ['IN THE CHART', 'A subtle Safar chip on eligible patients. No interruptions. One click expands the evidence drawer.'],
  ['AT THE VISIT', 'Review the match where you already have the patient open. Accept, defer, decline.'],
  ['TO THE COORDINATOR', 'Accepted matches land in your existing research coordinator queue. Outreach and consent follow your SOPs.'],
  ['CLOSING THE LOOP', 'Status, screening result, and enrollment land back in the chart — the same place you started.'],
]

export default function ForPhysiciansPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="— FOR PHYSICIANS · PIs, ATTENDINGS, FELLOWS"
        title="A clinical tool"
        italic="that respects your time."
        sub="You already know which of your patients might fit a trial. Safar reads the same chart you do, surfaces the match at the moment of decision, and never asks you to leave the record. No portal. No message to the patient. You stay in charge."
      />

      <section style={{ padding: '80px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--surface)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>— FOUR PROMISES TO THE PHYSICIAN</span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 0.98,
            fontSize: 'clamp(40px,5vw,72px)',
            margin: '20px 0 56px',
            color: 'var(--forest)',
            maxWidth: '22ch',
          }}
        >
          You stay <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>the trusted party.</span>
        </h2>
        {promises.map(([t, b], i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 2fr',
              gap: 32,
              padding: '32px 0',
              borderTop: '0.5px solid var(--border)',
              alignItems: 'start',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--brand)' }}>— 0{i + 1}</span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--forest)' }}>{t}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--fg-2)' }}>{b}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: '80px 32px', borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 28, borderBottom: '0.5px solid var(--border)', marginBottom: 8, gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--brand)' }}>— THE PATH OF A MATCH · IN YOUR DAY</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>FOUR TOUCHPOINTS · ZERO NEW UI</span>
        </div>
        <div className="fp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0 }}>
          <style>{`
            @media (max-width: 860px) {
              .fp-grid { grid-template-columns: 1fr 1fr !important; }
              .fp-grid > div:nth-child(odd) { border-left: none !important; padding-left: 0 !important; }
              .fp-grid > div:nth-child(even) { border-left: 0.5px solid var(--border) !important; padding-left: 24px !important; }
              .fp-grid > div:nth-child(-n+2) { border-bottom: 0.5px solid var(--border) !important; }
              .fp-grid > div { padding-top: 32px !important; padding-bottom: 32px !important; }
            }
            @media (max-width: 480px) {
              .fp-grid { grid-template-columns: 1fr !important; }
              .fp-grid > div { border-left: none !important; padding-left: 0 !important; border-top: 0.5px solid var(--border); border-bottom: none !important; padding: 28px 0 !important; }
              .fp-grid > div:first-child { border-top: none !important; padding-top: 0 !important; }
            }
          `}</style>
          {stages.map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: '40px 24px 40px 0',
                paddingLeft: i === 0 ? 0 : 24,
                borderLeft: i === 0 ? 'none' : '0.5px solid var(--border)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--brand)' }}>— STAGE 0{i + 1}</span>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--forest)' }}>{k}</div>
              <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.6, color: 'var(--fg-2)' }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: '88px 32px',
          borderBottom: '0.5px solid var(--border)',
          background: 'var(--forest)',
          color: 'var(--cream)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/compass-rose.svg"
          alt=""
          aria-hidden
          className="sf-bg-compass"
          style={{ position: 'absolute', right: -180, top: -200, width: 560, height: 560, opacity: 0.06, filter: 'brightness(2.5)', pointerEvents: 'none' }}
        />
        <div style={{ position: 'relative', maxWidth: 980 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--lime)' }}>— FROM THE FIELD</span>
          <blockquote
            className="pq-text"
            style={{
              margin: '24px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(32px,4vw,56px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--cream)',
            }}
          >
            &ldquo;The match was already on the chart when I opened it. Two of my patients in one morning. I said yes to one, deferred the other for a re‑imaging — both auditable, both back in the record. I didn&rsquo;t leave my workflow once.&rdquo;
          </blockquote>
          <div style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--sage-soft)' }}>
            — DR. AMINA OKONKWO · PI · HEMATOLOGY
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  )
}
