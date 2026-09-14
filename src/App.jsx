import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

const Work = lazy(() => import('./pages/Work'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  useEffect(() => {
    const prefetch = () => Promise.all([import('./pages/Work'), import('./pages/About'), import('./pages/Contact'), import('./pages/ProjectDetail')]).catch(() => {});
    if (window.requestIdleCallback) {
      const handle = window.requestIdleCallback(prefetch);
      return () => window.cancelIdleCallback(handle);
    }
    const handle = setTimeout(prefetch, 200);
    return () => clearTimeout(handle);
  }, []);
  return (
    <div className="bg-navy">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Suspense fallback={<div className="site-container min-h-screen pt-40" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
