import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { EASE } from './lib/motion';
import Home from './pages/Home';

// Route-split the secondary pages so the initial (home) bundle stays lean on mobile.
const Work = lazy(() => import('./pages/Work'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.35, ease: EASE } },
};

function Page({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy" />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/work" element={<Page><Work /></Page>} />
          <Route path="/work/:slug" element={<Page><ProjectDetail /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default function App() {
  // Prefetch the other route chunks once idle, so navigations never hit the
  // Suspense fallback — deferred past the initial paint for a fast first load.
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
    const handle = idle(() => {
      import('./pages/Work');
      import('./pages/About');
      import('./pages/Contact');
      import('./pages/ProjectDetail');
    });
    return () => window.cancelIdleCallback?.(handle);
  }, []);

  return (
    <div className="bg-navy">
      <ScrollToTop />
      <Navigation />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}
