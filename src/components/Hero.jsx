import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Rocket, Mail, Sparkles, Cpu, Layers, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';

/* ── Particle Canvas ── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d');
    let W = c.width = window.innerWidth, H = c.height = window.innerHeight;
    const pts = Array.from({ length: 60 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.5 + 0.3, vx: (Math.random() - .5) * 0.3, vy: (Math.random() - .5) * 0.3, a: Math.random() }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.a * 0.6})`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
}

/* ── Typewriter ── */
function Typewriter({ text, delay = 0 }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    let i = 0, t = setTimeout(() => {
      const iv = setInterval(() => {
        setShown(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, 60);
      return () => clearInterval(iv);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [text, delay]);
  return <span>{shown}<span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid var(--primary)', marginLeft: '2px', opacity: shown.length < text.length ? 1 : 0 }} /></span>;
}

/* ── 3D Tilt Card ── */
function TiltCard() {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);
  const sRotX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const sRotY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const gX = useTransform(x, [-100, 100], [0, 100]);
  const gY = useTransform(y, [-100, 100], [0, 100]);

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: sRotX, rotateY: sRotY, transformStyle: 'perspective(800px)', transformPerspective: 800, borderRadius: '2rem', position: 'relative', zIndex: 2 }}
      initial={{ opacity: 0, scale: 0.85, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
      <motion.div className="glass-card" style={{ padding: '0.5rem', borderRadius: '2rem', border: '1px solid rgba(99,102,241,0.25)', overflow: 'hidden', position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {/* Animated glow bg */}
        <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '250px', height: '250px', background: 'radial-gradient(circle,var(--primary),var(--secondary))', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }} />

        {/* Floating top-right chip */}
        <motion.div animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.15, boxShadow: '0 0 25px var(--primary)' }}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', padding: '0.875rem', background: 'rgba(17,24,39,0.9)', borderRadius: '1rem', border: '1px solid rgba(99,102,241,0.4)', boxShadow: '0 0 15px rgba(99,102,241,0.3)', zIndex: 3, cursor: 'pointer' }}>
          <Cpu size={28} style={{ color: 'var(--primary)' }} />
        </motion.div>

        {/* Floating bottom-left chip */}
        <motion.div animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          whileHover={{ scale: 1.15, boxShadow: '0 0 25px var(--secondary)' }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '1.5rem', padding: '0.875rem', background: 'rgba(17,24,39,0.9)', borderRadius: '1rem', border: '1px solid rgba(168,85,247,0.4)', boxShadow: '0 0 15px rgba(168,85,247,0.3)', zIndex: 3, cursor: 'pointer' }}>
          <Layers size={28} style={{ color: 'var(--secondary)' }} />
        </motion.div>

        {/* Center icon */}
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          style={{ zIndex: 2, textAlign: 'center' }}>
          <motion.div animate={{ boxShadow: ['0 0 0px rgba(99,102,241,0.2)', '0 0 30px rgba(99,102,241,0.5)', '0 0 0px rgba(99,102,241,0.2)'] }}
            transition={{ duration: 2.5, repeat: Infinity }} style={{ display: 'inline-block', borderRadius: '1.5rem', padding: '1rem', marginBottom: '1rem' }}>
            <Code2 size={70} style={{ color: 'rgba(255,255,255,0.15)' }} />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ color: 'var(--muted)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>MERN Specialist</motion.p>
          <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} style={{ color: '#fff', fontSize: '1.5rem', fontFamily: "'Outfit',sans-serif" }}>
            <Typewriter text="Logic meets Art" delay={1.4} />
          </motion.h3>
        </motion.div>

        {/* Gradient highlight that follows mouse */}
        <motion.div style={{ position: 'absolute', inset: 0, borderRadius: '2rem', background: `radial-gradient(circle at ${gX.get()}% ${gY.get()}%,rgba(99,102,241,0.1),transparent 60%)`, pointerEvents: 'none', zIndex: 1 }} />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem', paddingBottom: '3rem', overflow: 'hidden', position: 'relative' }}>
      <Particles />
      {/* Animated background glow */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '20%', left: '40%', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(99,102,241,0.15),transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '9999px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: 'var(--primary)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            <Sparkles size={13} /> Available for Opportunities
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 'clamp(2.5rem,5.5vw,5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Gopika Raj R
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
            I'm <strong style={{ color: '#fff' }}>Gopika Raj R</strong>, a MERN Stack Developer crafting high-performance,
            visually stunning web applications with logic and design-thinking.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="projects" smooth offset={-80} className="btn-primary cursor-pointer" style={{ padding: '0.9rem 2rem' }}><Rocket size={18} />View Projects</Link>
            <Link to="contact" smooth offset={-80} className="btn-outline cursor-pointer" style={{ padding: '0.9rem 2rem' }}><Mail size={18} />Contact Me</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ width: '2.2rem', height: '2.2rem', borderRadius: '50%', border: '2px solid var(--bg)', background: `linear-gradient(${i * 45}deg,var(--primary),var(--secondary))`, marginLeft: i > 1 ? '-0.6rem' : 0, opacity: 0.7 }} />
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}><span style={{ color: '#fff', fontWeight: 700 }}>5+ Projects</span> deployed</p>
          </motion.div>
        </motion.div>

        <div className="hero-card-wrap"><TiltCard /></div>
      </div>

      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @media(max-width:768px){
          .hero-card-wrap{display:none!important;}
          #hero>.container{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
