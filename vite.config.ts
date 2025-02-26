import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist', // Ensure the build output directory is correct
  },
  base: '/StarGaze/', // Add this line to match your GitHub Pages repository name
});