// import { fileURLToPath } from 'url'
import process from 'node:process'
import { createServer } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import mdPlugin from '../plugin/md-plugin'

// const __dirname = fileURLToPath(new URL('.', import.meta.url))

;

(async () => {
  const server = await createServer({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: false,
    root: process.cwd(),
    server: {
      port: 1337,
    },
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
  await server.listen()
  server.printUrls()
})()
