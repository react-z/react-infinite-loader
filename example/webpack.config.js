module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: { app: './example.js' },
  output: {
    filename: './example/public/bundle.js',
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
