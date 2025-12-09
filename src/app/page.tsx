'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import LiquidEther from '@/components/LiquidEther';
import { MdArrowOutward } from "react-icons/md";
import BlurText from '@/components/BlurText';
import useLenis from '@/lib/useLenis';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  useLenis({ lerp: 0.07 });
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <LiquidEther
          colors={[ '#BA3627', '#9C2014', '#B32E1D' ]}
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
        <h1 className="absolute top-14 left-6 sm:top-10 sm:left-8 text-5xl sm:text-5xl md:text-8xl text-white head">Sumanjeet P.</h1>
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white transition-transform duration-200 hover:-translate-y-1"
              >
                <FaInstagram className="text-2xl" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white transition-transform duration-200 hover:-translate-y-1"
              >
                <FaTwitter className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white transition-transform duration-200 hover:-translate-y-1"
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
            className="mt-14 px-6 text-center sm:text-base text-white lg:hidden text-3xl mb-8 body"
          />
        </div>

        <BlurText
          text="An evolved homosapien with a good taste in music with an ADHD brain of learning and creating something better everyday."
          delay={150}
          animateBy="words"
          direction="top"
          className="hidden lg:block absolute left-42 top-130 transform -translate-y-1/2 max-w-lg text-white text-4xl leading-relaxed body"
        />

        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="absolute top-14 right-6 sm:right-10 md:top-15 md:right-18 z-30 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md p-2 text-white focus:outline-none"
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
              className="absolute top-6 right-6 rounded-md bg-white/5 p-3 text-white hover:bg-white/10 focus:outline-none"
            >
              ✕
            </button>

            <nav className="z-50 flex w-full font-bold flex-col items-center gap-10 mt-40 h-full">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/work', label: 'Work' },
                { href: '/contact', label: 'Contact' },
              ].map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'group relative inline-flex items-end text-4xl md:text-6xl text-white transition-all duration-500',
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
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 h-0.5 w-full origin-left transform scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
                  />
                </Link>
              ))}
              <div className="mt-auto mb-8 w-full pt-6 flex flex-col ">
                <span className="mb-4 text-lg text-white/70">Socials</span>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-6">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-white transition-transform duration-200 hover:-translate-y-1 hover:text-white/90"
                    >
                      <FaGithub className="text-2xl" />
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="text-white transition-transform duration-200 hover:-translate-y-1 hover:text-white/90"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>

                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-white transition-transform duration-200 hover:-translate-y-1 hover:text-white/90"
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
      <section
          className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/profile2.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-3xl p-8 sm:p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              An evolved homosapien with a good taste in music and an ADHD brain — constantly learning
              and creating something better every day. I build things that feel purposeful and
              experiment across design, motion and code.
            </p>
          </div>
        </section>
    </div>
  );
}
