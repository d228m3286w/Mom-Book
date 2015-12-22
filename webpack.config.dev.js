var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    
    home: ['webpack-hot-middleware/client',
    './client/index'],
    blogForm: ['webpack-hot-middleware/client',
    './client/blogForm'],
    blog: ['webpack-hot-middleware/client',
    './client/blog']
    
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/',
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      include: path.join(__dirname, 'client'),
         query: {
                   cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
    }]
  }
};