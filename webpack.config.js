module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};

