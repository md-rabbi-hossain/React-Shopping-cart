
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Remove 'faker' from exclude if it's needed during build
    exclude: [],
  },
});

