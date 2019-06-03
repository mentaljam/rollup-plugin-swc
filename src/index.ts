import {Options, transform} from '@swc/core'
import {Plugin} from 'rollup'


type PluginOptions<O = Options> = Pick<O, Exclude<keyof O, 'filename'>>

export default (options?: PluginOptions): Plugin => ({
  name: 'swc',
  transform(code, filename) {
    return transform(code, {
      filename,
      ...options,
    })
  }
})
