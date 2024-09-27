Compile arrow functions to ES5 functions using @babel/plugin-transform-arrow-functions plugin.

### Install
```shell
npm i -D @orlv/transform-arrow-functions-webpack-plugin
```

### Usage

**webpack.config.js**

```js
import TransformArrowFunctions from '@orlv/transform-arrow-functions-webpack-plugin'

module.exports = {
  // ...

  plugins: [
    new TransformArrowFunctions()
  ]
}
```

## License

[MIT](./LICENSE)
