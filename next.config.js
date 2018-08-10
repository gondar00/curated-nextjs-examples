const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { ANALYZE } = process.env
const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js']) {
        entries['main.js'].unshift('./lib/polyfills.js')
      }

      return entries
    }

    // config.module.rules.push({
    //   test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 100000,
    //       publicPath: './',
    //       outputPath: 'static/',
    //       name: '[name].[ext]'
    //     }
    //   }
    // })

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
})
