import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 20480,
    cssCodeSplit: true,
    cssTarget: 'es6',
    minify: true,
    rollupOptions: {
      external: ['react/jsx-runtime'],
      input: {
        index: './src/index.tsx',
      },
      output: {
        entryFileNames: '[name].js',
        experimentalMinChunkSize: 40960,
      },
    },
    outDir: './dist',
    assetsDir: './assets',
  },
  plugins: [
    react(),
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/index.tsx',
    }),
  ],
});
