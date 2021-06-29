import {Options, transform} from '@swc/core'
import {Plugin} from 'rollup'

type PluginOptions<O = Options> = Pick<O, Exclude<keyof O, 'filename'>>

type RollupPluginSWC = (options?: PluginOptions) => Plugin

const swc: RollupPluginSWC = (options = {}) => ({
  name: 'swc',
  transform(code, filename) {
    (options as PluginOptions & {filename: string}).filename = filename
    return transform(code, options)
  }
})

export default swc
