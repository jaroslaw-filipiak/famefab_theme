import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        global: resolve(__dirname, 'index.html'), // main global + vendors
        homepage: resolve(__dirname, './front-pages/home/index.html'), // homepage
        manage: resolve(__dirname, './front-pages/manage/index.html'),
        make: resolve(__dirname, './front-pages/make/index.html'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
