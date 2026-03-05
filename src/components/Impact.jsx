import useInView from '../hooks/useInView'

export default function Impact() {
  const [titleRef, titleIn] = useInView()
  const [quoteRef, quoteIn] = useInView()
  const vision = [
    { icon:'🗺️', title:'National Coverage',   desc:'A digital infrastructure spanning every registered blood bank across India.' },
    { icon:'📱', title:'Donor Dashboard',      desc:'Donors track their impact — every life helped, every RTID contributed to.' },
    { icon:'🏥', title:'Hospital Integration', desc:'Seamless integration with existing hospital systems via a clean API.' },
    { icon:'🚨', title:'Emergency Matching',   desc:'SOS mode for critical cases — alerting all eligible nearby donors instantly.' },
  ]
  return (
    <section className="section-pad" style={{ position:'relative', zIndex:1, padding:'100px 24px', textAlign:'center' }}>
      <div style={{ maxWidth:980, margin:'0 auto' }}>
        <div ref={titleRef} className={`reveal${titleIn?' visible':''}`}>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:99, background:'rgba(59,130,246,0.1)', border:'1px solid rgba(59,130,246,0.22)', color:'#93c5fd', fontSize:11.5, fontWeight:700, letterSpacing:'0.08em', marginBottom:18, textTransform:'uppercase' }}>Impact Vision</div>
          <h2 style={{ fontSize:'clamp(1.7rem,4.5vw,3rem)', fontWeight:800, color:'#fff', letterSpacing:'-0.04em', marginBottom:14, lineHeight:1.15 }}>
            No patient waits for blood<br/><span style={{ color:'#60a5fa' }}>because of location</span>
          </h2>
          <p style={{ fontSize:'clamp(15px,2.5vw,17px)', color:'rgba(255,255,255,0.42)', maxWidth:520, margin:'0 auto 52px', lineHeight:1.75 }}>
            Our goal is a national digital infrastructure where geography is never a reason for a preventable death.
          </p>
        </div>

        <div className="cards-grid-2" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:18, marginBottom:52 }}>
          {vision.map((v,i) => {
            const [ref, inView] = useInView()
            return (
              <div key={i} ref={ref} className={`reveal card-hover${inView?' visible':''}`}
                style={{ transitionDelay:`${i*0.1}s`, borderRadius:20, padding:'clamp(22px,4vw,30px) clamp(18px,3vw,24px)',
                  background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', textAlign:'left' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(96,165,250,0.25)'; e.currentTarget.style.background='rgba(59,130,246,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.025)' }}>
                <div style={{ fontSize:'clamp(26px,4vw,32px)', marginBottom:14 }}>{v.icon}</div>
                <h3 style={{ fontSize:'clamp(15px,2vw,17px)', fontWeight:700, color:'#fff', marginBottom:9 }}>{v.title}</h3>
                <p style={{ fontSize:'clamp(13px,2vw,14px)', color:'rgba(255,255,255,0.42)', lineHeight:1.75 }}>{v.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Quote */}
        <div ref={quoteRef} className={`reveal-scale${quoteIn?' visible':''}`}
          style={{ padding:'clamp(28px,5vw,44px)', borderRadius:22,
            background:'linear-gradient(135deg,rgba(185,28,28,0.1),rgba(109,40,217,0.08))',
            border:'1px solid rgba(185,28,28,0.2)' }}>
          <p style={{ fontSize:'clamp(1rem,3vw,1.4rem)', color:'rgba(255,255,255,0.7)', lineHeight:1.8, maxWidth:600, margin:'0 auto', fontStyle:'italic' }}>
            "We are not building an app. We are building the{' '}
            <span style={{ color:'#ef4444', fontWeight:700, fontStyle:'normal' }}>infrastructure</span>{' '}
            that saves lives at scale."
          </p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginTop:22 }}>
            <div style={{ width:36, height:36, borderRadius:'50%', background:'rgba(185,28,28,0.2)', border:'1px solid rgba(185,28,28,0.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, flexShrink:0 }}>🩸</div>
            <div style={{ textAlign:'left' }}>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)', fontWeight:600 }}>
                <a href="https://portfolio.raktport.in/" target="_blank" rel="noopener noreferrer"
                  style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='#ef4444'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.5)'}>Ajay Kushwaha</a>
              </div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.25)' }}>Founder · RaktPort</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
