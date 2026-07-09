// Shared motion primitives — a single easing/timing language across the site.
export const EASE = [0.16, 1, 0.3, 1];

// Rise + fade. Use as a variant on any motion element.
export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

// A stagger controller — no visual change of its own, just orchestrates children.
export const container = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// Masked line reveal — the inner element slides up from behind an overflow-hidden clip.
export const lineReveal = {
  hidden: { y: '115%' },
  show: { y: '0%', transition: { duration: 1.05, ease: EASE } },
};

// Standard in-view viewport config for scroll reveals.
export const inView = { once: true, margin: '0px 0px -12% 0px' };
