import { useEffect, useState } from 'react';

/**
 * Reactively tracks whether the viewport matches a mobile breakpoint.
 * Used to disable scroll-driven / heavy-blur effects on phones, where they
 * cause repaint jank.
 */
export function useIsMobile(query = '(max-width: 767px)') {
  // Initialise from the media query so phones never render the heavy desktop
  // (parallax + 120px blur) variant, not even for the first frame.
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return isMobile;
}
