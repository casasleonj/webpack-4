const path = require('path')

module.exports  = {
  entry: './index',
  mode: 'development',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}