import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';

const GithubIcon=()=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const ArrowIcon=()=>(
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
  </svg>
);

const projects=[
  {
    title:'TriRoute AI',
    cat:'MERN + Generative AI',
    desc:'Automated multi-path roadmap generator using Generative AI. Engineered MongoDB/Mongoose schemas for complex roadmap management and a high-fidelity React interface with Framer Motion animations.',
    tech:['MongoDB','Express.js','React','Node.js','OpenAI'],
    link:'https://github.com/gopika-raj-r',
    img:'/triroute.png',
    accent:'#6366f1',
    glow:'rgba(99,102,241,0.25)',
  },
  {
    title:'VisionStream Asset Pipeline',
    cat:'Python + Computer Vision',
    desc:'High-performance image branding engine for 4K product photography. Integrated Pillow, OpenCV, and NumPy for high-fidelity batch resizing and computational watermarking with async threading.',
    tech:['Python','OpenCV','NumPy','Pillow','Tkinter'],
    link:'https://github.com/gopika-raj-r',
    img:'/nithara.png',
    accent:'#f43f5e',
    glow:'rgba(244,63,94,0.25)',
  },
  {
    title:'AIDORA',
    cat:'Full Stack Development',
    desc:'Secure donation platform with user authentication, admin panel, payment workflows, and complete database management — built with MERN stack and REST API integration.',
    tech:['React','Node.js','MongoDB','Express','REST API'],
    link:'https://github.com/gopika-raj-r',
    img:'/aidora.png',
    accent:'#a855f7',
    glow:'rgba(168,85,247,0.25)',
  },
];

const slideVariants={
  enter:d=>({x:d>0?80:-80,opacity:0}),
  center:{x:0,opacity:1,transition:{duration:0.5,ease:[0.25,0.46,0.45,0.94]}},
  exit:d=>({x:d>0?-80:80,opacity:0,transition:{duration:0.4,ease:[0.25,0.46,0.45,0.94]}}),
};

export default function Projects(){
  const [active,setActive]=useState(0);
  const [dir,setDir]=useState(1);

  const go=n=>{setDir(n>active?1:-1);setActive(n);};
  const prev=()=>go(active===0?projects.length-1:active-1);
  const next=()=>go(active===projects.length-1?0:active+1);

  useEffect(()=>{
    const t=setInterval(()=>{setDir(1);setActive(a=>(a+1)%projects.length);},5000);
    return()=>clearInterval(t);
  },[]);

  const p=projects[active];

  return(
    <section id="projects" className="section" style={{background:'rgba(6,6,20,0.6)'}}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">Innovation Gallery</h2>
          <div className="divider"/>
        </div>

        {/* Main Slider Card */}
        <div style={{position:'relative',borderRadius:'2rem',overflow:'hidden',border:'1px solid var(--border)',background:'rgba(10,12,28,0.95)'}}>

          {/* Accent glow top */}
          <motion.div animate={{opacity:[0.4,0.7,0.4]}} transition={{duration:3,repeat:Infinity}}
            style={{position:'absolute',top:0,left:0,right:0,height:'3px',background:`linear-gradient(to right,transparent,${p.accent},transparent)`,zIndex:2,transition:'background 0.6s'}}/>

          <AnimatePresence custom={dir} mode="wait">
            <motion.div key={active} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit"
              className="proj-grid"
              style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:0}}>

              {/* LEFT — Details */}
              <div className="proj-details" style={{padding:'3rem',display:'flex',flexDirection:'column',justifyContent:'center',gap:'1.5rem',borderRight:'1px solid var(--border)'}}>
                {/* Category pill */}
                <div style={{display:'inline-flex',alignItems:'center',gap:'0.4rem',width:'fit-content',padding:'0.35rem 0.9rem',borderRadius:'9999px',background:`${p.accent}18`,border:`1px solid ${p.accent}40`,color:p.accent,fontSize:'0.7rem',fontWeight:800,letterSpacing:'0.15em',textTransform:'uppercase'}}>
                  {p.cat}
                </div>

                {/* Title */}
                <h3 style={{fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:800,color:'#ffffff',lineHeight:1.1,letterSpacing:'-0.03em',fontFamily:"'Outfit',sans-serif"}}>
                  {p.title}
                </h3>

                {/* Description */}
                <p style={{color:'#cbd5e1',fontSize:'clamp(0.85rem,1.4vw,1rem)',lineHeight:1.75,maxWidth:'440px'}}>
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div>
                  <p style={{color:'#64748b',fontSize:'0.7rem',fontWeight:800,letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'0.75rem'}}>Tech Stack</p>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'0.6rem'}}>
                    {p.tech.map(t=>(
                      <span key={t} style={{
                        padding:'0.45rem 1rem',
                        borderRadius:'0.5rem',
                        background:`${p.accent}12`,
                        border:`1px solid ${p.accent}35`,
                        color:'#e2e8f0',
                        fontSize:'0.8rem',
                        fontWeight:700,
                        letterSpacing:'0.03em',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <a href={p.link} target="_blank" rel="noreferrer"
                  style={{
                    display:'inline-flex',alignItems:'center',gap:'0.65rem',
                    padding:'0.85rem 1.75rem',
                    borderRadius:'0.75rem',
                    background:`${p.accent}18`,
                    border:`1.5px solid ${p.accent}50`,
                    color:'#ffffff',
                    fontWeight:700,
                    fontSize:'0.9rem',
                    width:'fit-content',
                    transition:'all 0.3s',
                    cursor:'pointer',
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background=p.accent;e.currentTarget.style.borderColor=p.accent;e.currentTarget.style.boxShadow=`0 0 25px ${p.glow}`;e.currentTarget.style.transform='translateY(-2px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background=`${p.accent}18`;e.currentTarget.style.borderColor=`${p.accent}50`;e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='translateY(0)';}}>
                  <GithubIcon/> View GitHub Repository <ArrowIcon/>
                </a>
              </div>

              {/* RIGHT — Screenshot */}
              <div className="proj-image" style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem',background:'rgba(0,0,0,0.2)'}}>
                <div style={{width:'100%',borderRadius:'1.25rem',overflow:'hidden',border:`1px solid ${p.accent}30`,boxShadow:`0 0 40px ${p.glow}`,position:'relative'}}>
                  {/* Browser bar */}
                  <div style={{background:'rgba(17,24,39,0.95)',padding:'0.6rem 1rem',display:'flex',alignItems:'center',gap:'0.5rem',borderBottom:`1px solid ${p.accent}20`}}>
                    {['#ff5f57','#febc2e','#28c840'].map((c,i)=>(
                      <div key={i} style={{width:'10px',height:'10px',borderRadius:'50%',background:c}}/>
                    ))}
                    <div style={{flex:1,background:'rgba(255,255,255,0.05)',borderRadius:'0.375rem',height:'20px',marginLeft:'0.5rem',display:'flex',alignItems:'center',paddingLeft:'0.5rem'}}>
                      <span style={{color:'#475569',fontSize:'0.65rem',fontWeight:600}}>github.com/gopika-raj-r</span>
                    </div>
                  </div>
                  <img src={p.img} alt={p.title}
                    style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',objectPosition:'top',display:'block'}}
                    onError={e=>{
                      e.target.style.display='none';
                      e.target.nextSibling.style.display='flex';
                    }}/>
                  <div style={{display:'none',aspectRatio:'16/9',alignItems:'center',justifyContent:'center',background:`linear-gradient(135deg,${p.accent}20,rgba(0,0,0,0.3))`}}>
                    <span style={{color:'#475569',fontWeight:700,fontSize:'0.9rem'}}>{p.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next buttons */}
          {[{fn:prev,side:'left',sym:'‹'},{fn:next,side:'right',sym:'›'}].map(({fn,side,sym})=>(
            <button key={side} onClick={fn}
              style={{position:'absolute',[side]:'1rem',top:'50%',transform:'translateY(-50%)',zIndex:5,width:'2.5rem',height:'2.5rem',borderRadius:'50%',background:'rgba(10,12,28,0.9)',border:'1px solid var(--border)',color:'#fff',fontSize:'1.3rem',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',backdropFilter:'blur(8px)',transition:'all 0.3s'}}
              onMouseEnter={e=>{e.currentTarget.style.background=p.accent;e.currentTarget.style.borderColor=p.accent;}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(10,12,28,0.9)';e.currentTarget.style.borderColor='var(--border)';}}>
              {sym}
            </button>
          ))}
        </div>

        {/* Dots */}
        <div style={{display:'flex',justifyContent:'center',gap:'0.6rem',marginTop:'1.5rem'}}>
          {projects.map((_,i)=>(
            <button key={i} onClick={()=>go(i)}
              style={{width:i===active?'2.5rem':'0.6rem',height:'0.6rem',borderRadius:'9999px',background:i===active?projects[i].accent:'rgba(255,255,255,0.15)',border:'none',cursor:'pointer',transition:'all 0.4s',padding:0}}/>
          ))}
        </div>

        {/* Thumbnail Row */}
        <div className="thumb-row" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginTop:'1.75rem'}}>
          {projects.map((pr,i)=>(
            <motion.button key={i} whileHover={{y:-3}} onClick={()=>go(i)}
              style={{padding:0,border:`2px solid ${i===active?pr.accent:'rgba(255,255,255,0.08)'}`,borderRadius:'1rem',overflow:'hidden',cursor:'pointer',background:'none',transition:'border-color 0.3s',position:'relative'}}>
              <div style={{background:`${pr.accent}10`,padding:'0.75rem 1rem',display:'flex',alignItems:'center',gap:'0.75rem'}}>
                <div style={{width:'0.375rem',height:'0.375rem',borderRadius:'50%',background:pr.accent,flexShrink:0}}/>
                <span style={{color:i===active?'#fff':'#64748b',fontWeight:700,fontSize:'0.8rem',transition:'color 0.3s',textAlign:'left'}}>{pr.title}</span>
              </div>
              <img src={pr.img} alt={pr.title}
                style={{width:'100%',height:'70px',objectFit:'cover',objectPosition:'top',display:'block',opacity:i===active?1:0.5,transition:'opacity 0.3s'}}
                onError={e=>{e.target.style.display='none';}}/>
              {i===active&&<div style={{position:'absolute',inset:0,border:`2px solid ${pr.accent}`,borderRadius:'1rem',pointerEvents:'none'}}/>}
            </motion.button>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:968px){
          .proj-grid{grid-template-columns:1fr!important;}
          .proj-details{border-right:none!important;border-bottom:1px solid var(--border)!important;padding:2rem!important;}
          .proj-image{padding:2rem!important;}
        }
        @media(max-width:640px){
          .thumb-row{display:none!important;}
          .proj-details{padding:1.5rem!important;}
          .proj-image{padding:1.5rem!important;}
        }
      `}</style>
    </section>
  );
}
