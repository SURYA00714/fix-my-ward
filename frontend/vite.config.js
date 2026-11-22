import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  let apiUrl = env.VITE_API_URL || env.VITE_API_BASE_URL || 'https://fix-my-ward-r2zv.onrender.com';
  apiUrl = apiUrl.trim().replace(/\/+$/, '');
  if (apiUrl.endsWith('/api')) {
    apiUrl = apiUrl.slice(0, -4);
  }

  return {
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify(apiUrl),
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor-react';
              }
              if (id.includes('recharts')) {
                return 'vendor-charts';
              }
              if (id.includes('leaflet')) {
                return 'vendor-maps';
              }
              if (id.includes('axios')) {
                return 'vendor-utils';
              }
              return 'vendor';
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  };
});
