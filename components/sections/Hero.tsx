export default function Hero() {
  return (
    <section
      data-screen-label="Hero"
      id="room-hero"
      style={{
        position: 'relative', flex: 'none', width: '100vw', height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '6vw', padding: '0 7vw',
      }}
    >
      <div style={{ maxWidth: 520, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <span style={{ width: 46, height: 1, background: '#b08968', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.4em', textTransform: 'uppercase', fontSize: 13, color: '#7b6a52' }}>
            Computer Science &middot; Artificial Intelligence
          </span>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-cormorant), serif', fontWeight: 500,
          fontSize: 'clamp(56px,7vw,104px)', lineHeight: 0.94, margin: 0,
          color: '#3a2a20', letterSpacing: '-.01em',
        }}>
          Farah<br />
          <em style={{ fontStyle: 'italic', color: '#8c3d52' }}>Safsafi</em>
        </h1>
        <p style={{
          fontFamily: 'var(--font-eb-garamond), serif', fontSize: 'clamp(18px,1.5vw,23px)',
          lineHeight: 1.55, color: '#5a4636', maxWidth: 430, margin: '26px 0 0',
        }}>
          A quiet garden of curiosity &mdash; where I grow intelligent systems, train models, and tend to ideas until they bloom.
        </p>
      </div>

      <div style={{ position: 'relative', flex: 'none', zIndex: 2 }}>
        <div style={{
          position: 'relative',
          width: 'clamp(280px,26vw,380px)', height: 'clamp(380px,36vw,520px)',
          borderRadius: '50% 50% 6px 6px / 38% 38% 4px 4px',
          padding: 14,
          background: 'linear-gradient(160deg,#fbf2e3,#efe0c9)',
          boxShadow: '0 30px 60px -28px rgba(74,53,40,.55), inset 0 0 0 1px rgba(176,137,104,.35)',
        }}>
          <div style={{
            display: 'block', width: '100%', height: '100%',
            borderRadius: '50% 50% 4px 4px / 38% 38% 3px 3px',
            overflow: 'hidden',
            background: "url('/assets/portrait.png') center 30%/cover no-repeat",
          }} />
          <div style={{
            position: 'absolute', inset: 14,
            borderRadius: '50% 50% 4px 4px / 38% 38% 3px 3px',
            boxShadow: 'inset 0 0 0 2px rgba(255,247,236,.6)',
            pointerEvents: 'none',
          }} />
        </div>
        {/* Carnation top-left */}
        <div style={{
          position: 'absolute', top: -30, left: -28, width: 100, height: 100,
          filter: 'drop-shadow(0 8px 10px rgba(99,45,60,.22))',
          animation: 'sg-sway 7s ease-in-out infinite', transformOrigin: '50% 92%',
          background: "url('/assets/carnation.png') center bottom/contain no-repeat",
        }} />
        {/* Jasmine bottom-right */}
        <div style={{
          position: 'absolute', bottom: 18, right: -32, width: 78, height: 78,
          filter: 'drop-shadow(0 5px 7px rgba(99,45,60,.16))',
          animation: 'sg-sway-slow 6s ease-in-out infinite', transformOrigin: '50% 90%',
          background: "url('/assets/jasmine-1400.png') center bottom/contain no-repeat",
        }} />
        <div style={{
          position: 'absolute', bottom: -20, left: 34, width: 52, height: 52,
          animation: 'sg-float 8s ease-in-out infinite',
          background: "url('/assets/jasmine-1400.png') center bottom/contain no-repeat",
        }} />
      </div>
    </section>
  );
}
