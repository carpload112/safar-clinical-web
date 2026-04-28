'use client'
import Image from 'next/image'
import { useOpenCta } from '../CtaContext'

export default function Hero() {
  const openCta = useOpenCta()
  return (
    <section style={{ padding: '80px 32px 96px', borderBottom: '0.5px solid var(--border)', position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
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
        @media(max-width:860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: clamp(40px,10vw,72px) !important; }
        }
      `}</style>
      <img
        src="/assets/compass-rose.svg"
        alt=""
        aria-hidden
        style={{
          position: 'absolute', right: -160, top: -100,
          width: 680, height: 680, opacity: 0.055, pointerEvents: 'none',
          animation: 'compassDrift 14s ease-in-out infinite',
        }}
      />
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Meta bar */}
        <div className="hero-meta" style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)', boxShadow: '0 0 0 2px rgba(90,157,41,0.25)' }}/>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>LIVE · 312 SITES · 28 HEALTH SYSTEMS</span>
          </div>
          <span style={{ width: 1, height: 14, background: 'var(--border)', display: 'inline-block' }}/>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-3)' }}>HIPAA · SOC 2 · 21 CFR PART 11</span>
        </div>

        {/* 2-col grid */}
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 72, alignItems: 'start' }}>
          <div>
            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 400,
                fontSize: 'clamp(52px,7.5vw,108px)',
                letterSpacing: '-0.045em', lineHeight: 0.95,
                color: 'var(--forest)',
              }}
            >
              The patients<br/>already exist.<br/>We just find<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>them first.</span>
            </h1>
          </div>

          <div className="hero-aside" style={{ paddingTop: 8 }}>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: '38ch' }}>
              Safar reads Epic, Cerner and FHIR endpoints to surface trial-eligible patients at the moment of clinical decision — before they leave the system, before they miss the window.
            </p>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
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

            {/* Patient portrait */}
            <figure className="hero-aside" style={{ margin: '40px 0 0', display: 'flex', gap: 16, alignItems: 'center', paddingTop: 24, borderTop: '0.5px solid var(--border)' }}>
              <div style={{ width: 88, height: 88, position: 'relative', flexShrink: 0, border: '0.5px solid var(--border)', overflow: 'hidden', borderRadius: '50%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=70"
                  alt="A patient at the moment of clinical decision"
                  fill
                  sizes="88px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption>
                <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, letterSpacing: '-0.02em', color: 'var(--forest)', lineHeight: 1.15 }}>
                  Behind every match, a person.
                </div>
                <div style={{ marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.16em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>
                  — ILLUSTRATIVE · PATIENT JOURNEY
                </div>
              </figcaption>
            </figure>

            {/* Mini stats */}
            <div className="hero-stats" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderTop: '0.5px solid var(--border)', paddingTop: 20 }}>
              {[
                ['37.2%', 'match rate'],
                ['9 wk', 'to LPI'],
                ['312', 'sites'],
              ].map(([val, label], i) => (
                <div key={label} style={{ paddingRight: 16, borderRight: i < 2 ? '0.5px solid var(--border)' : 'none', paddingLeft: i > 0 ? 16 : 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.04em', color: 'var(--brand)', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: 'var(--fg-3)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
