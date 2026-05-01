import React from 'react';
import {motion} from 'framer-motion';
import {Code2,Server,Database,Layout,Terminal,Cpu,Layers,Sparkles,Globe} from 'lucide-react';

const GithubIcon=()=>(
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const groups=[
  {label:'Core Stack',skills:[{n:'MongoDB',I:Database},{n:'Express.js',I:Server},{n:'React.js',I:Layers},{n:'Node.js',I:Cpu}]},
  {label:'Frontend',skills:[{n:'JavaScript',I:Code2},{n:'HTML5/CSS3',I:Layout},{n:'Tailwind CSS',I:Sparkles},{n:'Framer Motion',I:Globe}]},
  {label:'Backend & Tools',skills:[{n:'Python',I:Terminal},{n:'SQL',I:Database},{n:'OpenCV',I:Cpu},{n:'Git/GitHub',I:GithubIcon}]},
];

export default function Skills(){
  return(
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="divider"/>
        </div>
        {groups.map((g,gi)=>(
          <div key={gi} style={{marginBottom:'3.5rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.75rem'}}>
              <div style={{width:'2rem',height:'0.25rem',background:'linear-gradient(to right,var(--primary),var(--secondary))',borderRadius:'9999px'}}/>
              <span style={{color:'#fff',fontWeight:700,fontSize:'1rem',letterSpacing:'0.05em'}}>{g.label}</span>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem'}}>
              {g.skills.map(({n,I},i)=>(
                <motion.div key={i} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                  transition={{delay:i*0.07}} whileHover={{y:-8,borderColor:'var(--primary)'}}
                  className="skill-badge">
                  <div style={{width:'3.5rem',height:'3.5rem',borderRadius:'1rem',background:'rgba(99,102,241,0.1)',color:'var(--primary)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <I size={28}/>
                  </div>
                  <span style={{fontWeight:700,fontSize:'0.8rem',color:'var(--muted)'}}>{n}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
