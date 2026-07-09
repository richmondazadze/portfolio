import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Slow-moving, blurred decorative background orbs with scroll parallax.
 * Outer motion wrapper handles parallax (transform); inner div keeps the
 * CSS float loop — separate elements so the two transforms don't conflict.
 */
export default function AmbientOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, 160]);
  const y2 = useTransform(scrollY, [0, 900], [0, -140]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute -left-24 top-1/4">
        <div
          className="h-96 w-96 rounded-full bg-sage opacity-20 animate-float"
          style={{ filter: 'blur(120px)' }}
        />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute -right-16 bottom-1/4">
        <div
          className="h-96 w-96 rounded-full bg-softblue opacity-20 animate-float-slow"
          style={{ filter: 'blur(120px)' }}
        />
      </motion.div>
    </div>
  );
}
