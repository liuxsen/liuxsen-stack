import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'

export default defineConfig([
  {
    input: 'src/main.tsx',
    plugins: [
      // 默认读取 tsconfig.json
      typescript(),
    ],
    external: ['dayjs'], // rollup 默认不会引入包文件，会在打包后提示有哪些文件没有被引入，这里声明了之后，可以忽略对应包的提示
    output: [
      {
        file: 'dist/main.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/main.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/main.iife.js',
        format: 'iife',
      },
      {
        file: 'dist/main.umd.js',
        format: 'umd',
        name: 'lib',
      },
    ],
  },
])
