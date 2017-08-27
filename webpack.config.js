module.exports = {
  entry: './src/main/frontend/index.jsx',
  output: {
    path: `${__dirname}/src/main/public/js`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test:  /\.(jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
