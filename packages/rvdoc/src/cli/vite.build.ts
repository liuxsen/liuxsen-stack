import process from 'process'
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export const viteBuildApp = async () => {
  await build({
    root: process.cwd(),
    plugins: [
      vue({
        include: /\.(md|vue)$/,
      }),
      react({
        include: /\.(js|jsx|ts|tsx)$/,
      }),
    ],
  })
}
