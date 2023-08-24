import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import mdPlugin from './src/plugin/md-plugin/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin(),
    vue({
      include: [/(\.md)|(\.vue)$/],
    }),
    Inspect(),
  ],
})
