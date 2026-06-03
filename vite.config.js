import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 5173,
    open: '/',
    allowedHosts: true,
  },
  preview: {
    port: 5173,
    allowedHosts: true,
  },
});
