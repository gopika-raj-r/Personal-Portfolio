import React from 'react';
import {motion} from 'framer-motion';
import {GraduationCap,Briefcase,Rocket,Award,CheckCircle2,Trophy,Zap,Globe,Cpu} from 'lucide-react';

const certs=[
  {title:'Software Engineering & Agile Software Development',desc:'Infosys Springboard — Comprehensive training in software engineering principles and Agile/Scrum methodologies.',col:'#06b6d4',year:'2026'},
  {title:'Hands-on Data Visualization with Microsoft Power BI',desc:'Infosys Springboard — Practical data storytelling and BI dashboard design using Power BI.',col:'#f59e0b',year:'2026'},
  {title:'100 Days of Code: Python Pro Bootcamp',desc:'Udemy — Intensive mastery of Python, automation, data science and its ecosystem.',col:'var(--secondary)',year:'2025'},
  {title:'Full Stack Developer Trainee',desc:'Professional certification in end-to-end MERN development and modern software architectures.',col:'var(--primary)',year:'2024'},
];

const achievements=[
  {I:Rocket,txt:'Architected TriRoute AI — an innovative GenAI roadmap engine using MERN and Generative AI.'},
  {I:Zap,txt:'Deployed AIDORA donation platform with secure payment workflows and admin panel.'},
  {I:Globe,txt:'Contributed to real-world research visualization tools at Logiprompt Techno Solutions.'},
  {I:Cpu,txt:'Engineered NITHARA image engine for enterprise 4K batch processing and branding.'},
];

export default function Certifications(){
  return(
    <section id="certifications" className="section" style={{background:'rgba(99,102,241,0.02)'}}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Certs & Achievements</span>
          <h2 className="section-title">Accolades</h2>
          <div className="divider"/>
        </div>
        <div className="grid-2" style={{gap:'4rem'}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'2rem'}}>
              <Award style={{color:'var(--primary)'}} size={26}/>
              <h3 style={{fontSize:'1.5rem',color:'#fff'}}>Certifications</h3>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {certs.map((c,i)=>(
                <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                  transition={{delay:i*0.1}} whileHover={{x:8}}
                  style={{display:'flex',alignItems:'flex-start',gap:'1.25rem',padding:'1.25rem 1.5rem',background:'var(--bg-card)',border:'1px solid var(--border)',borderLeft:`4px solid ${c.col}`,borderRadius:'0 1rem 1rem 0',transition:'all 0.3s'}}>
                  <div style={{padding:'0.6rem',background:`${c.col}18`,borderRadius:'0.75rem',color:c.col,flexShrink:0}}>
                    <CheckCircle2 size={22}/>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'0.5rem',flexWrap:'wrap',marginBottom:'0.35rem'}}>
                      <h4 style={{color:'#fff',fontWeight:700,fontSize:'0.95rem',lineHeight:1.4}}>{c.title}</h4>
                      <span style={{fontSize:'0.65rem',fontWeight:800,padding:'0.15rem 0.5rem',background:`${c.col}20`,color:c.col,borderRadius:'9999px',flexShrink:0}}>{c.year}</span>
                    </div>
                    <p style={{color:'var(--muted)',fontSize:'0.8rem',lineHeight:1.6}}>{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'2rem'}}>
              <Trophy style={{color:'var(--secondary)'}} size={26}/>
              <h3 style={{fontSize:'1.5rem',color:'#fff'}}>Key Achievements</h3>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
              {achievements.map(({I,txt},i)=>(
                <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:i*0.1}} className="glass-card"
                  style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem',borderRadius:'1rem'}}>
                  <div style={{width:'2.5rem',height:'2.5rem',borderRadius:'50%',background:'rgba(255,255,255,0.05)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--primary)',flexShrink:0}}>
                    <I size={18}/>
                  </div>
                  <p style={{color:'var(--muted)',fontSize:'0.875rem',lineHeight:1.6}}>{txt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
