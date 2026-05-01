import React from 'react';
import {Zap,Mail} from 'lucide-react';

const GithubIcon=()=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon=()=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const socials=[
  {I:GithubIcon,href:'https://github.com/gopika-raj-r'},
  {I:LinkedinIcon,href:'https://www.linkedin.com/in/gopika-raj-/'},
  {I:Mail,href:'mailto:rajgopika949@gmail.com'},
];

export default function Footer(){
  return(
    <footer style={{borderTop:'1px solid var(--border)',padding:'4rem 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:'600px',height:'200px',background:'var(--primary)',filter:'blur(120px)',opacity:0.08,borderRadius:'50%',pointerEvents:'none'}}/>
      <div className="container flex justify-between items-center md-col" style={{ gap: '2rem', position: 'relative', textAlign: 'center' }}>
        <div className="flex flex-col items-center" style={{ textAlign: 'center' }}>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.75rem' }}>
            <Zap size={22} style={{ color: 'var(--primary)' }} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: "'Outfit',sans-serif", background: 'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Gopika Raj R
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', maxWidth: '300px', lineHeight: 1.6 }}>
            Crafting scalable digital solutions with logic, passion, and modern engineering.
          </p>
        </div>
        <div className="flex flex-col items-center" style={{ gap: '1.25rem' }}>
          <div style={{display:'flex',gap:'1rem'}}>
            {socials.map(({I,href},i)=>(
              <a key={i} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                style={{width:'2.75rem',height:'2.75rem',borderRadius:'50%',border:'1px solid var(--border)',background:'rgba(255,255,255,0.03)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--muted)',transition:'all 0.4s'}}
                onMouseEnter={e=>{e.currentTarget.style.background='var(--primary)';e.currentTarget.style.color='#fff';e.currentTarget.style.borderColor='var(--primary)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.03)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.borderColor='var(--border)';}}>
                <I size={18}/>
              </a>
            ))}
          </div>
          <p style={{color:'var(--muted)',fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase'}}>
            © 2026 · Designed & Built by Gopika Raj R
          </p>
        </div>
      </div>
    </footer>
  );
}
