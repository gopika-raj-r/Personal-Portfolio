import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence,useScroll,useSpring} from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Loader=()=>(
  <motion.div initial={{opacity:1}} exit={{opacity:0}} transition={{duration:0.6}}
    className="loader-wrapper">
    <div className="loader-box"/>
    <p style={{color:'var(--muted)',letterSpacing:'0.3em',fontSize:'0.75rem',fontWeight:800,textTransform:'uppercase'}}>Loading Experience</p>
  </motion.div>
);

const ScrollBar=()=>{
  const {scrollYProgress}=useScroll();
  const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30});
  return <motion.div className="scroll-bar" style={{scaleX}}/>;
};

const Bg=()=>(
  <div style={{position:'fixed',inset:0,zIndex:-1,background:'var(--bg)',overflow:'hidden'}}>
    <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>
  </div>
);

export default function App(){
  const [loading,setLoading]=useState(true);
  useEffect(()=>{const t=setTimeout(()=>setLoading(false),2000);return()=>clearTimeout(t);},[]);
  return(
    <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif"}}>
      <AnimatePresence>{loading&&<Loader/>}</AnimatePresence>
      <Bg/><ScrollBar/><Navbar/>
      <main><Hero/><About/><Services/><Experience/><Projects/><Skills/><Certifications/><Contact/></main>
      <Footer/>
    </div>
  );
}
