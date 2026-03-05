import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import RTID from './components/RTID'
import Impact from './components/Impact'
import JoinForm from './components/JoinForm'
import Footer from './components/Footer'

export default function App() {
  const joinRef = useRef(null)
  const scrollToJoin = () => joinRef.current?.scrollIntoView({ behavior:'smooth' })

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(150deg,#08080f 0%,#0f0010 45%,#08080f 100%)',overflowX:'hidden',position:'relative',color:'#fff'}}>
      {/* Global atmosphere */}
      <div style={{position:'fixed',inset:0,pointerEvents:'none',overflow:'hidden',zIndex:0}}>
        <div style={{position:'absolute',width:800,height:800,top:'-20%',left:'-15%',background:'radial-gradient(circle,rgba(185,28,28,0.14) 0%,transparent 70%)',filter:'blur(70px)'}}/>
        <div style={{position:'absolute',width:600,height:600,top:'20%',right:'-12%',background:'radial-gradient(circle,rgba(109,40,217,0.09) 0%,transparent 70%)',filter:'blur(60px)'}}/>
        <div style={{position:'absolute',width:700,height:700,bottom:'-10%',left:'25%',background:'radial-gradient(circle,rgba(185,28,28,0.09) 0%,transparent 70%)',filter:'blur(80px)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(185,28,28,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(185,28,28,0.035) 1px,transparent 1px)',backgroundSize:'64px 64px'}}/>
      </div>
      <Navbar onJoinClick={scrollToJoin}/>
      <Hero joinRef={joinRef}/>
      <Problem/>
      <Solution/>
      <HowItWorks/>
      <RTID/>
      <Impact/>
      <JoinForm joinRef={joinRef}/>
      <Footer/>
    </div>
  )
}
