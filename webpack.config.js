module.exports = {
  entry: './lib/main.jsx',
  output: {
     filename: 'bundle.js'
  },
  resolve: {
  extensions: ['.js', '.jsx', '*']
 },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
}
