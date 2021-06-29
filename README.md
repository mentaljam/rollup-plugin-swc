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

## License

[MIT](LICENSE) © [Petr Tsymbarovich](mailto:petr@tsymbarovich.ru)

