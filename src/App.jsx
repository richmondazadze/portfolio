import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, lazy, Suspense } from 'react';
import './index.css';

// Lazy load components
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const AnimatedBackground = lazy(() => import('./components/Background'));
const Navbar = lazy(() => import('./components/Navbar'));
const Portofolio = lazy(() => import('./Pages/Portofolio'));
const ContactPage = lazy(() => import('./Pages/Contact'));
const ProjectDetails = lazy(() => import('./Pages/ProjectDetails'));
const WelcomeScreen = lazy(() => import('./Pages/WelcomeScreen'));

// Lazy load framer-motion
const AnimatePresence = lazy(() => 
  import('framer-motion').then(module => ({ default: module.AnimatePresence }))
);

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={<LoadingSpinner />}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <AnimatedBackground />
          <Suspense fallback={<div className="min-h-screen"></div>}>
            <Home />
            <About />
            <Portofolio />
            <ContactPage />
          </Suspense>
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://github.com/richmondazadze"
                  className="hover:underline"
                >
                  <strong>richmondazadze</strong>
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </Suspense>
      )}
    </Suspense>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/richmondazadze"
            className="hover:underline"
          >
            <strong>richmondazadze</strong>
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
