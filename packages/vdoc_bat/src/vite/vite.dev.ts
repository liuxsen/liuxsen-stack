import process from 'process'
import path from 'path'
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export const viteDevServer = async () => {
  const server = await createServer({
    configFile: false,
    root: process.cwd(),
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, '..', '..', 'index.html'),
          react: path.resolve(__dirname, '..', '..', 'react/index.html'),
        },
      },
    },
    plugins: [
      vue({
        include: /\.(md|vue)$/,
      }),
      react({
        include: /\.(js|jsx|ts|tsx)$/,
      }),
    ],
  })
  await server.listen()
  server.printUrls()
}
