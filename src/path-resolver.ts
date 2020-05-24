import { existsSync, statSync } from 'fs'
import { dirname, join } from 'path'

export function pathResolver(extensions?: string[]) {
  const EXTENSIONS = [ 'ts', 'js', 'tsx', 'jsx', ...(extensions ?? []) ] 

  const resolveFile = (resolved: string, index: boolean = false) => {
    for (const extension of EXTENSIONS) {
      const file = index 
        ? join(resolved, `index.${extension}`)
        : `${resolved}.${extension}`
      if (existsSync(file)) {
        return file 
      }
    }
    return null
  }

  return function resolveId(id: string, origin: string | undefined) {
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
    return id
  }
}
