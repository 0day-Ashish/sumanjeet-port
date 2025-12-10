'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import LiquidEther from '@/components/LiquidEther';
import { MdArrowOutward } from "react-icons/md";
import BlurText from '@/components/BlurText';
import useLenis from '@/lib/useLenis';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TargetCursor from '@/components/TargetCursor';
import LogoLoop from '@/components/LogoLoop';
import FlowingMenu from '@/components/FlowingMenu';

export default function Home() {
  useLenis({ lerp: 0.07 });
  const [menuOpen, setMenuOpen] = useState(false);

  const imageLogos = [
    { src: "/sonymusic-removebg-preview.png", alt: "Company 1" },
    { src: "/au_logo.png", alt: "Company 1" },
    { src: "/adidas_logo.png", alt: "Company 1" },
  ];

  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/800/500?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/800/500?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/800/500?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/800/500?random=4' },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflow || '';
    }
    return () => {
      document.body.style.overflow = prevOverflow || '';
    };
  }, [menuOpen]);

  

  return (
    <div className="relative min-h-screen w-full overflow-hidden overflow-x-hidden">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LiquidEther
          colors={[ '#BA3627', '#9C2014', '#ee5c5c' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className="w-full h-full bg-black"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <h1 className="fixed top-14 left-6 sm:top-10 sm:left-8 text-5xl sm:text-5xl md:text-8xl text-white head">Sumanjeet P.</h1>
        <div className="absolute inset-0 mt-20 flex flex-col items-center justify-center z-20 lg:mr-20 lg:inset-auto lg:top-1/2 lg:right-20 lg:transform lg:-translate-y-1/2 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex flex-col items-center">
            <div className="relative mt-20 w-40 h-40 sm:w-88 sm:h-88 md:w-84 md:h-84 pointer-events-none">
              <Image
                src="/sumanjeet.webp"
                alt="Sumanjeet Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>

            <div className="mt-8 flex items-center gap-6 pointer-events-auto">
              <a
                href="https://www.instagram.com/sumanjeet.prssd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition-transform duration-200 hover:-translate-y-1 cursor-target"
              >
                <FaInstagram className="text-2xl" />
              </a>

              <a
                href="https://www.youtube.com/@sumanjeetprasad1440"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="text-white transition-transform duration-200 hover:-translate-y-1 cursor-target"
              >
                <FaYoutube className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/sumanjeet-prasad-8a142631b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white transition-transform duration-200 hover:-translate-y-1 cursor-target"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <BlurText
            text="An evolved homosapien with a good taste in music with an ADHD brain of learning and creating something better everyday."
            delay={150}
            animateBy="words"
            direction="top"
            className="mt-14 px-6 text-center sm:text-base text-white lg:hidden text-3xl mb-8 body1"
          />
        </div>

        <BlurText
          text="An evolved homosapien with a good taste in music with an ADHD brain of learning and creating something better everyday."
          delay={150}
          animateBy="words"
          direction="top"
          className="hidden lg:block absolute left-42 top-130 transform -translate-y-1/2 max-w-lg text-white text-4xl leading-relaxed body1"
        />

        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="fixed top-14 right-6 sm:right-10 md:top-15 md:right-18 z-30 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md p-2 text-white focus:outline-none cursor-target"
        >
          <span className="block h-0.5 w-6 bg-white transition-transform" />
          <span className="block h-0.5 w-6 bg-white transition-opacity" />
          <span className="block h-0.5 w-6 bg-white transition-transform" />
        </button>

        <div
          aria-hidden={!menuOpen}
          className={[
            'fixed inset-0 z-40 transition-opacity duration-500 ease-in-out',
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          ].join(' ')}
        >
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-500"
            onClick={() => setMenuOpen(false)}
          />

          <div
            className={[
              'fixed inset-y-0 right-0 z-50 flex w-[85%] md:w-[40%] flex-col items-center justify-center bg-black/95 p-8 transition-transform duration-700 ease-out',
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            ].join(' ')}
            role="dialog"
            aria-modal="true"
            style={{ willChange: 'transform, opacity' }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 rounded-md bg-white/5 p-3 text-white hover:bg-white/10 focus:outline-none cursor-target"
            >
              ✕
            </button>

            <nav className="z-50 flex w-full font-bold flex-col items-center gap-10 mt-40 h-full">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '#Projects', label: 'Work' },
                { href: '/contact', label: 'Contact' },
              ].map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'group relative inline-flex items-end text-4xl md:text-6xl text-white transition-all duration-500 cursor-target',
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                    'hover:-translate-y-1 hover:scale-105'
                  ].join(' ')}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <MdArrowOutward
                    className="ml-2 text-xl transition-transform duration-300 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                  
                </Link>
              ))}
              <div className="mt-auto mb-8 w-full pt-6 flex flex-col ">
                <span className="mb-4 text-lg text-white/70">Socials</span>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-6">
                    <a
                      href="https://instgram.com/sumanjeet.prssd"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-white transition-transform duration-200 hover:-translate-y-1 hover:text-white/90 cursor-target"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>

                    <a
                      href="https://www.youtube.com/@sumanjeetprasad1440"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Youtube"
                      className="text-white transition-transform duration-200 hover:-translate-y-1 hover:text-white/90 cursor-target"
                    >
                      <FaYoutube className="text-2xl" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/sumanjeet-prasad-8a142631b"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-white transition-transform duration-200 hover:-translate-y-1 hover:text-white/90 cursor-target"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                  <div className="text-sm text-white/60 italic hidden sm:block">
                    Press Esc
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full py-12">
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={108}
          gap={60}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
      <section id="Projects"className="w-full py-16 mt-30 bg-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-4xl body2 sm:text-5xl text-white font-semibold">Projects</h3>
            <span className="text-white text-xs sm:text-xs tracking-wide">/02</span>
          </div>
          <div className="mt-30 lg:mt-28 ">
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
