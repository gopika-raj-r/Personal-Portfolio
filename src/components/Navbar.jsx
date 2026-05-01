import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Menu,X,Zap} from 'lucide-react';
import {Link} from 'react-scroll';

const links=[
  {name:'About',to:'about'},{name:'Services',to:'services'},
  {name:'Experience',to:'experience'},{name:'Projects',to:'projects'},
  {name:'Skills',to:'skills'},{name:'Certifications',to:'certifications'},
  {name:'Contact',to:'contact'},
];

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>20);
    window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);
  },[]);
  return(
    <nav style={{position:'fixed',width:'100%',zIndex:100,transition:'all 0.4s'}} className={scrolled?'nav-glass':''}>
      <div className="container flex items-center justify-between" style={{padding:'1rem 0'}}>
        <Link to="hero" smooth className="text-gradient flex items-center gap-2 cursor-pointer"
          style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.04em',fontFamily:"'Outfit',sans-serif"}}>
          <Zap size={20} style={{color:'var(--primary)'}}/> Gopika Raj R
        </Link>
        <div style={{gap:'2rem'}} className="desktop-flex items-center">
          {links.map(l=>(
            <Link key={l.name} to={l.to} smooth offset={-80} className="nav-link cursor-pointer">{l.name}</Link>
          ))}
        </div>
        <button className="mobile-only" onClick={()=>setOpen(!open)}
          style={{color:'#fff',background:'none',border:'none',cursor:'pointer'}}>
          {open?<X size={26}/>:<Menu size={26}/>}
        </button>
      </div>
      <AnimatePresence>
        {open&&(
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
            style={{background:'rgba(3,7,18,0.98)',borderBottom:'1px solid var(--border)',overflow:'hidden',padding:'1.5rem 2rem',display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            {links.map(l=>(
              <Link key={l.name} to={l.to} smooth offset={-80} onClick={()=>setOpen(false)}
                style={{color:'var(--muted)',fontWeight:700,fontSize:'1.1rem'}}>
                {l.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
