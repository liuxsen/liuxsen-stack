import typescript from '@rollup/plugin-typescript'
import vue from '@vitejs/plugin-vue'

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: 'src/ui/react/Layout.tsx',
    output: [
      {
        // dir: 'dist/ui/react/cjs',
        format: 'cjs',
        file: 'dist/ui/reat/main.cjs',
      },
      {
        dir: 'dist/ui/react/esm',
        format: 'esm',
      },
    ],
    plugins: [
      typescript({
        compilerOptions: {
          module: 'esnext',
        },
      }),
    ],
  },
  {
    input: 'src/ui/vue/Demo.vue',
    output: [
      {
        dir: 'dist/ui/vue/cjs',
        format: 'cjs',
      },
      {
        dir: 'dist/ui/vue/esm',
        format: 'esm',
      },
    ],
    plugins: [
      // typescript({
      //   tsconfig: false,
      //   experimentalDecorators: true,
      //   module: 'esnext',
      //   jsx: 'preserve',
      //   allowSyntheticDefaultImports: true,
      // }),
      vue(),
    ],
  },
  {
    input: 'src/main.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
      {
        dir: 'dist/esm',
        format: 'esm',
      },
    ],
    plugins: [
      typescript({
        compilerOptions: {
          module: 'esnext',
        },
      }),
    ],
  },
]

export default config
