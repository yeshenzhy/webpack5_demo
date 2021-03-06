/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-04 11:52:26
 * @LastEditTime: 2022-04-04 22:08:04
 */
const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path')
module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      progress: true,
      // logging: 'none',
      // overlay: {
      //   errors: false,
      //   warnings: false,
      // },
    },
  },
  devtool: 'eval-cheap-module-source-map',
});

