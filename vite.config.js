import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
