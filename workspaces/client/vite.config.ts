import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 20480,
    cssCodeSplit: true,
    cssTarget: 'es6',
    minify: true,
    rollupOptions: {
      input: {
        index: './index.tsx',
      },
      output: {
        entryFileNames: '[name].js',
        experimentalMinChunkSize: 40960,
      },
    },
    target: 'modules',
    outDir: './dist',
    assetsDir: './assets',
  },
  plugins: [react()],
});
