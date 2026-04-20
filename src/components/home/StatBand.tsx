'use client'
import { useEffect, useRef, useState } from 'react'

const rows = [
  { metric: 'Match rate', safar: '37.2%', baseline: '4.7%', delta: '+7.9×', context: 'Across 14 sponsor studies · Q1 2026', bar: 0.89 },
  { metric: 'Weeks to LPI', safar: '9', baseline: '47', delta: '−80.9%', context: 'Phase II oncology · 240 patients · 6 sites', bar: 0.19 },
  { metric: 'Sites routed', safar: '312', baseline: '—', delta: '28 systems', context: 'Epic · Cerner · athenahealth · MEDITECH', bar: 1 },
  { metric: 'Screen‑fail rate', safar: '8.1%', baseline: '26.4%', delta: '−69.3%', context: 'Matches that advanced to consent', bar: 0.31 },
]

export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ padding: '80px 32px', borderBottom: '0.5px solid var(--border)', background: 'var(--cream)' }}>
      <style>{`
        @keyframes barGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(var(--bar)); }
        }
        .stat-bar-fill {
          transform-origin: left;
          transform: scaleX(0);
        }
        .stat-bar-fill.animated {
          animation: barGrow 900ms cubic-bezier(.2,.6,.2,1) forwards;
        }
      `}</style>

      <div style={{ marginBottom: 32 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>— PERFORMANCE · MEASURED</span>
      </div>

      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 2fr', gap: 0, borderBottom: '0.5px solid var(--border)', paddingBottom: 10, marginBottom: 4 }}>
        {['Metric', 'Safar', 'Baseline', 'Δ', 'Context'].map((h, i) => (
          <span key={h} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-3)', textAlign: i >= 1 ? 'right' : 'left', paddingRight: i < 4 ? 24 : 0 }}>{h}</span>
        ))}
      </div>

      {rows.map((r, idx) => (
        <div key={r.metric} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 2fr', gap: 0, borderBottom: '0.5px solid var(--border)', padding: '20px 0', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '-0.025em', color: 'var(--forest)' }}>{r.metric}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.04em', color: 'var(--brand)', textAlign: 'right', paddingRight: 24 }}>{r.safar}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', textAlign: 'right', paddingRight: 24 }}>{r.baseline}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--lime)', textAlign: 'right', paddingRight: 24 }}>{r.delta}</span>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', display: 'block', marginBottom: 8 }}>{r.context}</span>
            <div style={{ height: 2, background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
              <div
                className={`stat-bar-fill${animated ? ' animated' : ''}`}
                style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(90deg, var(--brand) 0%, var(--lime) 100%)`,
                  ['--bar' as string]: r.bar,
                  animationDelay: `${idx * 120}ms`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
