import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';

// Use requestIdleCallback for non-critical work
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(
    () => {
      // Preload critical assets
      const preloadLinks = [
        // Add any critical assets to preload
        // { href: '/path/to/asset.css', as: 'style' },
        // { href: '/path/to/asset.js', as: 'script' },
      ];

      preloadLinks.forEach(({ href, as }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
      });
    },
    { timeout: 2000 }
  );
}

// Use createRoot API for concurrent features
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA
if (process.env.NODE_ENV === 'production') {
  serviceWorkerRegistration.register({
    onSuccess: (registration) => {
      console.log('ServiceWorker registration successful');
    },
    onUpdate: (registration) => {
      console.log('New content is available; please refresh.');
      if (window.confirm('New version available! Update now?')) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      }
    },
  });
}

// Measure performance in development
if (process.env.NODE_ENV === 'development') {
  import('./reportWebVitals').then(({ default: reportWebVitals }) => {
    reportWebVitals(console.log);
  });
}
