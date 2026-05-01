import React from 'react';
import {motion} from 'framer-motion';
import {Briefcase,GraduationCap,ChevronRight} from 'lucide-react';

export default function Experience(){
  return(
    <section id="experience" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Experience & Education</span>
          <h2 className="section-title">The Journey</h2>
          <div className="divider"/>
        </div>
        <div className="grid-2" style={{gap:'5rem'}}>
          {/* Professional */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div style={{padding:'0.75rem',background:'rgba(99,102,241,0.15)',borderRadius:'0.75rem',color:'var(--primary)'}}><Briefcase size={26}/></div>
              <h3 style={{fontSize:'1.5rem',color:'#fff'}}>Professional Path</h3>
            </div>
            <div className="timeline">
              <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="timeline-item">
                <div className="timeline-dot"/>
                <p style={{color:'var(--primary)',fontWeight:800,fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'0.5rem'}}>JUNE 2024 – AUG 2024</p>
                <h4 style={{fontSize:'1.3rem',color:'#fff',marginBottom:'0.25rem'}}>MERN Stack Developer Intern</h4>
                <p style={{color:'var(--secondary)',fontWeight:600,fontSize:'0.875rem',marginBottom:'1rem'}}>Logiprompt Techno Solutions Pvt Ltd · Trivandrum</p>
                <ul style={{display:'flex',flexDirection:'column',gap:'0.6rem'}}>
                  {['Assisted in React.js development for research visualization tools.','Worked on database management and API integration workflows.','Participated in Agile sprints, testing, and performance improvement.'].map((pt,i)=>(
                    <li key={i} style={{display:'flex',gap:'0.5rem',color:'var(--muted)',fontSize:'0.875rem'}}>
                      <ChevronRight size={15} style={{color:'var(--primary)',flexShrink:0,marginTop:'0.2rem'}}/>{pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div style={{padding:'0.75rem',background:'rgba(168,85,247,0.15)',borderRadius:'0.75rem',color:'var(--secondary)'}}><GraduationCap size={26}/></div>
              <h3 style={{fontSize:'1.5rem',color:'#fff'}}>Academic Foundation</h3>
            </div>
            <div className="timeline">
              {[
                {year:'2024 – 2026',title:'Master of Computer Applications (MCA)',org:'CHMM College for Advanced Studies, University of Kerala',note:'Specializing in Full Stack Engineering and Modern UI Architecture.'},
                {year:'2021 – 2024',title:'BSc Computer Science',org:'AJ College of Science and Technology, University of Kerala',note:'Core CS principles, algorithms, and software engineering fundamentals.'},
              ].map((e,i)=>(
                <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="timeline-item">
                  <div className="timeline-dot timeline-dot-secondary"/>
                  <p style={{color:'var(--secondary)',fontWeight:800,fontSize:'0.7rem',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'0.5rem'}}>{e.year}</p>
                  <h4 style={{fontSize:'1.2rem',color:'#fff',marginBottom:'0.25rem'}}>{e.title}</h4>
                  <p style={{color:'var(--muted)',fontSize:'0.8rem',marginBottom:'0.75rem'}}>{e.org}</p>
                  <p style={{color:'var(--muted)',fontSize:'0.875rem',fontStyle:'italic'}}>{e.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
