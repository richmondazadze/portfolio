import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../lib/useIsMobile';

/**
 * Blurred decorative background orbs.
 *
 * Desktop: scroll parallax + a slow float loop (outer wrapper handles the
 * parallax transform, inner div the CSS float — separate elements so the two
 * transforms don't conflict).
 *
 * Mobile: static, lighter blur, no animation. Continuously repainting a
 * 120px blur is the single biggest source of scroll jank on phones, so we
 * drop it there entirely.
 */
export default function AmbientOrbs() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 900], [0, 160]);
  const y2 = useTransform(scrollY, [0, 900], [0, -140]);

  if (isMobile) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-sage opacity-20"
          style={{ filter: 'blur(64px)' }}
        />
        <div
          className="absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-softblue opacity-20"
          style={{ filter: 'blur(64px)' }}
        />
      </div>
    );
  }

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
