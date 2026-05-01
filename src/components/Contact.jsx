import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handle = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // IMPORTANT: Replace 'xvgzlzkw' with your actual Formspree ID from https://formspree.io
      const response = await fetch('https://formspree.io/f/xvgzlzkw', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        throw new Error('Formspree error');
      }
    } catch (err) {
      setStatus('error');
      // Fallback: Open mailto link with form data
      const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
      window.location.href = `mailto:rajgopika949@gmail.com?subject=${subject}&body=${body}`;
      console.log(status, 'mail sent......');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-label">Contact Me</span>
          <h2 className="section-title">Start a Conversation</h2>
          <div className="divider" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{ fontSize: '2rem', color: '#fff', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
              Let's build something <span className="text-gradient">memorable.</span>
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '380px' }}>
              I'm currently seeking MERN stack roles and exciting collaborations. Have a project or just want to say hi? I'm a message away.
            </p>
            {[
              { I: Mail, label: 'Email', val: 'rajgopika949@gmail.com', href: 'mailto:rajgopika949@gmail.com', col: 'var(--primary)' },
              { I: LinkedinIcon, label: 'LinkedIn', val: 'gopika-raj-', href: 'https://www.linkedin.com/in/gopika-raj-/', col: '#0a66c2' },
              { I: GithubIcon, label: 'GitHub', val: 'gopika-raj-r', href: 'https://github.com/gopika-raj-r', col: '#fff' },
            ].map(({ I, label, val, href, col }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: `${col}18`, color: col, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <I size={22} />
                </div>
                <div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{label}</p>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = col}
                    onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                    {val}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass-card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handle} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Full Name</label>
                  <input type="text" name="name" className="input-field" placeholder="Jane Smith" required />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email</label>
                  <input type="email" name="email" className="input-field" placeholder="jane@company.com" required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Subject</label>
                <input type="text" name="subject" className="input-field" placeholder="Job Opportunity / Collaboration" />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</label>
                <textarea rows={5} name="message" className="input-field" placeholder="Let's build something great..." style={{ resize: 'none' }} required />
              </div>
              <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
                {status === 'sending' ? (
                  <><Loader2 className="animate-spin" size={18} /> Sending...</>
                ) : status === 'success' ? (
                  '✓ Message Sent!'
                ) : status === 'error' ? (
                  '✕ Error! Try Again'
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>
              {status === 'success' && (
                <p style={{ color: 'var(--primary)', fontSize: '0.8rem', textAlign: 'center', marginTop: '-0.5rem' }}>
                  Thanks! I'll get back to you shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        .animate-spin{animation:spin 1s linear infinite;}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      `}</style>
    </section>
  );
}
