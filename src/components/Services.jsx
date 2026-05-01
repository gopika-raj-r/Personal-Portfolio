import React from 'react';
import {motion} from 'framer-motion';
import {Layout,Server,Database,Cpu,Zap,Terminal} from 'lucide-react';

const services=[
  {icon:Layout,title:'Full Stack Development',desc:'End-to-end applications using MERN stack with scalable, maintainable architecture.',tags:['React','Node','Express','MongoDB']},
  {icon:Cpu,title:'UI/UX Development',desc:'High-fidelity, interactive, and responsive interfaces with modern design systems.',tags:['Framer Motion','Tailwind','CSS3']},
  {icon:Server,title:'API Integration',desc:'Architecting RESTful APIs and integrating third-party services for seamless data flow.',tags:['REST','Postman','Webhooks']},
  {icon:Database,title:'Database Management',desc:'Optimizing data schemas for high-performance apps with complex data relationships.',tags:['Mongoose','SQL','Aggregation']},
  {icon:Zap,title:'Performance Optimization',desc:'Enhancing application speed through code-splitting, lazy loading, and best practices.',tags:['Vite','Lighthouse','SEO']},
  {icon:Terminal,title:'Problem Solving',desc:'Tackling algorithmic challenges with efficient, clean, and well-documented solutions.',tags:['DSA','Logic','Python']},
];

export default function Services(){
  return(
    <section id="services" className="section" style={{background:'rgba(99,102,241,0.02)'}}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">My Services</span>
          <h2 className="section-title">Technical Specialties</h2>
          <div className="divider"/>
        </div>
        <div className="grid-3" style={{gap:'1.5rem'}}>
          {services.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{delay:i*0.08}} className="glass-card" style={{padding:'2rem'}}>
              <div style={{width:'3.5rem',height:'3.5rem',borderRadius:'1rem',background:'rgba(99,102,241,0.1)',color:'var(--primary)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.5rem',transition:'all 0.4s'}}>
                <s.icon size={26}/>
              </div>
              <h3 style={{fontSize:'1.2rem',color:'#fff',marginBottom:'0.75rem'}}>{s.title}</h3>
              <p style={{color:'var(--muted)',fontSize:'0.875rem',lineHeight:1.7,marginBottom:'1.25rem'}}>{s.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'0.4rem'}}>
                {s.tags.map(t=><span key={t} className="tech-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
