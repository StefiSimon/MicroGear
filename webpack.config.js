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
       },
      { test: /\.(png|svg)$/, loader: "url-loader?limit=100000" },
      { test: /\.(jpg|png)$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
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
