import useInView from '../hooks/useInView'
import logo from '../assets/raktport-logo.jpg'

export default function Footer() {
  const [ref, inView] = useInView()
  const columns = [
    { title:'Platform', links:[{l:'About',h:'#about'},{l:'How It Works',h:'#how-it-works'},{l:'RTID System',h:'#rtid'},{l:'Join Early Access',h:'#join'}] },
    { title:'Contact',  links:[{l:'For Hospitals',h:'#join'},{l:'For Donors',h:'#join'},{l:'For Researchers',h:'#join'},{l:'Press',h:'#join'}] },
  ]
  return (
    <footer style={{ position:'relative', zIndex:1, borderTop:'1px solid rgba(255,255,255,0.06)', padding:'clamp(40px,6vw,60px) 20px 32px' }}>
      <div ref={ref} className={`reveal${inView?' visible':''}`} style={{ maxWidth:1100, margin:'0 auto' }}>

        {/* Top grid */}
        <div className="footer-grid" style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:'clamp(32px,5vw,52px)', marginBottom:'clamp(40px,5vw,56px)' }}>

          {/* Brand col */}
          <div style={{ maxWidth:300, minWidth:220 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <img src={logo} alt="RaktPort"
                style={{ width:34, height:34, borderRadius:'50%', objectFit:'cover', objectPosition:'center 15%',
                  border:'2px solid rgba(185,28,28,0.45)', boxShadow:'0 0 12px rgba(185,28,28,0.3)', flexShrink:0 }}/>
              <div>
                <div style={{ color:'#fff', fontWeight:800, fontSize:17, letterSpacing:'-0.05em' }}>
                  Rakt<span style={{ background:'linear-gradient(135deg,#ef4444,#b91c1c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Port</span>
                </div>
                <div style={{ fontSize:8.5, color:'rgba(255,255,255,0.25)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Blood Donation Infrastructure</div>
              </div>
            </div>
            <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.3)', lineHeight:1.8, marginBottom:20 }}>
              Donate Blood Anywhere. Save Lives Everywhere.<br/>
              Building India's national blood donation infrastructure.
            </p>
            {/* Socials */}
            <div style={{ display:'flex', gap:8 }}>
              {[{l:'𝕏',h:'#'},{l:'in',h:'#'}].map(s => (
                <a key={s.l} href={s.h}
                  style={{ width:34, height:34, borderRadius:10, background:'rgba(255,255,255,0.05)',
                    border:'1px solid rgba(255,255,255,0.08)', display:'flex', alignItems:'center',
                    justifyContent:'center', fontSize:13, color:'rgba(255,255,255,0.35)',
                    textDecoration:'none', transition:'all 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(185,28,28,0.4)'; e.currentTarget.style.background='rgba(185,28,28,0.1)'; e.currentTarget.style.color='#fca5a5' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(255,255,255,0.35)' }}>
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div style={{ display:'flex', gap:'clamp(32px,5vw,60px)', flexWrap:'wrap' }}>
            {columns.map(col => (
              <div key={col.title} style={{ minWidth:130 }}>
                <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.28)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>{col.title}</div>
                {col.links.map(l => (
                  <a key={l.l} href={l.h}
                    style={{ display:'block', fontSize:14, color:'rgba(255,255,255,0.38)', textDecoration:'none', marginBottom:12, transition:'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.color='#ef4444'; e.currentTarget.style.paddingLeft='4px' }}
                    onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.38)'; e.currentTarget.style.paddingLeft='0' }}>
                    {l.l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:24,
          display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:10 }}>
          <span style={{ fontSize:12.5, color:'rgba(255,255,255,0.18)' }}>© 2026 RaktPort. All rights reserved.</span>
          <span style={{ fontSize:12.5, color:'rgba(255,255,255,0.18)' }}>
            Built by{' '}
            <a href="https://portfolio.raktport.in/" target="_blank" rel="noopener noreferrer"
              style={{ color:'rgba(255,255,255,0.38)', fontWeight:600, textDecoration:'none',
                borderBottom:'1px solid rgba(185,28,28,0.35)', paddingBottom:1, transition:'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color='#ef4444'; e.currentTarget.style.borderBottomColor='#ef4444' }}
              onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.38)'; e.currentTarget.style.borderBottomColor='rgba(185,28,28,0.35)' }}>
              Ajay Kushwaha
            </a>{' '}· Biomedical Science · RaktSetu
          </span>
        </div>
      </div>
    </footer>
  )
}
