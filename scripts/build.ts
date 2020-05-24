import { rollup, ModuleFormat } from 'rollup'
import * as tslint from 'rollup-plugin-tslint'
import dts from 'rollup-plugin-dts'

(async function() {
  const swcPlugin = await import('../src/index')

  const external = [
    'fs',
    'path',
    '@swc/core',
  ]

  async function build() {
    const formats = ['cjs', 'es']

    const bundle = await rollup({
      input: './src/index.ts',
      external,
      plugins: [ swcPlugin.default(), tslint() ]
    })
  
    const outputs = formats.map((format: ModuleFormat) => ({
      file: `dist/index.${format}.js`, 
      format
    }))
  
    await Promise.all(outputs.map(bundle.write))
  }

  async function createDtsFile() {
    const bundle = await rollup({
      input: './src/index.ts',
      external,
      plugins: [ dts() ],
    })

    await bundle.write({ file: './dist/index.d.ts' })
  }

  await Promise.all([ build(), createDtsFile() ])
})()