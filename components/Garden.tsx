'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Cafe from './sections/Cafe';
import Contact from './sections/Contact';
import MobileGarden from './MobileGarden';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Garden() {
  const isMobile = useIsMobile();
  // Flower band scales with viewport height so it never covers content on
  // shorter screens (full size at ~900px tall, smaller below).
  const [bandScale, setBandScale] = useState(1);
  useEffect(() => {
    const calc = () => setBandScale(Math.max(0.5, Math.min(1, window.innerHeight / 900)));
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  const contentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const contactCatRef = useRef<HTMLDivElement>(null);
  const farLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const foreLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = contentRef.current;
    const spacer = spacerRef.current;
    const progress = progressRef.current;
    const hint = hintRef.current;
    const contactCat = contactCatRef.current;
    if (!strip || !spacer) return;

    let len = 0;
    const measure = () => {
      len = Math.max(1, strip.scrollWidth - window.innerWidth);
      spacer.style.height = (len + window.innerHeight) + 'px';
    };

    const layers: Array<{ el: HTMLDivElement; factor: number }> = [
      { el: farLayerRef.current!, factor: 0.32 },
      { el: midLayerRef.current!, factor: 0.62 },
      { el: strip.parentElement as HTMLDivElement, factor: 1 },
      { el: foreLayerRef.current!, factor: 1.16 },
    ].filter(l => l.el);

    let ticking = false;
    const apply = () => {
      ticking = false;
      const y = Math.min(window.scrollY, len);
      for (const { el, factor } of layers) {
        el.style.transform = `translate3d(${-y * factor}px, 0, 0)`;
      }
      const p = len ? y / len : 0;
      if (progress) progress.style.width = (p * 100) + '%';
      if (hint) hint.style.opacity = y > 60 ? '0' : '1';
      if (contactCat) {
        contactCat.style.transform = p > 0.9 ? 'translateY(0)' : 'translateY(-100%)';
      }
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    };

    measure();
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    [300, 1000, 2400].forEach(t => setTimeout(() => { measure(); apply(); }, t));

    const navEls = document.querySelectorAll<HTMLElement>('[data-nav]');
    navEls.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({ top: parseFloat(el.dataset.nav!) * len, behavior: 'smooth' });
      });
      el.addEventListener('mouseenter', () => {
        el.style.borderBottomColor = '#c9577a';
        el.style.color = '#8c3d52';
      });
      el.addEventListener('mouseleave', () => {
        el.style.borderBottomColor = 'transparent';
        el.style.color = '#6e5a45';
      });
    });

    const linkEls = document.querySelectorAll<HTMLElement>('[data-link]');
    linkEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.color = '#c9577a';
        el.style.borderBottomColor = '#c9577a';
      });
      el.addEventListener('mouseleave', () => {
        el.style.color = '#8c3d52';
        el.style.borderBottomColor = 'rgba(140,61,82,.4)';
      });
    });

    const mailEl = document.querySelector<HTMLElement>('[data-email]');
    if (mailEl) {
      mailEl.addEventListener('click', () => {
        window.location.href = 'mailto:' + mailEl.dataset.email + '@email.com';
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  if (isMobile) return <MobileGarden />;

  return (
    <div style={{ fontFamily: "var(--font-eb-garamond), Georgia, serif", color: '#4a3528' }}>
      {/* Fixed viewport */}
      <div style={{
        position: 'fixed', inset: 0, overflow: 'hidden',
        background: 'linear-gradient(180deg,#f7ecda 0%,#f3e6d4 40%,#ead9c0 100%)',
      }}>
        {/* Soft sun glow */}
        <div style={{ position: 'absolute', top: '-24vh', right: '8vw', width: '64vh', height: '64vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,244,216,.95) 0%, rgba(255,236,200,.34) 44%, transparent 72%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-16vh', left: '-6vw', width: '50vh', height: '50vh', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,158,107,.22) 0%, transparent 68%)', pointerEvents: 'none' }} />

        {/* Far layer (par 0.32) */}
        <div ref={farLayerRef} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '680vw', willChange: 'transform', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '15vh', left: '64vw', animation: 'sg-fly 12s ease-in-out infinite' }}>
            <div style={{ position: 'relative', width: 42, height: 24, animation: 'sg-bird 1.2s ease-in-out infinite' }}>
              <div style={{ position: 'absolute', bottom: 2, left: 6, width: 30, height: 15, borderRadius: '60% 40% 50% 50%', background: '#b5402f' }} />
              <div style={{ position: 'absolute', top: 2, left: 14, width: 22, height: 13, borderRadius: '50%', background: '#9c3526', transformOrigin: 'left bottom', animation: 'sg-bird-wing .5s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', bottom: 6, left: 1, width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '8px solid #e8b84a' }} />
            </div>
          </div>
        </div>

        {/* Mid layer (par 0.62) */}
        <div ref={midLayerRef} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '680vw', willChange: 'transform', pointerEvents: 'none' }} />

        {/* Content layer (par 1) */}
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', willChange: 'transform' }}>
          <div ref={contentRef} style={{ display: 'flex', height: '100vh' }}>
            <Hero />
            <About />
            <Gallery />
            <Cafe />
            <Contact />
          </div>
        </div>

        {/* Fore layer (par 1.16) */}
        <div ref={foreLayerRef} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '720vw', willChange: 'transform', pointerEvents: 'none' }} />

        {/* Falling petals */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {[
            { left: '8%', color: '#d96f8e', w: 14, h: 11, dur: '11s', delay: '0s' },
            { left: '24%', color: '#e8c8d4', w: 11, h: 9, dur: '13s', delay: '2s' },
            { left: '42%', color: '#c9577a', w: 13, h: 10, dur: '12s', delay: '4s' },
            { left: '58%', color: '#fffaf2', w: 10, h: 8, dur: '14s', delay: '1s' },
            { left: '73%', color: '#d96f8e', w: 13, h: 10, dur: '10s', delay: '5s' },
            { left: '88%', color: '#e8c8d4', w: 11, h: 9, dur: '13s', delay: '3s' },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', left: p.left, top: 0,
              width: p.w, height: p.h,
              borderRadius: '60% 40% 60% 40%',
              background: p.color, opacity: 0,
              animation: `sg-petal-fall ${p.dur} linear infinite ${p.delay}`,
            }} />
          ))}
        </div>
      </div>



      {/* Fixed flower band — scales with viewport height (bandScale) */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, height: 150 * bandScale, zIndex: 14, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', bottom: 40 * bandScale, left: -120 * bandScale, width: 250 * bandScale, height: 250 * bandScale, background: "url('/assets/cluster.webp') center bottom/contain no-repeat", filter: 'drop-shadow(0 14px 16px rgba(99,45,60,.2))', transformOrigin: '50% 100%', animation: 'sg-sway-slow 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: 40 * bandScale, right: -120 * bandScale, width: 250 * bandScale, height: 250 * bandScale, background: "url('/assets/cluster.webp') center bottom/contain no-repeat", filter: 'drop-shadow(0 14px 16px rgba(99,45,60,.2))', transformOrigin: '50% 100%', animation: 'sg-sway-slow 11s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 48 * bandScale, height: 112 * bandScale, background: "url('/assets/bluebells.webp') 0 bottom repeat-x", backgroundSize: 'auto 100%', filter: 'brightness(.82) saturate(.86)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 24 * bandScale, height: 116 * bandScale, background: "url('/assets/daffodils.webp') 180px bottom repeat-x", backgroundSize: 'auto 100%', filter: 'brightness(.93)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120 * bandScale, background: "url('/assets/flowerbed.webp') -90px bottom repeat-x", backgroundSize: 'auto 100%' }} />
      </div>

      {/* Fixed logo */}
      <div style={{ position: 'fixed', top: 30, left: 42, zIndex: 20, pointerEvents: 'none' }}>
        <div style={{ fontFamily: 'var(--font-pinyon), cursive', fontSize: 30, color: '#8c3d52', lineHeight: 0.9 }}>Farah</div>
        <div style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.42em', fontSize: 12, textTransform: 'uppercase', color: '#6e5a45', marginTop: 4 }}>Safsafi</div>
      </div>

      {/* Fixed nav */}
      <nav style={{ position: 'fixed', top: 34, right: 44, zIndex: 20, display: 'flex', gap: 22, alignItems: 'center', fontFamily: 'var(--font-cormorant), serif', fontSize: 14, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6e5a45' }}>
        {[
          { label: 'Garden', nav: '0' },
          { label: 'About', nav: '0.22' },
          { label: 'Work', nav: '0.44' },
          { label: 'Café', nav: '0.77' },
          { label: 'Contact', nav: '1' },
        ].map(({ label, nav }) => (
          <span key={nav} data-nav={nav} style={{ cursor: 'pointer', paddingBottom: 3, borderBottom: '1px solid transparent' }}>{label}</span>
        ))}
      </nav>

      {/* Scroll hint — sits above the flower band so it stays readable (#1) */}
      <div ref={hintRef} style={{ position: 'fixed', bottom: Math.round(150 * bandScale + 28), left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-cormorant), serif', letterSpacing: '.32em', textTransform: 'uppercase', fontSize: 11, color: '#6e5a45', textShadow: '0 1px 8px rgba(247,236,218,.9)', transition: 'opacity .3s' }}>
        <span>scroll to wander the garden</span>
        <span style={{ display: 'inline-block', animation: 'sg-hint 1.8s ease-in-out infinite' }}>&#10230;</span>
      </div>

      {/* Progress bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: 4, zIndex: 20, background: 'rgba(122,84,60,.12)' }}>
        <div ref={progressRef} style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg,#7b9e6b,#c9577a)', transition: 'width .08s linear' }} />
      </div>

      {/* Peeking cat head */}
      <div ref={contactCatRef} style={{ position: 'fixed', top: 0, left: '50%', marginLeft: -94, width: 188, height: 377, zIndex: 13, pointerEvents: 'none', transform: 'translateY(-100%)', transition: 'transform .6s cubic-bezier(.2,.85,.3,1)' }}>
        <div style={{ width: '100%', height: '100%', background: "url('/assets/cathead.webp') center bottom/contain no-repeat", transform: 'scaleY(-1)', filter: 'drop-shadow(0 10px 12px rgba(74,53,40,.22))' }} />
      </div>

      {/* Scroll spacer */}
      <div ref={spacerRef} style={{ height: '400vh' }} />
    </div>
  );
}
