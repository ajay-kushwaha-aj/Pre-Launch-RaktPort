import useInView from '../hooks/useInView'

export default function Solution() {
  const [titleRef, titleIn] = useInView()
  const points = [
    { icon:'🌐', title:'Unified Digital Layer',  desc:'One platform connecting all registered blood banks, hospitals, and donors across India.' },
    { icon:'🔄', title:'Cross-Hospital Credits', desc:"Donate at any facility. The blood credit is securely assigned to your patient's hospital." },
    { icon:'🧬', title:'RTID Transparency',      desc:'Every donation tracked with a unique RaktPort Transfusion ID for full accountability.' },
    { icon:'⚡', title:'Real-Time Matching',     desc:'Smart algorithms identify the nearest eligible donors the moment a request is raised.' },
  ]
  return (
    <section id="how-it-works" className="section-pad" style={{ position:'relative', zIndex:1, padding:'100px 24px', background:'rgba(185,28,28,0.025)' }}>
      <div style={{ maxWidth:1040, margin:'0 auto', textAlign:'center' }}>
        <div ref={titleRef} className={`reveal${titleIn?' visible':''}`}>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:99, background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.22)', color:'#86efac', fontSize:11.5, fontWeight:700, letterSpacing:'0.08em', marginBottom:18, textTransform:'uppercase' }}>The Solution</div>
          <h2 style={{ fontSize:'clamp(1.7rem,4.5vw,3rem)', fontWeight:800, color:'#fff', letterSpacing:'-0.04em', marginBottom:14, lineHeight:1.15 }}>
            A <span style={{ background:'linear-gradient(135deg,#ef4444,#b91c1c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>unified</span> blood donation infrastructure
          </h2>
          <p style={{ fontSize:'clamp(15px,2.5vw,17px)', color:'rgba(255,255,255,0.42)', maxWidth:520, margin:'0 auto 52px', lineHeight:1.75 }}>
            RaktPort creates a digital backbone where donation and need are matched intelligently — regardless of location.
          </p>
        </div>

        <div className="cards-grid-2" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:18, textAlign:'left' }}>
          {points.map((p,i) => {
            const [ref, inView] = useInView()
            return (
              <div key={i} ref={ref} className={`reveal card-hover${inView?' visible':''}`}
                style={{ transitionDelay:`${i*0.1}s`, borderRadius:20, padding:'clamp(24px,4vw,32px) clamp(18px,3vw,24px)',
                  background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(34,197,94,0.25)'; e.currentTarget.style.background='rgba(34,197,94,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.025)' }}>
                <div style={{ fontSize:'clamp(26px,4vw,32px)', marginBottom:14 }}>{p.icon}</div>
                <h3 style={{ fontSize:'clamp(15px,2vw,17px)', fontWeight:700, color:'#fff', marginBottom:9 }}>{p.title}</h3>
                <p style={{ fontSize:'clamp(13px,2vw,14px)', color:'rgba(255,255,255,0.42)', lineHeight:1.75 }}>{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
