/**
 * Slow-moving, blurred decorative background orbs.
 * 384px elements, 120px blur, 20% opacity, floating animation.
 */
export default function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-sage opacity-20 animate-float"
        style={{ filter: 'blur(120px)' }}
      />
      <div
        className="absolute -right-16 bottom-1/4 h-96 w-96 rounded-full bg-softblue opacity-20 animate-float-slow"
        style={{ filter: 'blur(120px)' }}
      />
    </div>
  );
}
