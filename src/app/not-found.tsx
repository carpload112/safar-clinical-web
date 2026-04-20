import Link from 'next/link'
export default function NotFound() {
  return (
    <div style={{ minHeight:'100dvh', background:'var(--forest)', color:'var(--cream)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24, padding:32 }}>
      <span style={{ fontFamily:'var(--font-display)', fontSize:'clamp(80px,15vw,160px)', letterSpacing:'-0.05em', color:'var(--lime)', lineHeight:1 }}>404</span>
      <p style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.16em', color:'var(--sage-soft)', textAlign:'center' }}>— ROUTE NOT FOUND · LOST AT SEA</p>
      <Link href="/" style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, color:'var(--cream)', textDecoration:'underline', textUnderlineOffset:6, textDecorationThickness:'0.5px' }}>Return to chart →</Link>
    </div>
  )
}
