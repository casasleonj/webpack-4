const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports  = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'index')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle-[name].js',
  },
  devServer: {
    hot:true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          /*{
            loader: MiniCSSExtractPlugin.loader
          //},*/
          'Style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /*new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    }),*/
    new HtmlWebPackPlugin({
      title: 'Plugins'
    })

  ]
}