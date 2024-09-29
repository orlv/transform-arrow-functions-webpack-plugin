@orlv/transform-arrow-functions-webpack-plugin
---

Compile arrow functions to ES5 functions.

Solves the issue of crashes caused by arrow functions in js compiled to bytecode by [Bytenode](https://github.com/bytenode/bytenode).

### Install
```shell
npm i -D @orlv/transform-arrow-functions-webpack-plugin
```

### Usage

**webpack.config.js**

```js
import TransformArrowFunctions from '@orlv/transform-arrow-functions-webpack-plugin'
import { BytenodeWebpackPlugin } from '@herberttn/bytenode-webpack-plugin'

module.exports = {
  // ...

  plugins: [
    new TransformArrowFunctions(),
    new BytenodeWebpackPlugin()
  ]
}
```

### Options
Name                | Type      | Default   |Description
----                | ----      | ----      | ----
transformClasses    | boolean   | false     | Convert classes to prototypes.

```
SyntaxError: unknown file: When using '@babel/plugin-transform-arrow-functions', it's not possible to compile `super.prop` in an arrow function without compiling classes.
Please add '@babel/plugin-transform-classes' to your Babel configuration.
```

#### Example
```js
new TransformArrowFunctions({ transformClasses: true })
```

### Links
- Bytenode: https://github.com/bytenode/bytenode
- Bytenode Webpack Plugin: https://github.com/herberttn/bytenode-webpack-plugin

### License

[MIT](./LICENSE)
