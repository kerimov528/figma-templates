import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': new URL('.', import.meta.url).pathname.slice(1) + '/src'
    }
  }
})
