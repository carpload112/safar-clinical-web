import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import PageHeader from '@/components/PageHeader'
import SubscribeForm from '@/components/SubscribeForm'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = { title: 'Dispatch' }

const issues = [
  ['№ 024','2026‑04‑12','The rare‑disease paradox: why 5% of studies consume 40% of recruitment budgets — and what reads differently when you stop buying cohorts.','FIELD NOTE'],
  ['№ 023','2026‑03‑29','Evidence traces as a first‑class product surface — shipping the full chain of reasoning with every match.','BUILD LOG'],
  ['№ 022','2026‑03‑15','A post‑mortem on the Phase II NSCLC rescue: what the retrospective said nine months later.','CASE'],
  ['№ 021','2026‑03‑01','Six months of Part 11 audits — what inspectors actually ask about AI in trials.','REGULATORY'],
  ['№ 020','2026‑02‑17','Screen failure rate is a lagging signal of bad protocol writing. Here\'s the leading one.','FIELD NOTE'],
  ['№ 019','2026‑02‑03','Why we don\'t message patients — a note on consent architecture.','POSITION'],
  ['№ 018','2026‑01‑20','Reading notes without reading notes: extracting longitudinal signals from unstructured text at EHR scale.','BUILD LOG'],
  ['№ 017','2026‑01‑06','Our 2025 in four numbers, one chart, and a list of things we got wrong.','ANNUAL'],
  ['№ 016','2025‑12‑16','Site selection is still the most undervalued lever in a Phase III budget.','FIELD NOTE'],
  ['№ 015','2025‑12‑02','Seventeen rescues later: the common pattern in stuck enrollment.','FIELD NOTE'],
]

export default function DispatchPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="— DISPATCH · FIELD NOTES FROM THE WORK" title="Twice a month." italic="No marketing. No podcasts." sub="What we're learning at the edge of enrollment — post‑mortems, build logs, regulatory notes, and the occasional quiet disagreement with ourselves. Twelve hundred subscribers. Most of them our customers." />

      <section style={{ padding:'64px 32px', borderBottom:'0.5px solid var(--border)', background:'var(--surface)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
          <div>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)' }}>— SUBSCRIBE</span>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:400, fontSize:'clamp(32px,4vw,42px)', letterSpacing:'-0.03em', lineHeight:1.0, margin:'14px 0 10px', color:'var(--forest)' }}>
              Every other Sunday. <span style={{ fontStyle:'italic', color:'var(--brand)' }}>One email.</span>
            </h3>
            <p style={{ fontSize:14, lineHeight:1.6, color:'var(--fg-2)', maxWidth:'46ch' }}>No tracking pixels. No drip sequence. Unsubscribe is one click and we forget you exist.</p>
          </div>
          <SubscribeForm />
        </div>
      </section>

      <section style={{ padding:'72px 32px', borderBottom:'0.5px solid var(--border)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:20, borderBottom:'0.5px solid var(--border)', marginBottom:4, gap:12, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>— THE ARCHIVE · 24 ISSUES</span>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>SHOWING TEN · MOST RECENT</span>
        </div>
        <style>{`.issue-row{transition:background 200ms var(--ease),padding-left 200ms var(--ease)}.issue-row:hover{background:var(--surface);padding-left:16px;padding-right:16px}`}</style>
        {issues.map(([num,date,title,tag],i) => (
          <a key={i} href="#" className="issue-row" style={{ display:'grid', gridTemplateColumns:'130px 110px 1fr 140px', gap:24, padding:'28px 0', borderBottom:'0.5px solid var(--border)', alignItems:'baseline', textDecoration:'none', color:'inherit' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--brand)' }}>{num}</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', color:'var(--fg-3)' }}>{date}</span>
            <span style={{ fontFamily:'var(--font-display)', fontSize:22, letterSpacing:'-0.025em', lineHeight:1.2, color:'var(--forest)' }}>{title}</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)', textAlign:'right' }}>{tag}</span>
          </a>
        ))}
      </section>

      <CtaBand />
    </PageShell>
  )
}
