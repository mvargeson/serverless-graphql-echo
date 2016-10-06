module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: '.webpack',
    filename: 'index.js', // this should match the first part of function handler in serverless.yml
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
};
