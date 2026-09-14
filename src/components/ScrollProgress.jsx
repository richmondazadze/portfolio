import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 40, restDelta: 0.001 });
  if (reduced) return null;
  return <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: progress }} />;
}
