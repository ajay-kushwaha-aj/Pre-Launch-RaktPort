import useInView from '../hooks/useInView'

export default function RTID() {
  const [leftRef, leftIn]   = useInView()
  const [rightRef, rightIn] = useInView()
  const features = [
    { icon:'🔐', label:'Unique per donation' },
    { icon:'🏥', label:'Cross-hospital tracking' },
    { icon:'📋', label:'Full audit trail' },
    { icon:'⚡', label:'Real-time updates' },
  ]
  const rows = [
    ['RTID',             'D-RTID-160126-VCGG', '#fbbf24'],
    ['Donor ID',         'DNR-AK-7823',        null],
    ['Blood Group',      'B+',                 '#ef4444'],
    ['Donation Site',    'Apollo Delhi',        null],
    ['Patient Hospital', 'AIIMS Mumbai',        null],
    ['Status',           '✅ CREDITED',         '#86efac'],
    ['Timestamp',        '2026-01-16 10:32 IST',null],
  ]
  return (
    <section id="rtid" className="section-pad" style={{ position:'relative', zIndex:1, padding:'100px 24px', background:'rgba(185,28,28,0.025)' }}>
      <div className="split-layout" style={{ maxWidth:980, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:56, alignItems:'center', justifyContent:'center' }}>

        {/* Left */}
        <div ref={leftRef} className={`reveal-left${leftIn?' visible':''}`} style={{ flex:1, minWidth:260, maxWidth:460 }}>
          <div style={{ display:'inline-block', padding:'5px 14px', borderRadius:99, background:'rgba(251,191,36,0.1)', border:'1px solid rgba(251,191,36,0.22)', color:'#fde68a', fontSize:11.5, fontWeight:700, letterSpacing:'0.08em', marginBottom:18, textTransform:'uppercase' }}>Key Innovation</div>
          <h2 style={{ fontSize:'clamp(1.7rem,4.5vw,2.9rem)', fontWeight:800, color:'#fff', letterSpacing:'-0.04em', marginBottom:16, lineHeight:1.15 }}>
            Meet the <span style={{ color:'#fbbf24' }}>RTID</span> System
          </h2>
          <p style={{ fontSize:'clamp(14px,2.5vw,16px)', color:'rgba(255,255,255,0.42)', lineHeight:1.85, marginBottom:18 }}>
            The <strong style={{ color:'rgba(255,255,255,0.7)' }}>RaktPort Transfusion ID</strong> is a unique identifier assigned to every donation event, linking the donor, blood unit, and patient across any hospital in the network.
          </p>
          <p style={{ fontSize:'clamp(14px,2.5vw,16px)', color:'rgba(255,255,255,0.42)', lineHeight:1.85, marginBottom:28 }}>
            This creates a tamper-proof chain of custody ensuring full transparency for all parties.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {features.map((f,i) => (
              <div key={i} className="card-hover" style={{ display:'flex', alignItems:'center', gap:7, padding:'8px 14px', borderRadius:99,
                background:'rgba(251,191,36,0.07)', border:'1px solid rgba(251,191,36,0.15)',
                fontSize:'clamp(12px,2vw,13px)', color:'rgba(255,255,255,0.6)', cursor:'default' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(251,191,36,0.15)'; e.currentTarget.style.borderColor='rgba(251,191,36,0.35)'; e.currentTarget.style.color='#fde68a' }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(251,191,36,0.07)'; e.currentTarget.style.borderColor='rgba(251,191,36,0.15)'; e.currentTarget.style.color='rgba(255,255,255,0.6)' }}>
                <span>{f.icon}</span><span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — RTID card */}
        <div ref={rightRef} className={`reveal-right rtid-card${rightIn?' visible':''}`} style={{ flex:1, minWidth:260, maxWidth:380, width:'100%' }}>
          <div style={{ borderRadius:22, padding:'clamp(20px,4vw,30px)', background:'rgba(255,255,255,0.03)',
            border:'1px solid rgba(251,191,36,0.18)', fontFamily:"'Courier New',monospace",
            transition:'all 0.3s ease', overflowX:'auto' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(251,191,36,0.4)'; e.currentTarget.style.boxShadow='0 20px 60px rgba(251,191,36,0.07)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(251,191,36,0.18)'; e.currentTarget.style.boxShadow='none' }}>
            <div style={{ fontSize:11, color:'rgba(251,191,36,0.55)', marginBottom:20, letterSpacing:'0.06em', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#86efac', display:'inline-block', animation:'pulse 2s infinite' }}/>
              RTID SAMPLE RECORD — LIVE
            </div>
            {rows.map(([k,v,color]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0',
                borderBottom:'1px solid rgba(255,255,255,0.05)', fontSize:'clamp(11px,2vw,13px)', gap:10, flexWrap:'wrap' }}>
                <span style={{ color:'rgba(255,255,255,0.3)', flexShrink:0 }}>{k}</span>
                <span style={{ color:color||'rgba(255,255,255,0.72)', fontWeight:k==='RTID'?700:400, textAlign:'right', wordBreak:'break-all' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
