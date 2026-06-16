const skills = ['Machine Learning', 'Deep Learning', 'NLP', 'Python', 'PyTorch', 'Data Viz'];

export default function About() {
  return (
    <section
      data-screen-label="About"
      id="room-about"
      style={{
        position: 'relative', flex: 'none', width: '100vw', height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 7vw',
      }}
    >
      <div style={{
        position: 'relative', maxWidth: 760,
        background: 'linear-gradient(170deg,rgba(255,250,240,.9),rgba(247,238,222,.86))',
        border: '1px solid rgba(176,137,104,.3)', borderRadius: 4,
        padding: '54px 60px',
        boxShadow: '0 40px 70px -40px rgba(74,53,40,.42)',
        backdropFilter: 'blur(2px)', zIndex: 2,
      }}>
        <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 42, color: '#7b9e6b', lineHeight: 0.8, marginBottom: 8 }}>About</div>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(30px,3.4vw,46px)', margin: '0 0 22px', color: '#3a2a20' }}>
          Tending an inquisitive mind
        </h2>
        <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 19, lineHeight: 1.66, color: '#52402f', margin: '0 0 16px' }}>
          I&rsquo;m a computer science student drawn to the place where mathematics meets meaning &mdash; machine learning, natural language, and the small intelligent systems that quietly make life softer. I like problems the way a gardener likes soil: patiently, and with my hands in them.
        </p>
        <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 19, lineHeight: 1.66, color: '#52402f', margin: 0 }}>
          When I&rsquo;m not training a model, you&rsquo;ll find me with a cup of coffee, a stubborn cat on my lap, and a notebook full of half-grown ideas.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 12px', marginTop: 32 }}>
          {skills.map(s => (
            <span key={s} style={{
              fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.18em',
              textTransform: 'uppercase', fontSize: 12, color: '#8c3d52',
              border: '1px solid rgba(140,61,82,.35)', borderRadius: 20, padding: '8px 16px',
            }}>{s}</span>
          ))}
        </div>

        {/* Jasmine top-right */}
        <div style={{
          position: 'absolute', top: -32, right: 36, width: 64, height: 64,
          animation: 'sg-sway 6.5s ease-in-out infinite', transformOrigin: '50% 90%',
          background: "url('/assets/jasmine-1400.webp') center bottom/contain no-repeat",
        }} />
        {/* Carnation bottom-left */}
        <div style={{
          position: 'absolute', bottom: -28, left: -22, width: 78, height: 78,
          animation: 'sg-sway-slow 7.5s ease-in-out infinite', transformOrigin: '50% 92%',
          filter: 'drop-shadow(0 6px 8px rgba(99,45,60,.2))',
          background: "url('/assets/carnation.webp') center bottom/contain no-repeat",
        }} />
      </div>

      {/* Stretching cat */}
      <div style={{ position: 'absolute', right: '8vw', bottom: 'calc(210px + 2vh)', zIndex: 2 }}>
        <div style={{
          width: 200, height: 185,
          background: "url('/assets/cat-stretch.webp') center bottom/contain no-repeat",
          filter: 'drop-shadow(0 12px 14px rgba(74,53,40,.26))',
        }} />
      </div>

      {/* Butterfly */}
      <div style={{ position: 'absolute', top: '22%', right: '20%', zIndex: 2, animation: 'sg-fly 9s ease-in-out infinite' }}>
        <div style={{ position: 'relative', width: 34, height: 26, transformStyle: 'preserve-3d' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 16, height: 24, borderRadius: '60% 40% 50% 50%', background: 'linear-gradient(135deg,#d96f8e,#8c3d52)', transformOrigin: 'right center', animation: 'sg-wing .5s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, width: 16, height: 24, borderRadius: '40% 60% 50% 50%', background: 'linear-gradient(225deg,#d96f8e,#8c3d52)', transformOrigin: 'left center', animation: 'sg-wing .5s ease-in-out infinite reverse' }} />
          <div style={{ position: 'absolute', left: '50%', top: 2, transform: 'translateX(-50%)', width: 3, height: 22, borderRadius: 3, background: '#3a2a20' }} />
        </div>
      </div>
    </section>
  );
}
