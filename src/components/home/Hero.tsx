'use client'
import Image from 'next/image'
import { useOpenCta } from '../CtaContext'

export default function Hero() {
  const openCta = useOpenCta()
  return (
    <section style={{ padding: '80px 32px 56px', borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', borderLeft: '0.5px solid var(--border)', borderRight: '0.5px solid var(--border)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <style>{`
        @keyframes compassDrift {
          0%,100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(3deg) scale(1.01); }
          66% { transform: rotate(-2deg) scale(0.99); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-meta { animation: heroFadeUp 600ms cubic-bezier(.2,.6,.2,1) 0ms both; }
        .hero-h1 { animation: heroFadeUp 600ms cubic-bezier(.2,.6,.2,1) 80ms both; }
        .hero-aside { animation: heroFadeUp 600ms cubic-bezier(.2,.6,.2,1) 160ms both; }
        .hero-stats { animation: heroFadeUp 600ms cubic-bezier(.2,.6,.2,1) 240ms both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-meta, .hero-h1, .hero-aside, .hero-stats { animation: none !important; }
          .hero-compass { animation: none !important; }
        }
        @media(max-width:860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-h1 { font-size: clamp(40px,10vw,72px) !important; }
          .hero-portraits { width: 86% !important; margin-left: 0 !important; justify-self: center !important; }
        }
        @media(max-width:480px) {
          .hero-portraits { width: 100% !important; gap: 12px !important; }
        }
      `}</style>
      <img
        src="/assets/compass-rose.svg"
        alt=""
        aria-hidden
        className="hero-compass"
        style={{
          position: 'absolute', right: -160, top: -100,
          width: 680, height: 680, opacity: 0.055, pointerEvents: 'none',
          animation: 'compassDrift 14s ease-in-out infinite',
        }}
      />
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Meta bar */}
        <div className="hero-meta" style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>HIPAA · SOC 2 · 21 CFR PART 11</span>
        </div>

        {/* 2-col grid */}
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 16, alignItems: 'stretch' }}>
          <div className="hero-left" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(48px,6.6vw,96px)',
                letterSpacing: '-0.045em', lineHeight: 0.95,
                color: 'var(--forest)',
              }}
            >
              The patients<br/>already exist.<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Safar finds them.</span>
            </h1>
            <p className="hero-aside" style={{ marginTop: 40, fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: '46ch' }}>
              Safar acts as the data layer and intermediary between an EHR and an EDC/CTMS. We read Epic, Cerner, and FHIR endpoints to surface trial-eligible patients at the moment of clinical — before they leave the system, before they miss the window.
            </p>
            <div className="hero-aside" style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
              <button
                onClick={openCta}
                style={{
                  background: 'none', border: 0, padding: 0,
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: 22, letterSpacing: '-0.02em',
                  color: 'var(--forest)', cursor: 'pointer',
                  textDecoration: 'underline', textUnderlineOffset: 6,
                  textDecorationThickness: '0.5px',
                }}
              >
                Request a walkthrough →
              </button>
              <a
                href="/method"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'var(--fg-3)', textDecoration: 'none',
                }}
              >
                Read the method ↗
              </a>
            </div>
          </div>

          {/* Patient images — triangle of three, left-aligned so the compass shows on the right */}
          <div className="hero-portraits hero-aside" style={{ alignSelf: 'center', justifySelf: 'start', width: '70%', marginLeft: -8, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto', gap: 18 }}>
            {[
              { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=90&dpr=2', alt: 'A patient, smiling',         col: '2 / span 2', row: 1 },
              { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=90&dpr=2', alt: 'A patient, at ease',         col: '1 / span 2', row: 2 },
              { src: 'https://plus.unsplash.com/premium_photo-1681884400104-84e5a13e73d1?fm=jpg&fit=crop&w=2400&q=95&dpr=2', alt: 'A daughter hugging her senior father', col: '3 / span 2', row: 2 },
            ].map(p => (
              <div key={p.src} style={{ gridColumn: p.col, gridRow: p.row, width: '100%', paddingTop: '100%', position: 'relative', overflow: 'hidden', borderRadius: '50%' }}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width:860px) 40vw, 220px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
