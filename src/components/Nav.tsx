'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useOpenCta } from './CtaContext'

type MenuKey = 'Method' | 'Studies' | 'For sponsors' | 'For sites'

const menus: Record<MenuKey, {
  tag: string
  cols: [string, [string, string, string][]][]
  feature: { eyebrow: string; title: string; link: string; href: string }
}> = {
  'Method': {
    tag: '— HOW IT WORKS',
    cols: [
      ['Reading the record', [
        ['The Matcher', 'Live engine · 37.2% match rate', '/method'],
        ['Protocol parser', 'Criteria → structured query', '/method'],
        ['Routing to chart', 'In\u2011workflow decisions', '/method'],
      ]],
      ['Deep dives', [
        ['Security & compliance', 'HIPAA, SOC 2, Part 11', '/security'],
        ['Evidence & explainability', 'Every score, sourced', '/method'],
        ['Sample match report', 'A real output, redacted', '/method'],
      ]],
    ],
    feature: { eyebrow: '— DISPATCH VOL. 03', title: 'Enrollment as a routing problem, not a marketing problem.', link: 'Read the letter →', href: '/dispatch' }
  },
  'Studies': {
    tag: '— ACTIVE & ROUTED',
    cols: [
      ['By therapeutic area', [
        ['Oncology', '14 studies · 312 sites', '/studies'],
        ['Cardiology', '6 studies · 148 sites', '/studies'],
        ['Rare disease', '11 studies · 84 sites', '/studies'],
        ['Hematology', '4 studies · 62 sites', '/studies'],
      ]],
      ['By phase', [
        ['Phase I', 'First\u2011in\u2011human readiness', '/studies'],
        ['Phase II', 'Where Safar performs best', '/studies'],
        ['Phase III', 'Multi\u2011site, multi\u2011country', '/studies'],
        ['Registries', 'Long\u2011tail, real\u2011world', '/studies'],
      ]],
    ],
    feature: { eyebrow: '— CASE', title: 'Phase II NSCLC · 240 patients · 9 weeks to LPI.', link: 'Read the case →', href: '/studies' }
  },
  'For sponsors': {
    tag: '— WHO IT\'S FOR',
    cols: [
      ['Pharma & biotech', [
        ['Feasibility', 'Before the protocol is locked', '/for-sponsors'],
        ['Site selection', 'Grounded in the record', '/for-sponsors'],
        ['Rescue enrollment', 'For stuck studies', '/for-sponsors'],
      ]],
      ['CROs', [
        ['Site network augmentation', 'Read across your footprint', '/for-sponsors'],
        ['Pipeline hygiene', 'Fewer screen failures', '/for-sponsors'],
        ['Auditable routing', 'Every match, sourced', '/for-sponsors'],
      ]],
    ],
    feature: { eyebrow: '— PARTNERS', title: 'Deployed with 3 of the top\u201110 sponsors and 2 global CROs.', link: 'See partners →', href: '/for-sponsors' }
  },
  'For sites': {
    tag: '— IN THE CHART',
    cols: [
      ['Hospitals', [
        ['Academic medical centers', 'Integrated with Epic', '/for-sites'],
        ['Community hospitals', 'Via athena, Meditech', '/for-sites'],
        ['Integrated networks', 'Across facility boundaries', '/for-sites'],
      ]],
      ['Sites & investigators', [
        ['Principal investigators', 'Match review in the chart', '/for-sites'],
        ['Research coordinators', 'Queue, status, triage', '/for-sites'],
        ['Research leadership', 'Portfolio\u2011level visibility', '/for-sites'],
      ]],
    ],
    feature: { eyebrow: '— NO NEW DASHBOARD', title: 'A single row inside the record the clinician already has open.', link: 'See the flow →', href: '/for-sites' }
  },
}

const megaKeys = Object.keys(menus) as MenuKey[]

export default function Nav() {
  const openCta = useOpenCta()
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleEnter = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(key)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140)
  }

  return (
    <>
      <style>{`
        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link-underline {
          position: relative;
          text-decoration: none;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 0.5px;
          background: var(--forest);
          transition: width 200ms cubic-bezier(.2,.6,.2,1);
        }
        .nav-link-underline:hover::after { width: 100%; }
        .nav-mega-item:hover { opacity: 0.7; }
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 961px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30,
        background: scrolled ? 'rgba(241,239,232,0.92)' : 'var(--cream)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '0.5px solid var(--border)',
        transition: 'background 200ms, backdrop-filter 200ms',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', height: 64 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img
              src="https://2azfdphehc8ufmtf.public.blob.vercel-storage.com/Safar%20Clinical%20logo.png"
              alt="Safar Clinical"
              style={{ height: 80, width: 'auto' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {megaKeys.map(key => (
              <div
                key={key}
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
                style={{ position: 'relative' }}
              >
                <button
                  style={{
                    background: 'none', border: 0, padding: '4px 0',
                    fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--forest)',
                    cursor: 'pointer', letterSpacing: '0.01em',
                  }}
                  aria-expanded={activeMenu === key}
                >
                  {key}
                </button>
              </div>
            ))}
            <Link href="/security" className="nav-link-underline" style={{ fontSize: 13, color: 'var(--forest)' }}>Security</Link>
            <Link href="/dispatch" className="nav-link-underline" style={{ fontSize: 13, color: 'var(--forest)' }}>Dispatch</Link>
          </div>

          {/* Desktop right actions */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Link href="/sign-in" className="nav-link-underline" style={{ fontSize: 13, color: 'var(--fg-3)' }}>Sign in</Link>
            <button
              onClick={openCta}
              style={{
                background: 'var(--forest)', color: 'var(--cream)',
                border: 0, padding: '8px 18px',
                fontFamily: 'var(--font-body)', fontSize: 13,
                cursor: 'pointer', letterSpacing: '0.01em',
              }}
            >
              Request access →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 0, padding: 8,
              display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer'
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 1,
              background: 'var(--forest)',
              transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              transition: 'transform 200ms',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 1,
              background: 'var(--forest)',
              opacity: mobileOpen ? 0 : 1,
              transition: 'opacity 200ms',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 1,
              background: 'var(--forest)',
              transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              transition: 'transform 200ms',
            }}/>
          </button>
        </div>

        {/* Mega menu panel */}
        {activeMenu && (
          <div
            onMouseEnter={() => handleEnter(activeMenu)}
            onMouseLeave={handleLeave}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--cream)', borderBottom: '0.5px solid var(--border)',
              borderTop: '0.5px solid var(--border)',
              padding: '40px 32px',
              display: 'grid', gridTemplateColumns: '200px 1fr 1fr 280px', gap: 40,
              animation: 'menuFadeIn 160ms cubic-bezier(.2,.6,.2,1)',
              boxShadow: '0 8px 32px rgba(17,74,19,0.06)',
            }}
          >
            {/* Tag + italic title */}
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--fg-3)' }}>{menus[activeMenu].tag}</span>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 26, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--forest)' }}>
                {activeMenu}
              </div>
            </div>
            {/* Two content columns */}
            {menus[activeMenu].cols.map(([colTitle, colItems]) => (
              <div key={colTitle}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 16 }}>— {colTitle}</div>
                {colItems.map(([name, detail, href]) => (
                  <Link
                    key={name}
                    href={href}
                    className="nav-mega-item"
                    onClick={() => setActiveMenu(null)}
                    style={{ display: 'block', padding: '8px 0', borderBottom: '0.5px solid var(--border)', textDecoration: 'none', transition: 'opacity 140ms' }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--forest)' }}>{name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', marginTop: 2, letterSpacing: '0.04em' }}>{detail}</div>
                  </Link>
                ))}
              </div>
            ))}
            {/* Feature card */}
            <div style={{ background: 'var(--forest)', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.16em', color: 'var(--sage-soft)' }}>{menus[activeMenu].feature.eyebrow}</span>
                <p style={{ marginTop: 12, fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--cream)' }}>{menus[activeMenu].feature.title}</p>
              </div>
              <Link
                href={menus[activeMenu].feature.href}
                onClick={() => setActiveMenu(null)}
                style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--lime)', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationThickness: '0.5px' }}
              >
                {menus[activeMenu].feature.link}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 29,
          background: 'var(--cream)', paddingTop: 64,
          overflowY: 'auto',
        }}>
          <div style={{ padding: '32px 32px 48px' }}>
            {[...megaKeys, 'Security', 'Dispatch'].map(label => (
              <Link
                key={label}
                href={label === 'Security' ? '/security' : label === 'Dispatch' ? '/dispatch' : `/${label.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '14px 0',
                  borderBottom: '0.5px solid var(--border)',
                  fontFamily: 'var(--font-display)', fontSize: 24,
                  letterSpacing: '-0.03em', color: 'var(--forest)', textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link href="/sign-in" onClick={() => setMobileOpen(false)} style={{ fontSize: 13, color: 'var(--fg-3)', textDecoration: 'none' }}>Sign in</Link>
              <button
                onClick={() => { setMobileOpen(false); openCta() }}
                style={{
                  background: 'var(--forest)', color: 'var(--cream)',
                  border: 0, padding: '12px 24px',
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  cursor: 'pointer', alignSelf: 'flex-start',
                }}
              >
                Request access →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
