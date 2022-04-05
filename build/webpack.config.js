/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-02 11:43:36
 * @LastEditTime: 2022-04-05 19:56:20
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = process.env.NODE_ENV === 'dev';
const config = {
  entry: './src/main.js', // 打包入口地址
  output: {
    filename: './js/[name].[fullhash].js', // 输出文件名
    path: path.resolve(__dirname, '../dist') // 输出文件目录
  },
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: "[name][hash:8][ext]",
          outputPath: './images',
          publicPath: './images/',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024 //超过50kb不转 base64
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          // 输出文件位置以及文件名
          filename: "[name][hash:8][ext]",
          outputPath: './fonts',
          publicPath: './fonts/',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb不转 base64
          }
        }
      },
      {
        test:/\.vue$/, // 处理 .vue 文件
        loader: 'vue-loader'
    },


    ]
  },
  plugins: [ // 配置插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new VueLoaderPlugin()
  ],
  resolve: { //配置项通过别名来把原导入路径映射成一个新的导入路径。
    extensions: [' ', '.js', '.jsx', '.json', '.vue'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    },
  },
}
module.exports = config;
// module.exports = (env, argv) => {
//   console.log('argv.mode=', argv.mode) // 打印 mode(模式) 值
//   console.log(process.env.NODE_ENV);
//   // 这里可以通过不同的模式修改 config 配置
//   return config;
// }
