import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/StarGaze/', // Ensure this matches your deployment path
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});