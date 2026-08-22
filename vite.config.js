import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  // Matches the old vue.config.js publicPath for the GitHub Pages build;
  // dev server runs at / for convenience.
  base: process.env.NODE_ENV === 'production'
    ? '/vue3-toast-image-editor-and-others/'
    : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Never inline worker scripts as data: URIs — new Worker('data:...') is
    // rejected by browsers; they must be emitted as real files.
    assetsInlineLimit: (filePath) => {
      if (filePath.includes('workers')) return false
    }
  },
  worker: {
    // pdf.js v6 is an ES module — its worker must be built as ESM too.
    format: 'es'
  }
})
