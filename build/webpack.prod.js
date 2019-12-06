const path = require('path')
// 对css代码进行分割
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 对打包输出的css文件进行压缩
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// pwa配置
const WorkboxPlugin = require('workbox-webpack-plugin')
module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}
