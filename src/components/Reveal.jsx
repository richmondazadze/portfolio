import { useIsMobile } from '../lib/useIsMobile';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

const tags = {};
export default function Reveal({ as = 'div', className = '', style, delay = 0, children, ...props }) {
  const reduced = useReducedMotion();
  const lightMotion = useIsMobile('(max-width: 767px), (hover: none), (pointer: coarse)');
  const Tag = tags[as] || (tags[as] = motion.create(as));
  const { transitionDelay, ...restStyle } = style || {};
  const cssDelay = transitionDelay ? parseFloat(transitionDelay) / (transitionDelay.endsWith('ms') ? 1000 : 1) : delay;
  const stagger = Math.min(Math.max(cssDelay || 0, 0), 0.16);
  return (
    <Tag
      className={className}
      style={restStyle}
      initial={reduced ? false : { opacity: lightMotion ? 0.9 : 0.65, y: lightMotion ? 8 : 20 }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 64px 0px' }}
      transition={{ duration: reduced ? 0 : lightMotion ? 0.32 : 0.55, ease: EASE, delay: reduced || lightMotion ? 0 : stagger }}
      {...props}
    >{children}</Tag>
  );
}
