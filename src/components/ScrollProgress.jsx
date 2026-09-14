import { useIsMobile } from '../lib/useIsMobile';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const reduced = useReducedMotion();
  const lightMotion = useIsMobile('(max-width: 767px), (hover: none), (pointer: coarse)');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 40, restDelta: 0.001 });
  if (reduced) return null;
  return <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: lightMotion ? scrollYProgress : progress }} />;
}
