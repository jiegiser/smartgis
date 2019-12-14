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
  entry: {
    // 配置多文件打包
    main: './src/index.js',
    sub: './src/sub.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // // 每个模块中的this指向我们的windos对象
          // {
          //   loader: 'imports-loader?this=>window'
          // },
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        // postcss-loader是增加厂商前缀
        use: [ 'style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        // loader执行顺序从下到上
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              // 开启模块化打包
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      // 解析图片资源
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 占位符placeholders，修改打包后的文件名与之前的保持一致
              name: '[name].[ext]',
              // 设置将图片打包到指定文件夹
              outputPath: 'images/',
              // 如果图片超过2048个字节，也就是2kb就将图片打包到imagees文件夹中，如果小于，就直接生成一个base:64的字符串进行显示
              limit: 2048
            }
          }
        ]
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
  // Plugin可以在webpack运行到某一时刻的时候，帮你做一些事情，很类似vue的声明周期函数
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
          name: 'vendors',
          enforce: true
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
