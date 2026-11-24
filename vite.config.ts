import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Set VITE_BASE_PATH for GitHub Pages project sites, e.g.:
 *   VITE_BASE_PATH=/waseem-portfolio/ npm run build
 * Leave unset (or "/") for Vercel / custom domains / user pages.
 */
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
