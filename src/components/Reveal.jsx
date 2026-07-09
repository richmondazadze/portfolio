import { useReveal } from '../hooks/useReveal';

/**
 * Wrapper that applies the scroll-reveal transition to its children.
 */
export default function Reveal({ as: Tag = 'div', className = '', style, children, ...props }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
