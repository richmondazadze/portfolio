import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

const tags = {};
export default function Reveal({ as = 'div', className = '', style, delay = 0, children, ...props }) {
  const reduced = useReducedMotion();
  const Tag = tags[as] || (tags[as] = motion.create(as));
  const { transitionDelay, ...restStyle } = style || {};
  const stagger = Math.min(transitionDelay ? parseFloat(transitionDelay) / 1000 : delay, 0.08);
  return <Tag className={className} style={restStyle} initial={reduced ? false : { opacity: 0.85, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }} transition={{ duration: reduced ? 0 : 0.3, ease: EASE, delay: reduced ? 0 : stagger }} {...props}>{children}</Tag>;
}
