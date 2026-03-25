import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures all assets are referenced from the root
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // Higher limit for GSAP
    rollupOptions: {
      output: {
        // This splits your code to make the initial load faster
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) {
              return 'gsap'; // Separate GSAP as it's large
            }
            if (
              id.includes('react') || 
              id.includes('react-dom') || 
              id.includes('react-router-dom')
            ) {
              return 'vendor';
            }
            return 'libs';
          }
        }
      }
    }
  }
})