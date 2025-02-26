// filepath: /C:/ProjetosWebsites/WebsiteAstronauta/StarGaze/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist', // Ensure the build output directory is correct
  },
});