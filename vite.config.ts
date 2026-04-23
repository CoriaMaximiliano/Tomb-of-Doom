import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Debe coincidir con el path de Pages (mismo nombre que el repo en GitHub).
// Repo: CoriaMaximiliano/Tomb-of-Doom → https://coriamaximiliano.github.io/Tomb-of-Doom/
const repoBase = '/Tomb-of-Doom/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? repoBase : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));