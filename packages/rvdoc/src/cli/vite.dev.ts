import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export const viteDevServer = async () => {
  const server = await createServer({
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
