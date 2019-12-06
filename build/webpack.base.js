const path = require('path')
const merge = require('webpack-merge')
// 开发环境
const dev = require('./webpack.dev')
// 生产环境
const prod = require('./webpack.prod')
// webpack打包的html模板
const HTMLWebpakcPlugin = require('html-webpack-plugin')
// 每次打包清除上一次打包的结果
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const base = {
  // 基础配置
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // 添加配置
          {
            loader: 'css-loader',
            options: {
              // 开启sourceMap
              sourceMap: true
            }
          }
        ]
      },
      // 解析图片资源
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // 解析字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 解析数据资源
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      // 解析makedown文件
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpakcPlugin({
      // 用于生成的HTML文档的标题
      title: '基于openlayers的js库',
      // webpack生成模板的路径
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  //去除控制台提示性能的问题
  performance: false,
  // 修改配置，进行代码分割进行打包，以及去除打包成功之后添加的vendors~前缀
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  }
}
module.exports = env => {
  console.log(env)
  if (env.development) {
    return merge(base, dev)
  } else {
    return merge(base, prod)
  }
}
