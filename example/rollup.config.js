import resolve from '@rollup/plugin-node-resolve'
import swc from 'rollup-plugin-swc'


const config = (target) => ({
  input: 'index.ts',
  output: {
    file: `dist/index.${target}.js`,
    format: 'es',
  },
  plugins: [
    resolve({
      extensions: ['.ts'],
    }),
    swc({
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target,
      },
    }),
  ],
})

export default [
  config('es3'),
  config('es2019'),
]
