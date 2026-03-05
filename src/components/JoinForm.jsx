import { useState } from 'react'
import useInView from '../hooks/useInView'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvsDi26IDwcyYKvJ2uj5sb1iKJbttUibyLnILYP2mj6J754UFmWoSIgBUdQydZI1M/exec'

async function submitToGoogleSheets(data) {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ ...data, source: 'RaktPort Landing Page', timestamp: new Date().toISOString() }),
    })
    return true
  } catch (err) {
    console.error('Sheets error:', err)
    return false
  }
}

export default function JoinForm({ joinRef }) {
  const [titleRef, titleIn] = useInView()
  const [form, setForm]           = useState({ name:'', email:'', role:'Donor', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  const roles = ['Donor','Hospital / Blood Bank','Volunteer','Researcher','Other']

  const handleSubmit = async () => {
    if (!form.name.trim())         return setError('Please enter your full name.')
    if (!form.email.trim())        return setError('Please enter your email address.')
    if (!form.email.includes('@')) return setError('Please enter a valid email address.')
    setError(''); setLoading(true)
    const ok = await submitToGoogleSheets(form)
    setLoading(false)
    if (ok) setSubmitted(true)
    else setError('Something went wrong. Please try again.')
  }

  const inp = {
    width:'100%', borderRadius:12, padding:'13px 16px', fontSize:14,
    outline:'none', background:'rgba(255,255,255,0.06)', color:'#fff',
    border:'1px solid rgba(255,255,255,0.1)', boxSizing:'border-box',
    transition:'all 0.25s ease', fontFamily:'inherit',
  }

  return (
    <section ref={joinRef} id="join" className="section-pad"
      style={{ position:'relative', zIndex:1, padding:'100px 24px', background:'rgba(185,28,28,0.025)' }}>
      <div style={{ maxWidth:620, margin:'0 auto', textAlign:'center' }}>

        {/* Heading */}
        <div ref={titleRef} className={`reveal${titleIn?' visible':''}`}>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:99,
            background:'rgba(185,28,28,0.1)', border:'1px solid rgba(185,28,28,0.3)',
            color:'#fca5a5', fontSize:11.5, fontWeight:700, letterSpacing:'0.08em',
            marginBottom:18, textTransform:'uppercase' }}>Join Early Access</div>
          <h2 style={{ fontSize:'clamp(1.7rem,4.5vw,3rem)', fontWeight:800, color:'#fff',
            letterSpacing:'-0.04em', marginBottom:14 }}>
            Be part of the <span style={{ color:'#ef4444' }}>movement</span>
          </h2>
          <p style={{ fontSize:'clamp(15px,2.5vw,17px)', color:'rgba(255,255,255,0.42)',
            marginBottom:40, lineHeight:1.75 }}>
            Whether you're a donor, hospital, or healthcare organization — we want you in our early community.
          </p>
        </div>

        {/* Form / Success */}
        {!submitted ? (
          <div className="form-box card-hover"
            style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:22, padding:'36px 32px', textAlign:'left',
              display:'flex', flexDirection:'column', gap:18 }}
            onMouseEnter={e => e.currentTarget.style.borderColor='rgba(185,28,28,0.2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>

            {/* Name + Email */}
            {[
              { label:'Full Name',     key:'name',  type:'text',  ph:'Ajay Kushwaha' },
              { label:'Email Address', key:'email', type:'email', ph:'you@example.com' },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.45)',
                  display:'block', marginBottom:7, letterSpacing:'0.06em', textTransform:'uppercase' }}>
                  {f.label}
                </label>
                <input type={f.type} placeholder={f.ph} value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })} style={inp}
                  onFocus={e => { e.target.style.borderColor='rgba(185,28,28,0.6)'; e.target.style.boxShadow='0 0 0 3px rgba(185,28,28,0.1)' }}
                  onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,0.1)'; e.target.style.boxShadow='none' }}/>
              </div>
            ))}

            {/* Role */}
            <div>
              <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.45)',
                display:'block', marginBottom:9, letterSpacing:'0.06em', textTransform:'uppercase' }}>
                I am a...
              </label>
              <div className="role-chips" style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {roles.map(r => (
                  <button key={r} onClick={() => setForm({ ...form, role:r })}
                    className="role-chip"
                    style={{
                      padding:'9px 16px', borderRadius:99, fontSize:13, fontWeight:600,
                      cursor:'pointer', transition:'all 0.22s ease',
                      background: form.role===r ? 'rgba(185,28,28,0.28)' : 'rgba(255,255,255,0.05)',
                      border:     form.role===r ? '1px solid rgba(185,28,28,0.6)' : '1px solid rgba(255,255,255,0.1)',
                      color:      form.role===r ? '#fca5a5' : 'rgba(255,255,255,0.42)',
                      transform:  form.role===r ? 'scale(1.04)' : 'scale(1)',
                      boxShadow:  form.role===r ? '0 0 14px rgba(185,28,28,0.2)' : 'none',
                      WebkitTapHighlightColor: 'transparent',
                    }}>{r}</button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.45)',
                display:'block', marginBottom:7, letterSpacing:'0.06em', textTransform:'uppercase' }}>
                Message{' '}
                <span style={{ color:'rgba(255,255,255,0.2)', fontWeight:400, textTransform:'none', letterSpacing:0 }}>(optional)</span>
              </label>
              <textarea placeholder="Tell us how you'd like to contribute or collaborate..."
                value={form.message} onChange={e => setForm({ ...form, message:e.target.value })}
                rows={3} style={{ ...inp, resize:'none' }}
                onFocus={e => { e.target.style.borderColor='rgba(185,28,28,0.6)'; e.target.style.boxShadow='0 0 0 3px rgba(185,28,28,0.1)' }}
                onBlur={e  => { e.target.style.borderColor='rgba(255,255,255,0.1)'; e.target.style.boxShadow='none' }}/>
            </div>

            {/* Error */}
            {error && (
              <div style={{ padding:'11px 14px', borderRadius:10, background:'rgba(239,68,68,0.08)',
                border:'1px solid rgba(239,68,68,0.25)', color:'#fca5a5', fontSize:13,
                animation:'fadeIn 0.3s ease' }}>⚠️ {error}</div>
            )}

            {/* Submit */}
            <button onClick={handleSubmit} disabled={loading} className="btn-glow"
              style={{
                borderRadius:14, padding:'15px', fontSize:15, fontWeight:700,
                cursor: loading ? 'wait' : 'pointer', border:'none', width:'100%',
                background: loading ? 'rgba(185,28,28,0.35)' : 'linear-gradient(135deg,#dc2626,#b91c1c)',
                color:'#fff', boxShadow: loading ? 'none' : '0 0 28px rgba(185,28,28,0.45)',
                transition:'all 0.25s ease', marginTop:4,
              }}>
              {loading ? (
                <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
                  <span style={{ width:16, height:16, border:'2px solid rgba(255,255,255,0.3)',
                    borderTopColor:'#fff', borderRadius:'50%', display:'inline-block',
                    animation:'rotateSlow 0.8s linear infinite' }}/>
                  Submitting...
                </span>
              ) : 'Request Early Access →'}
            </button>

            <p style={{ textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.18)', marginTop:-6 }}>
              🔒 Your data goes directly to our secure Google Sheet. No spam, ever.
            </p>
          </div>

        ) : (
          <div style={{ padding:'clamp(36px,6vw,56px) clamp(24px,5vw,40px)', borderRadius:22,
            background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.22)',
            textAlign:'center', animation:'scaleIn 0.5s ease' }}>
            <div style={{ fontSize:50, marginBottom:18, animation:'float 3s ease-in-out infinite' }}>✅</div>
            <h3 style={{ fontSize:'clamp(20px,4vw,26px)', fontWeight:800, color:'#86efac', marginBottom:12 }}>
              Welcome to RaktPort!
            </h3>
            <p style={{ fontSize:'clamp(13px,2.5vw,15px)', color:'rgba(134,239,172,0.6)', lineHeight:1.8 }}>
              Thanks <strong style={{ color:'#86efac' }}>{form.name}</strong>! Your details have been saved.<br/>
              We'll reach out as a <strong style={{ color:'#86efac' }}>{form.role}</strong> soon.
            </p>
            <div style={{ marginTop:24, padding:'12px 18px', borderRadius:12,
              background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.14)',
              fontSize:13, color:'rgba(134,239,172,0.5)' }}>
              📋 Your details have been recorded in our early access list.
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
