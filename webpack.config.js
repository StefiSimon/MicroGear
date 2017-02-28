var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      './main.js',
      'webpack-hot-middleware/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
    ]
},
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/src/'
  },
  module: {
    loaders: [
    {
      test: /\.jsx$/,
      loaders: ['react-hot','babel-loader'],
      exclude: /node_modules/,
    },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      { test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
        include: path.join(__dirname, 'node_modules'),
        exclude: /flexboxgrid/,
       },
      {
        test: /\.scss$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/,
      },
      { test: /\.(png|svg)$/, loader: "url-loader?limit=100000" },
      { test: /\.(jpg|png)$/, loader: "file-loader?name=[name].[ext]" },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
};
