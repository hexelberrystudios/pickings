const webpack = require('webpack');
const path = require('path');

module.exports = ({
  entry: [
    path.resolve(process.cwd(), './static/js/app.js')
  ],

  output: {
    path: './static/js/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/js/build'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  devTool: 'source-map'
})