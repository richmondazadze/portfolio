import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      fastRefresh: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
        'icon-192x192.png',
        'icon-512x512.png',
        'resume.pdf',
        '**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'
      ],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,pdf}'],
        globIgnores: [
          '**/node_modules/**/*',
          '**/sw.js',
          '**/workbox-*.js',
          '**/workbox-*.js.map',
          '**/workbox-*.js.LICENSE.txt'
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/richmondazadze\.me\/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|pdf)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'external-images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      manifest: {
        name: 'Richmond Azadze - Portfolio',
        short_name: 'Portfolio',
        theme_color: '#1a1a1a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
    }),
    mode === 'analyze' && visualizer({
      open: true,
      filename: 'bundle-analyzer-report.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  
  publicDir: 'public',
  
  build: {
    sourcemap: mode !== 'production',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react'],
          animation: ['framer-motion', 'gsap'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
      },
    },
  },
  
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  
  preview: {
    port: 4173,
    strictPort: true,
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
}));
