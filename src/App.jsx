import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { EASE } from './lib/motion';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
  );
}

export default function App() {
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
