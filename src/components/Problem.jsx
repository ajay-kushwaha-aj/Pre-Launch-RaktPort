import useInView from '../hooks/useInView'

export default function Problem() {
  const [titleRef, titleIn] = useInView()
  const problems = [
    { icon:'📍', title:'Geographic Barriers',  desc:'Donors often cannot reach the required hospital in time, even when willing and eligible to donate.', hoverBg:'rgba(239,68,68,0.05)', hoverBorder:'rgba(239,68,68,0.25)' },
    { icon:'⏱️', title:'Critical Delays',      desc:'Patients struggle to find compatible donors quickly. Every minute of delay can cost a life.',        hoverBg:'rgba(251,146,60,0.05)', hoverBorder:'rgba(251,146,60,0.25)' },
    { icon:'🏚️', title:'Isolated Systems',     desc:'Hospitals operate in silos with no shared infrastructure for real-time donor-patient coordination.', hoverBg:'rgba(168,85,247,0.05)', hoverBorder:'rgba(168,85,247,0.25)' },
  ]
  return (
    <section id="about" className="section-pad" style={{ position:'relative', zIndex:1, padding:'100px 24px', textAlign:'center' }}>
      <div style={{ maxWidth:960, margin:'0 auto' }}>
        <div ref={titleRef} className={`reveal${titleIn?' visible':''}`}>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:99, background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.22)', color:'#fca5a5', fontSize:11.5, fontWeight:700, letterSpacing:'0.08em', marginBottom:18, textTransform:'uppercase' }}>The Problem</div>
          <h2 style={{ fontSize:'clamp(1.7rem,4.5vw,3rem)', fontWeight:800, color:'#fff', letterSpacing:'-0.04em', marginBottom:14, lineHeight:1.15 }}>
            Blood systems are <span style={{ color:'#ef4444' }}>fragmented</span>
          </h2>
          <p style={{ fontSize:'clamp(15px,2.5vw,17px)', color:'rgba(255,255,255,0.42)', maxWidth:500, margin:'0 auto 52px', lineHeight:1.75 }}>
            Current blood donation infrastructure creates invisible barriers that cost lives every day.
          </p>
        </div>

        <div className="cards-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
          {problems.map((p,i) => {
            const [ref, inView] = useInView()
            return (
              <div key={i} ref={ref} className={`reveal card-hover${inView?' visible':''}`}
                style={{ transitionDelay:`${i*0.1}s`, borderRadius:20, padding:'clamp(24px,4vw,36px) clamp(20px,3vw,28px)',
                  background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', textAlign:'left' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=p.hoverBorder; e.currentTarget.style.background=p.hoverBg }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.025)' }}>
                <div style={{ fontSize:'clamp(28px,5vw,36px)', marginBottom:16 }}>{p.icon}</div>
                <h3 style={{ fontSize:'clamp(16px,2.5vw,18px)', fontWeight:700, color:'#fff', marginBottom:9 }}>{p.title}</h3>
                <p style={{ fontSize:'clamp(13px,2vw,14px)', color:'rgba(255,255,255,0.42)', lineHeight:1.75 }}>{p.desc}</p>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop:44, padding:'clamp(18px,3vw,24px) clamp(20px,3vw,32px)', borderRadius:16,
          background:'rgba(185,28,28,0.08)', border:'1px solid rgba(185,28,28,0.2)' }}>
          <p style={{ fontSize:'clamp(14px,2.5vw,16px)', color:'rgba(255,255,255,0.58)', lineHeight:1.75 }}>
            <span style={{ color:'#ef4444', fontWeight:700 }}>Result: </span>
            India faces a shortfall of over <span style={{ color:'#fff', fontWeight:700 }}>47 lakh units</span> of blood annually — leading to preventable deaths when every minute matters.
          </p>
        </div>
      </div>
    </section>
  )
}
