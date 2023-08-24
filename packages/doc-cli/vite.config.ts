import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import mdPlugin from './src/plugin/md-plugin/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin(),
    vue({
      include: /\.(md|vue)$/,
    }),
    react({
      include: /\.(js|jsx|ts|tsx)$/,
    }),
    Inspect(),
  ],
})
