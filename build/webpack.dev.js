const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  // 打开souce map 追踪代码
  devtool: 'inline-source-map',
  devServer: {
    // 必须配置的选项，服务启动的目录，默认为根目录
    contentBase: path.resolve(__dirname, '../dist'),
    // 打开浏览器
    open: true,
    // 使用热加载时需要设置为 true
    hot: true,
    // 开启gzip
    compress: true,
    // 指定服务启动的端口号
    port: '8088',
    // 出现错误时是否在浏览器上出现遮罩层提示
    overlay: true,
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过设置为 true 进行启用
    historyApiFallback: {
      disableDotRule: true
    },
    // 出现错误时是否在浏览器上出现遮罩层提示
    overlay: true,
    /**
     * 在 dev-server 的两种不同模式之间切换
     *   默认情况下，应用程序启用内联模式 inline
     *   设置为 false，使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息
     */
    inline: true,
    /**
     * 统计信息，枚举类型，可供选项：
     *      "errors-only": 只在发生错误时输出
     *      "minimal": 只在发生错误或有新的编译时输出
     *      "none": 没有输出
     *      "normal": 标准输出
     *      "verbose": 全部输出
     */
    stats: 'errors-only'
  },
  plugins: [
    // 进行模块热替换
    new webpack.HotModuleReplacementPlugin()
  ]
}
