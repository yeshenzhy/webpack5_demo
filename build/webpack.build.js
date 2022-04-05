/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-04 11:56:45
 * @LastEditTime: 2022-04-04 22:43:18
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common = require('./webpack.config.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = webpackMerge.merge(common, {
  mode: 'production', // 表示生产环境
  plugins: [
    new MiniCssExtractPlugin({ // 分离css
      filename: './css/[name].[fullhash].css',
    }),
    new CleanWebpackPlugin(), //设置清除的目录
  ],
  optimization: {
       // sideEffects和usedExports是两种不同的优化方式。
    usedExports: true, // 识别无用代码 未使用的导出内容不会被生成 usedExports 依赖于 terser 去检测语句中的副作用。
    sideEffects: true,  // 开启副作用标识功能 sideEffects更为有效是因为它允许跳过整个模块/文件和整个文件子树。
    minimize: true,
    minimizer: [
      // 添加 css 压缩配置
      new CssMinimizerPlugin({}),
      // 添加js压缩配置
      new TerserPlugin({})
    ]
  },
  // devtool: 'source-map', 
});