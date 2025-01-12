import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/laKikeApp/', // Add the base property for GitHub Pages. Replace "laKikeApp" with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
