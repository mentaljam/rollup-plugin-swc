import {greet, IOpts} from './lib'


let opts: IOpts = {
  greeting: 'Hello',
}

opts = {
  ...opts,
  name: 'World',
}

greet(opts)
