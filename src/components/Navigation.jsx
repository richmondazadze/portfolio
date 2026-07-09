import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../data/site';
import { EASE } from '../lib/motion';

const menuVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
const menuItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: EASE } },
};

const LINKS = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

/**
 * Fixed top bar. Desktop uses mix-blend-mode: difference so it inverts over
 * light/dark sections. Mobile opens a full navy overlay menu.
 */
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // When scrolled, morph into a glass bar (readable white text on blur);
  // otherwise stay transparent and invert against the section behind it.
  const glass = scrolled && !open;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 text-white transition-all duration-500 ease-fluid md:px-12 ${
          glass
            ? 'border-b border-white/10 bg-navy/60 py-4 shadow-lg shadow-navy/20 backdrop-blur-xl md:py-5'
            : 'border-b border-transparent bg-transparent py-6 md:py-8'
        }`}
        style={{ mixBlendMode: glass ? 'normal' : open ? 'normal' : 'difference' }}
      >
        <Link to="/" aria-label={`${site.name} — home`} className="inline-flex items-center">
          <img
            src="/ra-logo.png"
            alt={site.name}
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest-xl transition-opacity duration-300 hover:opacity-60 ${
                  isActive ? 'opacity-100' : 'opacity-70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden border border-white px-6 py-3 text-xs uppercase tracking-widest-xl transition-colors duration-500 ease-fluid hover:bg-white hover:text-navy md:inline-block"
        >
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-navy md:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col items-center gap-10"
            >
              {LINKS.map((link) => (
                <motion.div key={link.label} variants={menuItem}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl uppercase tracking-tight text-white"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={menuItem}>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 border border-white px-8 py-4 text-xs uppercase tracking-widest-xl text-white"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
