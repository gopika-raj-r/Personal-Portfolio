import React from 'react';
import {motion} from 'framer-motion';
import {GraduationCap,Briefcase,Rocket,Award} from 'lucide-react';

const stats=[
  {icon:GraduationCap,label:'MCA Full Stack',val:'2024–26',col:'var(--primary)'},
  {icon:Briefcase,label:'Internship',val:'Logiprompt',col:'var(--secondary)'},
  {icon:Rocket,label:'Projects Built',val:'10+',col:'var(--accent)'},
  {icon:Award,label:'Certifications',val:'4+',col:'var(--primary)'},
];

export default function About(){
  return(
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Crafting Digital Solutions</h2>
          <div className="divider"/>
        </div>
        <div className="grid-2 items-center" style={{gap:'4rem'}}>
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
            className="glass-card" style={{padding:'2.5rem',borderLeft:'4px solid var(--primary)'}}>
            <p style={{fontSize:'clamp(0.95rem,1.5vw,1.1rem)',lineHeight:1.8,color:'var(--muted)',marginBottom:'1.5rem'}}>
              "Tech-driven developer with a focus on <strong style={{color:'#fff'}}>clean code</strong> and modern aesthetics.
              As an MCA final year student, I have mastered the MERN stack to build projects like{' '}
              <strong style={{color:'var(--primary)'}}>TriRoute AI</strong>, focusing on creating seamless user experiences."
            </p>
            <p style={{fontSize:'clamp(0.875rem,1.3vw,1rem)',lineHeight:1.8,color:'var(--muted)'}}>
              I approach technical challenges with a blend of logic and design-thinking, building tools that are as functional as they are beautiful.
            </p>
          </motion.div>
          <div className="grid-2" style={{gap:'1.25rem'}}>
            {stats.map((s,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{delay:i*0.1}} className="stat-card">
                <div style={{width:'3rem',height:'3rem',borderRadius:'0.75rem',background:`${s.col}18`,color:s.col,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1rem'}}>
                  <s.icon size={22}/>
                </div>
                <h4 style={{fontSize:'1.5rem',fontWeight:800,color:'#fff',marginBottom:'0.25rem'}}>{s.val}</h4>
                <p style={{fontSize:'0.7rem',color:'var(--muted)',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
