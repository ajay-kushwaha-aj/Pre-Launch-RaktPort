import { useState, useEffect } from 'react'
import logo from '../assets/raktport-logo.jpg'

export default function Navbar({ onJoinClick }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false)
  }, [scrolled])

  const links = [
    { label: 'About',        href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'RTID',         href: '#rtid' },
    { label: 'Join',         href: '#join' },
  ]

  const handleMobileLink = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '8px 0' : '14px 0',
        background: scrolled || menuOpen ? 'rgba(8,8,18,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(185,28,28,0.2)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:10, cursor:'pointer', flexShrink:0 }}
            onClick={() => { setMenuOpen(false); window.scrollTo({ top:0, behavior:'smooth' }) }}>
            <div style={{ position:'relative', flexShrink:0 }}>
              <img src={logo} alt="RaktPort"
                style={{ height:42, width:42, borderRadius:'50%', objectFit:'cover', objectPosition:'center 15%',
                  border:'2px solid rgba(185,28,28,0.55)', boxShadow:'0 0 16px rgba(185,28,28,0.45)',
                  display:'block', transition:'all 0.4s ease' }}
              />
              <span style={{ position:'absolute', bottom:1, right:1, width:9, height:9, borderRadius:'50%',
                background:'#22c55e', border:'2px solid #08080f', animation:'pulse 2s infinite' }}/>
            </div>
            <div>
              <div style={{ color:'#fff', fontWeight:800, fontSize:18, letterSpacing:'-0.05em', lineHeight:1 }}>
                Rakt<span style={{ background:'linear-gradient(135deg,#ef4444,#b91c1c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Port</span>
              </div>
              <div style={{ fontSize:8.5, color:'rgba(255,255,255,0.28)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:2 }}>
                Blood Donation Infrastructure
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(l => (
              <a key={l.label} href={l.href}
                style={{ color:'rgba(255,255,255,0.48)', fontSize:13.5, fontWeight:500, textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
              >{l.label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button onClick={onJoinClick} className="btn-glow nav-cta" style={{
            background:'linear-gradient(135deg,#b91c1c,#991b1b)', color:'#fff', border:'none',
            borderRadius:99, padding:'9px 20px', fontSize:13, fontWeight:700, cursor:'pointer',
            boxShadow:'0 0 22px rgba(185,28,28,0.45)',
          }}>🩸 Get Early Access</button>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              display:'none', flexDirection:'column', justifyContent:'center', alignItems:'center',
              gap:5, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
              borderRadius:10, width:40, height:40, cursor:'pointer', padding:0, flexShrink:0,
            }}>
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <>
                <span style={{ width:18, height:2, borderRadius:2, background:'rgba(255,255,255,0.7)', transition:'all 0.2s' }}/>
                <span style={{ width:18, height:2, borderRadius:2, background:'rgba(255,255,255,0.7)', transition:'all 0.2s' }}/>
                <span style={{ width:14, height:2, borderRadius:2, background:'rgba(255,255,255,0.5)', transition:'all 0.2s' }}/>
              </>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div style={{
            animation:'slideDown 0.2s ease',
            borderTop:'1px solid rgba(185,28,28,0.15)',
            background:'rgba(8,8,18,0.98)',
            padding:'8px 0 20px',
          }}>
            {links.map(l => (
              <button key={l.label}
                onClick={() => handleMobileLink(l.href)}
                style={{
                  display:'block', width:'100%', textAlign:'left',
                  padding:'14px 24px', fontSize:15, fontWeight:500,
                  color:'rgba(255,255,255,0.65)', background:'none', border:'none', cursor:'pointer',
                  transition:'all 0.15s ease', borderLeft:'3px solid transparent',
                }}
                onMouseEnter={e => { e.currentTarget.style.color='#ef4444'; e.currentTarget.style.borderLeftColor='#ef4444'; e.currentTarget.style.paddingLeft='30px' }}
                onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.65)'; e.currentTarget.style.borderLeftColor='transparent'; e.currentTarget.style.paddingLeft='24px' }}
              >{l.label}</button>
            ))}
            <div style={{ padding:'8px 20px 0' }}>
              <button onClick={() => { setMenuOpen(false); onJoinClick() }} className="btn-glow" style={{
                width:'100%', background:'linear-gradient(135deg,#b91c1c,#991b1b)', color:'#fff',
                border:'none', borderRadius:12, padding:'14px', fontSize:14, fontWeight:700,
                cursor:'pointer', boxShadow:'0 0 22px rgba(185,28,28,0.4)',
              }}>🩸 Get Early Access</button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
