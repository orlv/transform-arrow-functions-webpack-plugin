const babel = require('@babel/core')
const webpack = require('webpack')

class TransformArrowFunctionsWebpackPlugin {
  name = 'TransformArrowFunctionsWebpackPlugin'

  apply (compiler) {
    compiler.hooks.compilation.tap(
      this.name,
      compilation => {
        compilation.hooks.processAssets.tap({
            name: this.name,
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_DERIVED
          },
          assets => {
            for (const [pathname, source] of Object.entries(assets)) {
              const before = source.buffer().toString()
              const { code } = babel.transform(before, { plugins: ['@babel/plugin-transform-arrow-functions'] })
              const after = new webpack.sources.RawSource(code || '')

              compilation.updateAsset(pathname, after)
            }
          })
      }
    )
  }
}

module.exports = TransformArrowFunctionsWebpackPlugin
