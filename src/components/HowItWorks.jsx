import useInView from '../hooks/useInView'

export default function HowItWorks() {
  const [titleRef, titleIn] = useInView()
  const steps = [
    { n:'01', icon:'🏥', title:'Patient Request Created',  desc:'Hospital or family raises a blood request on RaktPort with patient details, blood group, and urgency level.', bg:'rgba(239,68,68,0.14)' },
    { n:'02', icon:'📡', title:'Nearby Donors Identified', desc:'The system instantly scans registered donors by compatibility, location, and last donation date.',               bg:'rgba(251,146,60,0.11)' },
    { n:'03', icon:'🩸', title:'Donor Donates Anywhere',   desc:"The matched donor visits any registered blood bank. Donation is logged under the patient's RTID automatically.", bg:'rgba(185,28,28,0.16)' },
    { n:'04', icon:'✅', title:'Credit Reaches Patient',   desc:"Blood unit is virtually credited to the patient's hospital. Transparent. Traceable. Life-saving.",               bg:'rgba(34,197,94,0.11)' },
  ]
  return (
    <section id="how-it-works" className="section-pad" style={{ position:'relative', zIndex:1, padding:'100px 24px', textAlign:'center' }}>
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <div ref={titleRef} className={`reveal${titleIn?' visible':''}`}>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:99, background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.22)', color:'#c4b5fd', fontSize:11.5, fontWeight:700, letterSpacing:'0.08em', marginBottom:18, textTransform:'uppercase' }}>How It Works</div>
          <h2 style={{ fontSize:'clamp(1.7rem,4.5vw,3rem)', fontWeight:800, color:'#fff', letterSpacing:'-0.04em', marginBottom:14 }}>
            Simple. Transparent. <span style={{ color:'#a78bfa' }}>Life-saving.</span>
          </h2>
          <p style={{ fontSize:'clamp(15px,2.5vw,17px)', color:'rgba(255,255,255,0.42)', maxWidth:460, margin:'0 auto 60px', lineHeight:1.75 }}>
            Four steps that eliminate the geographic barrier between donors and patients forever.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', maxWidth:640, margin:'0 auto' }}>
          {steps.map((s,i) => {
            const [ref, inView] = useInView()
            return (
              <div key={i} ref={ref} className={`reveal-left${inView?' visible':''}`}
                style={{ transitionDelay:`${i*0.13}s`, display:'flex', gap:'clamp(14px,3vw,28px)', alignItems:'flex-start', textAlign:'left' }}
                data-class="step-row">
                {/* Icon + connector */}
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                  <div className="step-icon-box"
                    style={{ width:58, height:58, borderRadius:16, background:s.bg,
                      border:'1px solid rgba(185,28,28,0.3)', display:'flex', alignItems:'center',
                      justifyContent:'center', fontSize:24, transition:'all 0.3s ease',
                      cursor:'default', flexShrink:0 }}
                    onMouseEnter={e => { e.currentTarget.style.transform='scale(1.1)'; e.currentTarget.style.boxShadow='0 0 20px rgba(185,28,28,0.3)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='none' }}>
                    {s.icon}
                  </div>
                  {i < steps.length-1 && (
                    <div style={{ width:2, height:'clamp(40px,6vw,56px)', background:'linear-gradient(to bottom,rgba(185,28,28,0.4),rgba(185,28,28,0.08))', margin:'6px 0', animation:'stepLine 2.5s ease-in-out infinite' }}/>
                  )}
                </div>
                {/* Text */}
                <div style={{ paddingTop:10, paddingBottom: i<steps.length-1 ? 'clamp(32px,5vw,52px)' : 0 }}>
                  <div style={{ fontSize:10.5, fontWeight:700, color:'rgba(185,28,28,0.7)', letterSpacing:'0.12em', marginBottom:6, textTransform:'uppercase' }}>Step {s.n}</div>
                  <h3 style={{ fontSize:'clamp(16px,2.5vw,19px)', fontWeight:700, color:'#fff', marginBottom:7 }}>{s.title}</h3>
                  <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'rgba(255,255,255,0.42)', lineHeight:1.75, maxWidth:480 }}>{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
