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

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut', when: 'afterChildren' } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return(
    <nav style={{position:'fixed',width:'100%',zIndex:100,transition:'all 0.4s'}} className={scrolled?'nav-glass':''}>
      <div className="container flex items-center justify-between" style={{padding:'1rem 0'}}>
        <Link to="hero" smooth className="text-gradient flex items-center gap-2 cursor-pointer"
          style={{fontSize:'1.4rem',fontWeight:800,letterSpacing:'-0.04em',fontFamily:"'Outfit',sans-serif",whiteSpace:'nowrap'}}>
          <Zap size={20} style={{color:'var(--primary)'}}/> Gopika Raj R
        </Link>
        <div style={{gap:'2rem'}} className="desktop-flex items-center">
          {links.map(l=>(
            <Link key={l.name} to={l.to} smooth offset={-80} className="nav-link cursor-pointer">{l.name}</Link>
          ))}
        </div>
        <button className="mobile-only" onClick={()=>setOpen(!open)}
          style={{color:'#fff',background:'rgba(255,255,255,0.05)',border:'1px solid var(--border)',borderRadius:'0.75rem',padding:'0.5rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',transition:'var(--transition)'}}>
          {open?<X size={24} style={{color:'var(--accent)'}}/>:<Menu size={24}/>}
        </button>
      </div>
      <AnimatePresence>
        {open&&(
          <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants}
            style={{background:'rgba(3,7,18,0.98)',backdropFilter:'blur(20px)',borderBottom:'1px solid var(--border)',overflow:'hidden',padding:'1.5rem 2rem',display:'flex',flexDirection:'column',gap:'1rem'}}>
            {links.map(l=>(
              <motion.div key={l.name} variants={itemVariants}>
                <Link to={l.to} smooth offset={-80} onClick={()=>setOpen(false)}
                  className="nav-link"
                  style={{display:'block',padding:'0.75rem 0',fontSize:'1.1rem',fontWeight:700,borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
                  {l.name}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} style={{marginTop:'1rem'}}>
              <Link to="contact" smooth offset={-80} onClick={()=>setOpen(false)} className="btn-primary" style={{width:'100%',justifyContent:'center'}}>
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
