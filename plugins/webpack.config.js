const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports  = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'index'),
  },
  output: {
    path: path.resolve(__dirname,'dist','js'),
    filename: 'bundle-[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      //path: path.resolve(__dirname,'dist','css'),
      filename: '../css/[name].css'
    }),
    new HtmlWebPackPlugin({
      filename: '../index.html',
      title: 'Plugins'
    })

  ]
}