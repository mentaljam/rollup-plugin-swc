import {Options, transform} from '@swc/core'
import {Plugin} from 'rollup'


type PluginOptions<O = Options> = Pick<O, Exclude<keyof O, 'filename'>>

export default (options: PluginOptions = {}): Plugin => ({
  name: 'swc',
  transform(code, filename) {
    (options as PluginOptions & {filename: string}).filename = filename
    return transform(code, options)
  }
})
