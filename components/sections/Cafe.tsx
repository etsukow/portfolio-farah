export default function Cafe() {
  return (
    <section
      data-screen-label="Cafe"
      id="room-cafe"
      style={{
        position: 'relative', flex: 'none', width: '110vw', height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '7vw', padding: '0 8vw',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 70% at 50% 52%, rgba(107,79,58,.12), transparent 70%)', pointerEvents: 'none' }} />

      {/* Coffee cup */}
      <div style={{
        position: 'relative', flex: 'none', zIndex: 2,
        width: 300, height: 320,
        background: "url('/assets/coffee-water.png') center bottom/contain no-repeat",
        filter: 'drop-shadow(0 16px 20px rgba(74,53,40,.26))',
      }} />

      {/* Quote + sleeping cat */}
      <div style={{ position: 'relative', maxWidth: 440, zIndex: 2 }}>
        <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 44, color: '#7b9e6b', lineHeight: 0.8, marginBottom: 14 }}>an interlude</div>
        <p style={{
          fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic', fontWeight: 500,
          fontSize: 'clamp(26px,2.6vw,38px)', lineHeight: 1.28, color: '#3a2a20', margin: 0,
        }}>
          &ldquo;Between two commits there is always coffee &mdash; and a cat who disapproves of both.&rdquo;
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24, fontFamily: 'var(--font-eb-garamond), serif', fontStyle: 'italic', color: '#6b4f3a', fontSize: 17 }}>
          <span style={{ display: 'block', width: 34, height: 1, background: '#b08968' }} />
          <span>brewed slowly, like good models</span>
        </div>

        {/* Sleeping cat */}
        <div style={{ position: 'absolute', right: -40, bottom: -92 }}>
          <div style={{
            width: 235, height: 130,
            background: "url('/assets/cat-sleeping.png') center bottom/contain no-repeat",
            filter: 'drop-shadow(0 12px 14px rgba(74,53,40,.26))',
          }} />
        </div>
      </div>
    </section>
  );
}
