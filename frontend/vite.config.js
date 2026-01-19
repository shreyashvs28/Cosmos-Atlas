import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ensures SVG + assets load correctly
  assetsInclude: ["**/*.svg"],

  // Fixes path issues when deploying or using custom folders
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})  
