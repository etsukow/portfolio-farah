export default function Contact() {
  return (
    <section
      data-screen-label="Contact"
      id="room-contact"
      style={{
        position: 'relative', flex: 'none', width: '96vw', height: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '0 7vw',
      }}
    >
      <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 44, color: '#7b9e6b', lineHeight: 1, marginBottom: 30, zIndex: 2 }}>
        Let&rsquo;s grow
      </div>
      <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500, fontSize: 'clamp(40px,5vw,76px)', lineHeight: 1, margin: '0 0 28px', color: '#3a2a20', zIndex: 2 }}>
        something together
      </h2>
      <p style={{ fontFamily: 'var(--font-eb-garamond), serif', fontSize: 20, lineHeight: 1.6, color: '#5a4636', maxWidth: 520, margin: '0 0 36px', zIndex: 2 }}>
        Looking for an internship where I can plant something thoughtful and watch it grow. If that sounds like your garden, let&rsquo;s talk.
      </p>
      <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center', zIndex: 2, fontFamily: 'var(--font-cormorant), serif', fontSize: 18, letterSpacing: '.04em' }}>
        <a
          data-link
          data-email="farah.safsafi"
          href="mailto:farah.safsafi@email.com"
          style={{ color: '#8c3d52', borderBottom: '1px solid rgba(140,61,82,.4)', paddingBottom: 3 }}
        >
          Email
        </a>
        <a
          href="https://github.com/farahsafsafi"
          target="_blank"
          rel="noopener noreferrer"
          data-link
          style={{ color: '#8c3d52', borderBottom: '1px solid rgba(140,61,82,.4)', paddingBottom: 3 }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/farahsafsafi"
          target="_blank"
          rel="noopener noreferrer"
          data-link
          style={{ color: '#8c3d52', borderBottom: '1px solid rgba(140,61,82,.4)', paddingBottom: 3 }}
        >
          LinkedIn
        </a>
      </div>
      <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 40, color: '#8c3d52', marginTop: 48, zIndex: 2 }}>
        Farah Safsafi
      </div>
      <div style={{ marginTop: 32, zIndex: 2 }}>
        <a href="https://github.com/etsukow" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 12, letterSpacing: '.14em', color: '#9e8b76', textDecoration: 'none', borderBottom: '1px solid rgba(158,139,118,.35)', paddingBottom: 1 }}>
          made by etsukow with ♥
        </a>
      </div>
    </section>
  );
}
