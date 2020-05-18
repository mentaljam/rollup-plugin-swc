import {Options, transform} from '@swc/core'
import {existsSync, statSync} from 'fs'
import {dirname, join} from 'path'
import {Plugin} from 'rollup'

type PluginOptions<O = Options> = Pick<O, Exclude<keyof O, 'filename'>>

const extensions = [ 'ts', 'js', 'tsx', 'jsx' ]   

const resolveFile = (resolved: string, index: boolean = false) => {
  for (const extension of extensions) {
    const file = index 
      ? join(resolved, `index.${extension}`)
      : `${resolved}.${extension}`
    if (existsSync(file)) {
      return file 
    }
  }
  return null
}

export default (options: PluginOptions = {}): Plugin => ({
  name: 'swc',
  resolveId(id, origin) {
    if (!origin) {
      return id 
    }
    const resolved = join(dirname(origin), id)
    const file = resolveFile(resolved)
    if (file) {
      return file 
    }
    if (existsSync(resolved) && statSync(resolved).isDirectory()) {
      const coreFile = resolveFile(resolved, true)
      if (coreFile) {
        return coreFile 
      }
    }
    return null
  },
  transform(code, filename) {
    (options as PluginOptions & {filename: string}).filename = filename
    return transform(code, options)
  }
})
