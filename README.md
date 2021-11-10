# rollup-plugin-swc

[Rollup](https://github.com/rollup/rollup) plugin to compile bundles with the [SWC](https://swc-project.github.io).

## Install

```sh
npm i -D rollup-plugin-swc @swc/core
```
> Note: `@swc/core` is a peer dependency

## Usage

```js
// rollup.config.js

import swc from 'rollup-plugin-swc'


export default {
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    swc({
      rollup: {
        exclude: 'path/to/exclude/',
      },
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es2018',
      },
    }),
  ],
}
```

## Options

The plugin takes all the [SWC options](https://swc-project.github.io/docs/configuring-swc) except the `filename`. 

In addition to the above `SWC Options`, it takes following options for smoother integration with the `rollup` plugin convention:

### `rollup.exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `rollup.include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

## License

[MIT](LICENSE) © [Petr Tsymbarovich](mailto:petr@tsymbarovich.ru)

