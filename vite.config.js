import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Don't empty the output directory before building
    emptyOutDir: false
  },
  // Public directory configuration (defaults to 'public')
  publicDir: 'public'
})
