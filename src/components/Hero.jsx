import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AmbientOrbs from './AmbientOrbs';
import { site } from '../data/site';
import { container, fadeUp, lineReveal } from '../lib/motion';

const MotionLink = motion(Link);

/**
 * Full viewport hero. On first load the content staggers in, with the name
 * revealed as masked lines that slide up from behind a clip. Content drifts
 * on scroll (parallax) for depth against the floating orbs.
 */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy px-8 pt-32 md:px-12"
    >
      <AmbientOrbs />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container(0.13, 0.15)}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.p
            variants={fadeUp}
            className="mb-6 text-xs uppercase tracking-widest-xl text-sage md:mb-10"
          >
            {site.roles.join(' · ')}
          </motion.p>

          <motion.h1
            variants={container(0.12)}
            className="font-display uppercase leading-[0.85] tracking-tighter text-white text-[16vw]"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={lineReveal} className="block">
                Richmond
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={lineReveal} className="block text-outline">
                Azadze
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="mx-auto mt-16 flex w-full max-w-[1600px] items-end justify-between gap-8">
          <motion.p
            variants={fadeUp}
            className="max-w-md text-xs uppercase leading-relaxed tracking-widest-xl text-taupe sm:text-sm"
          >
            {site.tagline}
          </motion.p>

          <MotionLink
            variants={fadeUp}
            to="/work"
            aria-label="View work"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-sage/60 text-sage transition-colors duration-500 ease-fluid hover:bg-sage hover:text-navy"
          >
            <ArrowDown className="animate-bounceArrow" size={22} strokeWidth={1.5} />
          </MotionLink>
        </div>
      </motion.div>
    </section>
  );
}
