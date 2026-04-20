'use client'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <>
      <style>{`
        .sf-input{width:100%;border:0;border-bottom:1px solid var(--border);padding:12px 0;background:transparent;font-family:var(--font-mono);font-size:16px;color:var(--forest);transition:border-color 180ms var(--ease);outline:none}
        .sf-input:focus{border-bottom-color:var(--brand)}
        .sso-btn{padding:14px 18px;border:0.5px solid var(--border);text-decoration:none;display:flex;justify-content:space-between;align-items:center;color:var(--forest);font-size:14px;transition:border-color 200ms var(--ease);background:transparent}
        .sso-btn:hover{border-color:var(--brand)}
        @media(max-width:960px){.sign-right{display:none!important}.sign-left{padding:32px!important}}
      `}</style>
      <div style={{ minHeight:'100dvh', display:'grid', gridTemplateColumns:'1fr 1fr' }}>
        <div className="sign-left" style={{ padding:'48px 64px', display:'flex', flexDirection:'column', minHeight:'100dvh' }}>
          <Link href="/" style={{ display:'inline-flex', alignItems:'center', textDecoration:'none', marginLeft:-12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://2azfdphehc8ufmtf.public.blob.vercel-storage.com/Safar%20Clinical%20logo.png" alt="Safar Clinical" style={{ height:64, width:'auto', display:'block' }}/>
          </Link>
          <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:440 }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--brand)' }}>— SIGN IN · SPONSORS & SITES</span>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:400, letterSpacing:'-0.035em', lineHeight:0.98, fontSize:64, margin:'20px 0 14px', color:'var(--forest)' }}>Welcome back.</h1>
            <p style={{ fontSize:14.5, lineHeight:1.6, color:'var(--fg-2)', marginBottom:40 }}>
              Single sign‑on via your institution's identity provider. If you deployed Safar inside your EHR, use the in‑chart entrypoint instead — no credentials required.
            </p>
            <form onSubmit={e=>e.preventDefault()} style={{ display:'grid', gap:28 }}>
              <div>
                <label style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)', textTransform:'uppercase' }}>— WORK EMAIL</label>
                <input type="email" className="sf-input" placeholder="you@hospital.org" required style={{ marginTop:6 }}/>
              </div>
              <div>
                <label style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)', textTransform:'uppercase' }}>— PASSWORD <span style={{ opacity:0.6 }}>(OR USE SSO BELOW)</span></label>
                <input type="password" className="sf-input" placeholder="••••••••••" style={{ marginTop:6 }}/>
              </div>
              <button type="submit" style={{ background:'var(--forest)', color:'var(--cream)', border:0, padding:'18px 22px', fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'0.16em', cursor:'pointer', marginTop:8, transition:'opacity 160ms var(--ease)' }}>CONTINUE →</button>
            </form>
            <div style={{ margin:'32px 0 20px', display:'flex', alignItems:'center', gap:14 }}>
              <div style={{ flex:1, height:0.5, background:'var(--border)' }}/><span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>OR</span><div style={{ flex:1, height:0.5, background:'var(--border)' }}/>
            </div>
            <div style={{ display:'grid', gap:12 }}>
              {[['Continue with Okta','SAML SSO'],['Continue with Microsoft','Entra / Azure AD'],['Continue with Epic ID','In‑chart deployments']].map(([label,detail],i)=>(
                <a key={i} href="#" className="sso-btn">
                  <span>{label}</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.14em', color:'var(--fg-3)' }}>{detail} →</span>
                </a>
              ))}
            </div>
            <div style={{ marginTop:40, fontSize:13, color:'var(--fg-2)', display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap' }}>
              <a href="#" style={{ color:'var(--fg-2)', textDecoration:'underline', textUnderlineOffset:3 }}>Forgot your password?</a>
              <span>Not deployed yet? <Link href="/" style={{ color:'var(--brand)', textDecoration:'underline', textUnderlineOffset:3 }}>Request access →</Link></span>
            </div>
          </div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--fg-3)' }}>© 2026 SAFAR CLINICAL · HIPAA · SOC 2 · 21 CFR · PART 11</div>
        </div>
        <div className="sign-right" style={{ background:'var(--forest)', color:'var(--cream)', padding:64, position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/compass-rose.svg" alt="" aria-hidden style={{ position:'absolute', right:-220, bottom:-260, width:700, height:700, opacity:0.08, filter:'brightness(2.5)' }}/>
          <div style={{ position:'relative' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--lime)' }}>— TRUST · THE FLOOR</span>
          </div>
          <div style={{ position:'relative', maxWidth:520 }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, fontStyle:'italic', letterSpacing:'-0.035em', lineHeight:1.05, fontSize:'clamp(36px,4.2vw,56px)', color:'var(--cream)' }}>
              Every session audited. Every action logged. No PHI leaves your signed environment.
            </h2>
            <div style={{ marginTop:48, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, borderTop:'0.5px solid rgba(241,239,232,0.14)', paddingTop:28 }}>
              {[['HIPAA','BAA'],['SOC 2','TYPE II'],['21 CFR','PART 11'],['HITRUST','CSF v11']].map(([k,v],i)=>(
                <div key={i}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'0.08em', color:'var(--cream)' }}>{k}</div>
                  <div style={{ marginTop:4, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--sage-soft)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position:'relative', fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.16em', color:'var(--sage-soft)' }}>SESSION · TLS 1.3 · AES‑256 · MFA ENFORCED</div>
        </div>
      </div>
    </>
  )
}
