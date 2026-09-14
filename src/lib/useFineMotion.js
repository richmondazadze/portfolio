import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Reserve pointer depth and parallax for large screens with precise pointers. */
export function useFineMotion() {
  const reduced = useReducedMotion();
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');
    const update = () => setFine(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return fine && !reduced;
}
