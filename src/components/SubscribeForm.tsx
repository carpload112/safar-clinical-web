'use client'
export default function SubscribeForm() {
  return (
    <form onSubmit={e => e.preventDefault()} style={{ display:'flex', alignItems:'stretch', borderBottom:'1px solid var(--forest)', paddingBottom:4 }}>
      <input type="email" required placeholder="you@hospital.org" style={{ flex:1, border:0, background:'transparent', outline:'none', fontFamily:'var(--font-mono)', fontSize:16, color:'var(--forest)', padding:'8px 0' }}/>
      <button type="submit" style={{ border:0, background:'transparent', fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.14em', color:'var(--brand)', cursor:'pointer', padding:'8px 0 8px 16px' }}>SUBSCRIBE →</button>
    </form>
  )
}
