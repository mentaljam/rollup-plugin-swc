import {Options, transform} from '@swc/core'
import {Plugin} from 'rollup'
import {pathResolver} from './path-resolver'

type PluginOptions<O = Options> = Pick<O, Exclude<keyof O, 'filename'>>

export default (options: PluginOptions = {}): Plugin => ({
  name: 'swc',
  resolveId: pathResolver(),
  transform(code, filename) {
    (options as PluginOptions & {filename: string}).filename = filename
    return transform(code, options)
  }
})
