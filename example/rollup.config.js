import swc from '../dist/index.es'

const config = (target) => ({
  input: './example/index.ts',
  output: {
    file: `example/dist/index.${target}.js`,
    format: 'es'
  },
  plugins: [
    swc({
      jsc: {
        parser: {
          syntax: 'typescript'
        },
        target
      }
    })
  ]
})

export default [
  config('es3'),
  config('es2019'),
]
