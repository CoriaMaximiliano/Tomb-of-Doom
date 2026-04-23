import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages (repo project): https://<user>.github.io/tomb-of-doom/
const repoBase = '/tomb-of-doom/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? repoBase : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));