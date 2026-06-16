const experiences = [
  {
    image: '/assets/exp-schneider.webp',
    imagePos: 'center',
    tag: 'Alternance · Cybersecurity',
    title: 'Schneider Electric',
    desc: 'Digital Specialist & Cybersecurity Apprentice, hardening industrial digital systems. Oct 2025 – present.',
    rotate: '-1.4deg',
    pinColor: '#8c3d52',
    floral: { type: 'carnation', bottom: -24, right: -20, sway: 'sg-sway 7.5s ease-in-out infinite', origin: '50% 92%', size: 66 },
  },
  {
    image: '/assets/exp-qubit.webp',
    imagePos: 'center',
    tag: 'Internship · Engineering',
    title: 'Qubit Engineering Inc.',
    desc: 'Summer engineering intern building and testing technical software. Jun – Aug 2025.',
    rotate: '1.2deg',
    pinColor: '#7b9e6b',
    floral: { type: 'jasmine', top: -26, left: -20, sway: 'sg-sway-slow 6.5s ease-in-out infinite', origin: '50% 90%', size: 62 },
  },
  {
    image: '/assets/exp-enactus.webp',
    imagePos: 'center 72%',
    tag: 'Leadership · Enactus',
    title: 'Enactus ISG Tunis',
    desc: 'Team Leader steering a student team through social-impact projects. 2021 – 2024.',
    rotate: '-0.8deg',
    pinColor: '#e8b84a',
    floral: { type: 'carnation', top: -26, left: -22, sway: 'sg-sway 7s ease-in-out infinite', origin: '50% 92%', size: 66 },
  },
  {
    image: '/assets/exp-warzeez.webp',
    imagePos: 'center',
    tag: 'Internship · Software',
    title: 'WARZEEZ Solutions',
    desc: 'Software engineering intern shipping features end to end. Mar – Jun 2024.',
    rotate: '1.6deg',
    pinColor: '#c9577a',
    floral: { type: 'jasmine', bottom: -24, right: -18, sway: 'sg-sway-slow 7.5s ease-in-out infinite', origin: '50% 90%', size: 60 },
  },
];

export default function Gallery() {
  return (
    <section
      data-screen-label="Gallery"
      id="room-gallery"
      style={{
        position: 'relative', flex: 'none', width: '150vw', height: '100vh',
        display: 'flex', alignItems: 'center', gap: '3vw', padding: '0 6vw',
      }}
    >
      <div style={{ flex: 'none', width: 300, zIndex: 2 }}>
        <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 46, color: '#7b9e6b', lineHeight: 0.8, marginBottom: 10 }}>The Greenhouse</div>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(34px,3.6vw,52px)', margin: '0 0 18px', color: '#3a2a20', lineHeight: 1 }}>
          Pressed leaves &amp; living work
        </h2>
        <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 18, lineHeight: 1.6, color: '#5a4636' }}>
          A few specimens from my internships and experience &mdash; each one a season of learning, mounted and labelled like a plate from a botanist&rsquo;s album.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 22, fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.32em', textTransform: 'uppercase', fontSize: 11, color: '#8c3d52' }}>
          <span>wander right</span>
          <span style={{ animation: 'sg-hint 1.8s ease-in-out infinite' }}>&#10230;</span>
        </div>
      </div>

      <div style={{ flex: 'none', display: 'flex', gap: 34, alignItems: 'center', zIndex: 2, paddingRight: '6vw' }}>
        {experiences.map((exp) => {
          const f = exp.floral;
          const floralSrc = f.type === 'carnation' ? '/assets/carnation.webp' : '/assets/jasmine-1400.webp';
          const floralStyle: React.CSSProperties = {
            position: 'absolute', zIndex: 3, width: f.size, height: f.size,
            filter: 'drop-shadow(0 5px 7px rgba(99,45,60,.2))',
            animation: f.sway, transformOrigin: f.origin,
            background: `url('${floralSrc}') center bottom/contain no-repeat`,
            ...('top' in f ? { top: f.top } : {}),
            ...('bottom' in f ? { bottom: f.bottom } : {}),
            ...('left' in f ? { left: f.left } : {}),
            ...('right' in f ? { right: f.right } : {}),
          };

          return (
            <div key={exp.title} style={{ position: 'relative', width: 300 }}>
              <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', width: 1, height: 18, background: '#b08968' }} />
              <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: exp.pinColor }} />
              <div style={floralStyle} />
              <div style={{
                background: 'linear-gradient(170deg,#fffaf0,#f3e7d2)',
                border: '1px solid rgba(176,137,104,.4)', borderRadius: 4,
                padding: 14, boxShadow: '0 26px 44px -28px rgba(74,53,40,.5)',
                transform: `rotate(${exp.rotate})`,
              }}>
                <div style={{ width: '100%', height: 200, borderRadius: 3, overflow: 'hidden', background: `url('${exp.image}') ${exp.imagePos}/cover no-repeat` }} />
                <div style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.26em', textTransform: 'uppercase', fontSize: 10, color: '#7b9e6b', marginTop: 14 }}>{exp.tag}</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 600, fontSize: 23, margin: '4px 0 6px', color: '#3a2a20' }}>{exp.title}</h3>
                <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 14.5, lineHeight: 1.5, color: '#5a4636', margin: 0 }}>{exp.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
