'use client';

import { useEffect, useRef, useState } from 'react';

const skills = ['Machine Learning', 'Deep Learning', 'NLP', 'Python', 'PyTorch', 'Data Viz'];

const experiences = [
  {
    image: '/assets/exp-schneider.jpg', imagePos: 'center',
    tag: 'Alternance · Cybersecurity', title: 'Schneider Electric',
    desc: 'Digital Specialist & Cybersecurity Apprentice, hardening industrial digital systems. Oct 2025 – present.',
    rotate: '-1deg',
  },
  {
    image: '/assets/exp-qubit.jpg', imagePos: 'center',
    tag: 'Internship · Engineering', title: 'Qubit Engineering Inc.',
    desc: 'Summer engineering intern building and testing technical software. Jun – Aug 2025.',
    rotate: '1deg',
  },
  {
    image: '/assets/exp-enactus.jpg', imagePos: 'center 72%',
    tag: 'Leadership · Enactus', title: 'Enactus ISG Tunis',
    desc: 'Team Leader steering a student team through social-impact projects. 2021 – 2024.',
    rotate: '-0.6deg',
  },
  {
    image: '/assets/exp-warzeez.png', imagePos: 'center',
    tag: 'Internship · Software', title: 'WARZEEZ Solutions',
    desc: 'Software engineering intern shipping features end to end. Mar – Jun 2024.',
    rotate: '0.8deg',
  },
];

export default function MobileGarden() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = progressRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: 'var(--font-eb-garamond), Georgia, serif', color: '#4a3528', background: 'linear-gradient(180deg,#f7ecda 0%,#f3e6d4 55%,#ead9c0 100%)', minHeight: '100vh' }}>

      {/* Fixed header bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px',
        background: 'rgba(247,236,218,.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(176,137,104,.18)',
      }}>
        <div style={{ pointerEvents: 'none' }}>
          <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 26, color: '#8c3d52', lineHeight: 0.9 }}>Farah</div>
          <div style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.42em', fontSize: 10, textTransform: 'uppercase', color: '#6e5a45', marginTop: 3 }}>Safsafi</div>
        </div>
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          style={{
            background: 'none', border: 'none', padding: '6px 4px', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: 22, height: 1.5, background: '#6e5a45', borderRadius: 2 }} />
          ))}
        </button>
      </div>

      {/* Slide-in menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 25, background: '#f5e9d5',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 32,
        }}>
          {/* close */}
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', fontSize: 28, color: '#6e5a45', cursor: 'pointer', lineHeight: 1 }}>×</button>
          <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 50, color: '#8c3d52', lineHeight: 0.8, marginBottom: 8 }}>Farah</div>
          {[
            { label: 'Garden', id: 'room-hero' },
            { label: 'About', id: 'room-about' },
            { label: 'Work', id: 'room-gallery' },
            { label: 'Café', id: 'room-cafe' },
            { label: 'Contact', id: 'room-contact' },
          ].map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.28em',
              textTransform: 'uppercase', fontSize: 18, color: '#6e5a45',
              padding: '4px 0', borderBottom: '1px solid transparent',
            }}>{label}</button>
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: 3, zIndex: 20, background: 'rgba(122,84,60,.12)' }}>
        <div ref={progressRef} style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg,#7b9e6b,#c9577a)', transition: 'width .08s linear' }} />
      </div>

      {/* Falling petals */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
        {[
          { left: '8%', color: '#d96f8e', w: 12, h: 9, dur: '11s', delay: '0s' },
          { left: '28%', color: '#e8c8d4', w: 10, h: 8, dur: '13s', delay: '2s' },
          { left: '55%', color: '#c9577a', w: 11, h: 9, dur: '12s', delay: '4s' },
          { left: '78%', color: '#fffaf2', w: 9, h: 7, dur: '14s', delay: '1s' },
        ].map((p, i) => (
          <div key={i} style={{
            position: 'absolute', left: p.left, top: 0, width: p.w, height: p.h,
            borderRadius: '60% 40% 60% 40%', background: p.color, opacity: 0,
            animation: `sg-petal-fall ${p.dur} linear infinite ${p.delay}`,
          }} />
        ))}
      </div>

      {/* ===== HERO ===== */}
      <section id="room-hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 28px 160px', textAlign: 'center' }}>
        {/* Sun glow */}
        <div style={{ position: 'absolute', top: '-10vh', right: '-10vw', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,244,216,.95) 0%, transparent 72%)', pointerEvents: 'none' }} />

        {/* Portrait */}
        <div style={{ position: 'relative', marginBottom: 36 }}>
          <div style={{
            width: 'min(64vw, 240px)', height: 'min(82vw, 308px)',
            borderRadius: '50% 50% 6px 6px / 38% 38% 4px 4px',
            padding: 10, margin: '0 auto',
            background: 'linear-gradient(160deg,#fbf2e3,#efe0c9)',
            boxShadow: '0 20px 40px -20px rgba(74,53,40,.5), inset 0 0 0 1px rgba(176,137,104,.3)',
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50% 50% 4px 4px / 38% 38% 3px 3px', overflow: 'hidden', background: "url('/assets/portrait.png') center 30%/cover no-repeat" }} />
          </div>
          {/* Carnation */}
          <div style={{ position: 'absolute', top: -20, left: '50%', marginLeft: -90, width: 70, height: 70, animation: 'sg-sway 7s ease-in-out infinite', transformOrigin: '50% 92%', background: "url('/assets/carnation.png') center bottom/contain no-repeat", filter: 'drop-shadow(0 6px 8px rgba(99,45,60,.2))' }} />
          {/* Jasmine */}
          <div style={{ position: 'absolute', bottom: 10, right: '50%', marginRight: -90, width: 56, height: 56, animation: 'sg-sway-slow 6s ease-in-out infinite', transformOrigin: '50% 90%', background: "url('/assets/jasmine-1400.png') center bottom/contain no-repeat" }} />
        </div>

        {/* Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 16 }}>
          <span style={{ width: 30, height: 1, background: '#b08968', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.32em', textTransform: 'uppercase', fontSize: 11, color: '#7b6a52' }}>CS · Artificial Intelligence</span>
          <span style={{ width: 30, height: 1, background: '#b08968', display: 'block' }} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(52px,14vw,80px)', lineHeight: 0.94, margin: '0 0 20px', color: '#3a2a20' }}>
          Farah<br /><em style={{ fontStyle: 'italic', color: '#8c3d52' }}>Safsafi</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 'clamp(17px,4.5vw,21px)', lineHeight: 1.55, color: '#5a4636', maxWidth: 340, margin: '0 auto 24px' }}>
          A quiet garden of curiosity — where I grow intelligent systems, train models, and tend to ideas until they bloom.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.28em', textTransform: 'uppercase', fontSize: 11, color: '#5f7e52' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#7b9e6b', boxShadow: '0 0 0 3px rgba(123,158,107,.22)', display: 'inline-block' }} />
          <span>Open to internships · 2026</span>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="room-about" style={{ position: 'relative', padding: '64px 20px 80px' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', background: 'linear-gradient(170deg,rgba(255,250,240,.92),rgba(247,238,222,.88))', border: '1px solid rgba(176,137,104,.3)', borderRadius: 4, padding: '40px 28px', boxShadow: '0 30px 60px -30px rgba(74,53,40,.4)', position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 38, color: '#7b9e6b', lineHeight: 0.8, marginBottom: 8 }}>About</div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(26px,7vw,38px)', margin: '0 0 18px', color: '#3a2a20' }}>Tending an inquisitive mind</h2>
          <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 17, lineHeight: 1.66, color: '#52402f', margin: '0 0 14px' }}>
            I&rsquo;m a computer science student drawn to the place where mathematics meets meaning — machine learning, natural language, and the small intelligent systems that quietly make life softer. I like problems the way a gardener likes soil: patiently, and with my hands in them.
          </p>
          <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 17, lineHeight: 1.66, color: '#52402f', margin: 0 }}>
            When I&rsquo;m not training a model, you&rsquo;ll find me with a cup of coffee, a stubborn cat on my lap, and a notebook full of half-grown ideas.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 10px', marginTop: 24 }}>
            {skills.map(s => (
              <span key={s} style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.16em', textTransform: 'uppercase', fontSize: 11, color: '#8c3d52', border: '1px solid rgba(140,61,82,.35)', borderRadius: 20, padding: '6px 13px' }}>{s}</span>
            ))}
          </div>
          {/* Jasmine top-right */}
          <div style={{ position: 'absolute', top: -24, right: 24, width: 50, height: 50, animation: 'sg-sway 6.5s ease-in-out infinite', transformOrigin: '50% 90%', background: "url('/assets/jasmine-1400.png') center bottom/contain no-repeat" }} />
          {/* Carnation bottom-left */}
          <div style={{ position: 'absolute', bottom: -22, left: -16, width: 60, height: 60, animation: 'sg-sway-slow 7.5s ease-in-out infinite', transformOrigin: '50% 92%', filter: 'drop-shadow(0 5px 7px rgba(99,45,60,.18))', background: "url('/assets/carnation.png') center bottom/contain no-repeat" }} />
        </div>

        {/* Cat */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: 500, margin: '24px auto 0', paddingRight: 16 }}>
          <div style={{ width: 140, height: 130, background: "url('/assets/cat-stretch.png') center bottom/contain no-repeat", filter: 'drop-shadow(0 8px 10px rgba(74,53,40,.22))' }} />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="room-gallery" style={{ padding: '64px 20px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 42, color: '#7b9e6b', lineHeight: 0.8, marginBottom: 10 }}>The Greenhouse</div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(28px,7vw,42px)', margin: '0 0 14px', color: '#3a2a20', lineHeight: 1.1 }}>Pressed leaves &amp; living work</h2>
          <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 17, lineHeight: 1.6, color: '#5a4636', maxWidth: 340, margin: '0 auto' }}>
            A few specimens from my internships and experience — each one a season of learning.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 420, margin: '0 auto' }}>
          {experiences.map((exp) => (
            <div key={exp.title} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', width: 1, height: 14, background: '#b08968' }} />
              <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', width: 7, height: 7, borderRadius: '50%', background: '#8c3d52' }} />
              <div style={{
                background: 'linear-gradient(170deg,#fffaf0,#f3e7d2)',
                border: '1px solid rgba(176,137,104,.4)', borderRadius: 4,
                padding: 14, boxShadow: '0 20px 36px -20px rgba(74,53,40,.45)',
                transform: `rotate(${exp.rotate})`,
              }}>
                <div style={{ width: '100%', height: 180, borderRadius: 3, overflow: 'hidden', background: `url('${exp.image}') ${exp.imagePos}/cover no-repeat` }} />
                <div style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.22em', textTransform: 'uppercase', fontSize: 10, color: '#7b9e6b', marginTop: 12 }}>{exp.tag}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 600, fontSize: 21, margin: '4px 0 5px', color: '#3a2a20' }}>{exp.title}</h3>
                <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 14, lineHeight: 1.5, color: '#5a4636', margin: 0 }}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CAFÉ ===== */}
      <section id="room-cafe" style={{ padding: '64px 24px 80px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 50% at 50% 50%, rgba(107,79,58,.1), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{ width: 'min(55vw,200px)', height: 'min(58vw,210px)', background: "url('/assets/coffee-water.png') center bottom/contain no-repeat", filter: 'drop-shadow(0 12px 16px rgba(74,53,40,.24))' }} />
        </div>
        <div style={{ maxWidth: 360, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 40, color: '#7b9e6b', lineHeight: 0.8, marginBottom: 16 }}>an interlude</div>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(22px,6vw,32px)', lineHeight: 1.3, color: '#3a2a20', margin: 0 }}>
            &ldquo;Between two commits there is always coffee — and a cat who disapproves of both.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, justifyContent: 'center', fontFamily: 'var(--font-eb-garamond), serif', fontStyle: 'italic', color: '#6b4f3a', fontSize: 16 }}>
            <span style={{ display: 'block', width: 26, height: 1, background: '#b08968' }} />
            <span>brewed slowly, like good models</span>
            <span style={{ display: 'block', width: 26, height: 1, background: '#b08968' }} />
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 170, height: 95, background: "url('/assets/cat-sleeping.png') center bottom/contain no-repeat", filter: 'drop-shadow(0 8px 10px rgba(74,53,40,.22))' }} />
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="room-contact" style={{ padding: '64px 24px 160px', textAlign: 'center', position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 40, color: '#7b9e6b', lineHeight: 1, marginBottom: 18 }}>Let&rsquo;s grow</div>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(36px,10vw,64px)', lineHeight: 1, margin: '0 0 22px', color: '#3a2a20' }}>something together</h2>
        <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 18, lineHeight: 1.6, color: '#5a4636', maxWidth: 340, margin: '0 auto 32px' }}>
          Looking for an internship where I can plant something thoughtful and watch it grow. If that sounds like your garden, let&rsquo;s talk.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, fontFamily: 'var(--font-cormorant), serif', fontSize: 18, letterSpacing: '.04em' }}>
          <a href="mailto:farah.safsafi@email.com" data-link style={{ color: '#8c3d52', borderBottom: '1px solid rgba(140,61,82,.4)', paddingBottom: 3 }}>Email</a>
          <a href="https://github.com/farahsafsafi" target="_blank" rel="noopener noreferrer" data-link style={{ color: '#8c3d52', borderBottom: '1px solid rgba(140,61,82,.4)', paddingBottom: 3 }}>GitHub</a>
          <a href="https://www.linkedin.com/in/farahsafsafi" target="_blank" rel="noopener noreferrer" data-link style={{ color: '#8c3d52', borderBottom: '1px solid rgba(140,61,82,.4)', paddingBottom: 3 }}>LinkedIn</a>
        </div>
        <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 38, color: '#8c3d52', marginTop: 44 }}>Farah Safsafi</div>
        <div style={{ marginTop: 32 }}>
          <a href="https://github.com/etsukow" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 11, letterSpacing: '.14em', color: '#9e8b76', textDecoration: 'none', borderBottom: '1px solid rgba(158,139,118,.35)', paddingBottom: 1 }}>
            made by etsukow with ♥ 
          </a>
        </div>
      </section>

      {/* Fixed flower band */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, height: 110, zIndex: 14, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', bottom: 30, left: -80, width: 180, height: 180, background: "url('/assets/cluster.png') center bottom/contain no-repeat", filter: 'drop-shadow(0 10px 12px rgba(99,45,60,.18))', transformOrigin: '50% 100%', animation: 'sg-sway-slow 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: 30, right: -80, width: 180, height: 180, background: "url('/assets/cluster.png') center bottom/contain no-repeat", filter: 'drop-shadow(0 10px 12px rgba(99,45,60,.18))', transformOrigin: '50% 100%', animation: 'sg-sway-slow 11s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 36, height: 84, background: "url('/assets/bluebells.png') 0 bottom repeat-x", backgroundSize: 'auto 100%', filter: 'brightness(.82) saturate(.86)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 18, height: 86, background: "url('/assets/daffodils.png') 140px bottom repeat-x", backgroundSize: 'auto 100%', filter: 'brightness(.93)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 88, background: "url('/assets/flowerbed.png') -60px bottom repeat-x", backgroundSize: 'auto 100%' }} />
      </div>
    </div>
  );
}
