import { useState, useEffect } from 'react'
import logo from '../assets/raktport-logo.jpg'

// 1. Updated to match the exact working URL from JoinForm.jsx
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvsDi26IDwcyYKvJ2uj5sb1iKJbttUibyLnILYP2mj6J754UFmWoSIgBUdQydZI1M/exec'

async function submitHeroEmail(email, role) {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // 2. This is REQUIRED to prevent Google Apps Script CORS blocking
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({ 
        name: 'Hero Form', 
        email: email, 
        role: role, 
        source: 'RaktPort Hero Section' // Changed slightly so you know exactly which form they used
      }),
    });
    
    console.log('Hero submission successful!');
  } catch(e) { 
    console.error('Hero submission failed:', e); 
  }
}

const useCountUp = (target, duration = 2000, delay = 800) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      let v = 0; const step = target / (duration / 16)
      const i = setInterval(() => {
        v += step
        if (v >= target) { setCount(target); clearInterval(i) }
        else setCount(Math.floor(v))
      }, 16)
      return () => clearInterval(i)
    }, delay)
    return () => clearTimeout(t)
  }, [target, duration, delay])
  return count
}

const Stat = ({ value, suffix, label, delay }) => {
  const c = useCountUp(value, 2000, delay)
  return (
    <div style={{ textAlign:'center', flex:1, minWidth:90 }}>
      <div className="shimmer-text" style={{ fontSize:'clamp(20px,4vw,28px)', fontWeight:900, letterSpacing:'-0.03em' }}>
        {c.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize:'clamp(10px,2vw,11.5px)', color:'rgba(255,255,255,0.38)', marginTop:4, lineHeight:1.4, whiteSpace:'pre-line' }}>{label}</div>
    </div>
  )
}

export default function Hero({ joinRef }) {
  const [email, setEmail]         = useState('')
  const [role, setRole]           = useState('Donor')
  const [submitted, setSubmitted] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  const roles = [
    { v:'Donor',     i:'🩸', l:'Blood Donor' },
    { v:'Hospital',  i:'🏥', l:'Hospital' },
    { v:'Volunteer', i:'🤝', l:'Volunteer' },
  ]

  const handleSubmit = () => {
    if (email.trim() && email.includes('@')) {
      submitHeroEmail(email, role)
      setSubmitted(true)
    }
  }

  return (
    <section id="about" style={{
      position:'relative', zIndex:1, display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', minHeight:'100vh',
      padding:'120px 20px 80px', textAlign:'center', overflow:'hidden',
    }}>

      {/* bg particles — hidden on mobile for perf */}
      {[
        {w:9,h:9,top:'16%',left:'7%',  delay:'0s',  dur:'5s'},
        {w:11,h:11,top:'28%',right:'6%',delay:'2s', dur:'6s'},
        {w:6,h:6,top:'80%',right:'10%',delay:'0.5s',dur:'8s'},
      ].map((p,i) => (
        <div key={i} className="particle" style={{
          width:p.w, height:p.h, top:p.top, left:p.left, right:p.right,
          animationDelay:p.delay, animationDuration:p.dur,
        }}/>
      ))}

      {/* ── Logo ── */}
      <div style={{ marginBottom:'clamp(20px,4vw,36px)', animation:'scaleIn 1s cubic-bezier(0.34,1.56,0.64,1) 0.1s both' }}>
        <div style={{ position:'relative', display:'inline-block' }}>
          {/* Slow orbit ring */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            width:'clamp(140px,28vw,190px)', height:'clamp(140px,28vw,190px)',
            borderRadius:'50%', border:'1px dashed rgba(185,28,28,0.2)',
            animation:'rotateSlow 18s linear infinite',
          }} className="hero-orbit"/>
          {/* Pulse rings */}
          <div style={{ position:'absolute', inset:-14, borderRadius:'50%', border:'1.5px solid rgba(185,28,28,0.4)', animation:'pulseRing 2.4s ease-out infinite' }}/>
          <div style={{ position:'absolute', inset:-14, borderRadius:'50%', border:'1.5px solid rgba(185,28,28,0.2)', animation:'pulseRing 2.4s ease-out 0.8s infinite' }}/>
          {/* Glow */}
          <div style={{ position:'absolute', inset:-5, borderRadius:'50%', animation:'glowPulse 2.8s ease-in-out infinite' }}/>
          {/* Logo img */}
          <img src={logo} alt="RaktPort" onLoad={() => setImgLoaded(true)}
            className="hero-logo-img"
            style={{
              width:150, height:150, borderRadius:'50%', objectFit:'cover',
              objectPosition:'center 15%', border:'3px solid rgba(185,28,28,0.7)',
              display:'block', position:'relative', zIndex:2,
              animation:'float 4.5s ease-in-out infinite',
              opacity: imgLoaded ? 1 : 0, transition:'opacity 0.5s ease',
              boxShadow:'0 8px 40px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      </div>

      {/* Badge */}
      <div style={{ display:'inline-flex', alignItems:'center', gap:8, borderRadius:99, padding:'7px 16px', marginBottom:20,
        background:'rgba(185,28,28,0.1)', border:'1px solid rgba(185,28,28,0.3)', color:'#fca5a5',
        fontSize:'clamp(11px,2.5vw,13px)', fontWeight:500, animation:'fadeUp 0.7s ease 0.35s both',
        maxWidth:'90vw', textAlign:'center',
      }}>
        <span style={{ width:7, height:7, borderRadius:'50%', background:'#ef4444', display:'inline-block', flexShrink:0, animation:'pulse 2s infinite' }}/>
        Launching Soon · Building India's Blood Donation Infrastructure
      </div>

      {/* Headline */}
      <h1 style={{
        maxWidth:820, margin:'0 0 16px',
        fontSize:'clamp(2rem,7.5vw,4.6rem)',
        fontWeight:900, letterSpacing:'-0.04em', lineHeight:1.08,
        color:'#fff', animation:'fadeUp 0.7s ease 0.45s both',
        padding:'0 4px',
      }}>
        Reimagining{' '}
        <span className="shimmer-text">Blood Donation</span>
        <br />Infrastructure
      </h1>

      {/* Sub */}
      <p style={{
        maxWidth:560, margin:'0 0 40px',
        fontSize:'clamp(0.95rem,2.5vw,1.2rem)',
        lineHeight:1.8, color:'rgba(255,255,255,0.5)',
        animation:'fadeUp 0.7s ease 0.55s both',
        padding:'0 4px',
      }}>
        RaktPort enables donors to donate blood{' '}
        <span style={{ color:'rgba(255,255,255,0.92)', fontWeight:600 }}>anywhere</span>,
        while ensuring the blood credit reaches the{' '}
        <span style={{ color:'rgba(255,255,255,0.92)', fontWeight:600 }}>patient who needs it</span>.
        No barriers. No delays. Just life.
      </p>

      {/* Email Form */}
      <div ref={joinRef} style={{ width:'100%', maxWidth:580, animation:'fadeUp 0.7s ease 0.65s both', padding:'0 4px' }}>
        {!submitted ? (
          <>
            {/* Role tabs */}
            <div className="role-chips" style={{ display:'flex', gap:8, marginBottom:14, justifyContent:'center', flexWrap:'wrap' }}>
              {roles.map(r => (
                <button key={r.v} onClick={() => setRole(r.v)} className="role-chip" style={{
                  padding:'8px 16px', borderRadius:99, fontSize:13, fontWeight:600, cursor:'pointer', transition:'all 0.25s ease',
                  background: role===r.v ? 'rgba(185,28,28,0.28)' : 'rgba(255,255,255,0.05)',
                  border:     role===r.v ? '1px solid rgba(185,28,28,0.6)' : '1px solid rgba(255,255,255,0.1)',
                  color:      role===r.v ? '#fca5a5' : 'rgba(255,255,255,0.4)',
                  transform:  role===r.v ? 'scale(1.05)' : 'scale(1)',
                  boxShadow:  role===r.v ? '0 0 18px rgba(185,28,28,0.28)' : 'none',
                  WebkitTapHighlightColor: 'transparent',
                }}>{r.i} {r.l}</button>
              ))}
            </div>

            {/* Input row */}
            <div className="form-input-row" style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <input type="email" placeholder={`Your email as a ${role.toLowerCase()}...`}
                value={email} onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                style={{ flex:1, minWidth:0, width:'100%', borderRadius:14, padding:'14px 16px', fontSize:14,
                  outline:'none', background:'rgba(255,255,255,0.06)', color:'#fff',
                  border:'1px solid rgba(255,255,255,0.12)', transition:'all 0.25s ease' }}
                onFocus={e => { e.target.style.borderColor='rgba(185,28,28,0.6)'; e.target.style.boxShadow='0 0 0 3px rgba(185,28,28,0.12)' }}
                onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,0.12)'; e.target.style.boxShadow='none' }}
              />
              <button onClick={handleSubmit} className="btn-glow" style={{
                borderRadius:14, padding:'14px 24px', fontSize:14, fontWeight:700,
                cursor:'pointer', whiteSpace:'nowrap', border:'none', width:'100%',
                background:'linear-gradient(135deg,#dc2626,#b91c1c)',
                color:'#fff', boxShadow:'0 0 28px rgba(185,28,28,0.5)',
              }}>Join Early Access →</button>
            </div>
            <p style={{ textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.2)', marginTop:10 }}>
              No spam. No credit card. Just early access.
            </p>
          </>
        ) : (
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, borderRadius:16,
            padding:'20px 24px', background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.3)',
            animation:'scaleIn 0.4s ease', flexWrap:'wrap', textAlign:'left' }}>
            <span style={{ fontSize:24 }}>✅</span>
            <div>
              <div style={{ color:'#86efac', fontWeight:700, fontSize:15 }}>You're on the list!</div>
              <div style={{ color:'rgba(134,239,172,0.6)', fontSize:13, marginTop:3 }}>
                We'll reach out as a <strong style={{ color:'#86efac' }}>{role}</strong> soon.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats bar */}
      <div className="stats-bar" style={{
        display:'flex', alignItems:'center', gap:20, padding:'24px 28px', borderRadius:18, marginTop:44,
        background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)',
        backdropFilter:'blur(12px)', maxWidth:660, width:'100%',
        flexWrap:'wrap', justifyContent:'center', rowGap:16,
        animation:'fadeUp 0.7s ease 0.8s both',
      }}>
        <Stat value={47}    suffix="L+"        label={"Blood shortage\nannually"} delay={900} />
        <div className="stat-divider" style={{ width:1, height:36, background:'rgba(255,255,255,0.08)', flexShrink:0 }} />
        <Stat value={38000} suffix="+"         label={"Hospitals need\nbetter coordination"} delay={1100} />
        <div className="stat-divider" style={{ width:1, height:36, background:'rgba(255,255,255,0.08)', flexShrink:0 }} />
        <Stat value={1}     suffix=" Platform" label={"RaktPort —\nunified solution"} delay={1300} />
      </div>

      {/* Founder */}
      <div style={{ marginTop:32, textAlign:'center', animation:'fadeUp 0.7s ease 0.9s both' }}>
        <div style={{ fontSize:12, color:'rgba(255,255,255,0.18)' }}>
          Built by{' '}
          <a href="https://portfolio.raktport.in/" target="_blank" rel="noopener noreferrer"
            style={{ color:'rgba(255,255,255,0.45)', fontWeight:600, textDecoration:'none',
              borderBottom:'1px solid rgba(185,28,28,0.4)', paddingBottom:1, transition:'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color='#ef4444'; e.currentTarget.style.borderBottomColor='#ef4444' }}
            onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.45)'; e.currentTarget.style.borderBottomColor='rgba(185,28,28,0.4)' }}>
            Ajay Kushwaha
          </a>{' '}· Biomedical Science Student
        </div>
        <div style={{ fontSize:11, color:'rgba(185,28,28,0.4)', marginTop:4 }}>Concept: RaktSetu · Focus: Blood Donation Logistics</div>
      </div>

      {/* Scroll hint */}
      <div style={{ position:'absolute', bottom:22, left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:5, animation:'bounce 2s ease-in-out infinite' }}>
        <span style={{ fontSize:10, color:'rgba(255,255,255,0.18)', letterSpacing:'0.08em', textTransform:'uppercase' }}>Scroll</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  )
}
