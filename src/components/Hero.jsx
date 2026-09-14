import { useIsMobile } from '../lib/useIsMobile';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';
import { site } from '../data/site';
import { EASE } from '../lib/motion';
import { useFineMotion } from '../lib/useFineMotion';

export default function Hero() {
  const section = useRef(null);
  const reduced = useReducedMotion();
  const lightMotion = useIsMobile('(max-width: 767px), (hover: none), (pointer: coarse)');
  const fine = useFineMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] });
  const drift = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: lightMotion ? 0.75 : 0, y: lightMotion ? 6 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : lightMotion ? 0.32 : 0.55, delay: reduced ? 0 : lightMotion ? delay * 0.5 : delay, ease: EASE },
  });
  const line = delay => ({
    initial: reduced ? false : { y: lightMotion ? '45%' : '105%', rotate: lightMotion ? 0 : 2 },
    animate: { y: '0%', rotate: 0 },
    transition: { duration: reduced ? 0 : lightMotion ? 0.5 : 0.85, delay: reduced ? 0 : lightMotion ? delay * 0.5 : delay, ease: EASE },
  });
  return (
    <section ref={section} className="hero-motion relative overflow-hidden bg-navy pb-12 pt-36 sm:pt-40 lg:pb-16 lg:pt-44">
      <AmbientOrbs />
      <div className="site-container relative z-10">
        <motion.p {...reveal(0.05)} className="eyebrow">Software Engineer <span aria-hidden="true" className="mx-2">/</span> AI & full-stack</motion.p>
        <motion.h1 className="my-8 font-display uppercase leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(3.5rem, 13.2vw, 12rem)', y: fine ? drift : 0 }}>
          <span className="hero-line"><motion.span {...line(0.08)} className="block origin-left">Richmond</motion.span></span>
          <span className="hero-line"><motion.span {...line(0.18)} className="block origin-left"><span className="text-outline">Azadze</span><span className="hero-period text-sage">.</span></motion.span></span>
        </motion.h1>
        <motion.div {...reveal(0.28)} className="hero-baseline flex flex-col items-start justify-between gap-7 border-t border-white/15 pt-7 md:flex-row md:items-end">
          <p className="max-w-lg text-base leading-relaxed text-taupe md:text-lg">{site.tagline}</p>
          <Link to="/work" className="button-primary shrink-0">View my work <ArrowUpRight size={18} /></Link>
        </motion.div>
        <motion.a {...reveal(0.36)} href="#selected-work" className="scroll-cue mt-10 inline-flex min-h-11 items-center gap-2 text-xs text-sage">Explore selected projects <ArrowDown size={15} /></motion.a>
      </div>
    </section>
  );
}
