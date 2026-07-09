import { motion } from 'framer-motion';
import { EASE, inView } from '../lib/motion';

/**
 * Scroll-reveal wrapper (rise + fade) built on framer-motion.
 *
 * Back-compat: existing call sites pass `style={{ transitionDelay: '120ms' }}`
 * to stagger reveals — that value is read and converted into the animation's
 * delay, so those sites keep working without changes.
 */
export default function Reveal({
  as = 'div',
  className = '',
  style,
  delay,
  children,
  ...props
}) {
  const MotionTag = motion[as] || motion.div;

  let resolvedDelay = delay ?? 0;
  const restStyle = { ...style };
  if (restStyle.transitionDelay) {
    resolvedDelay = parseFloat(restStyle.transitionDelay) / 1000;
    delete restStyle.transitionDelay;
  }

  return (
    <MotionTag
      className={className}
      style={restStyle}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.9, ease: EASE, delay: resolvedDelay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
