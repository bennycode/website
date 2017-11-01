if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: `${__dirname}/dist/frontend`,
    historyApiFallback: true,
    port: 8081,
    proxy: {
      '/rest': 'http://localhost:8080',
      '/status': 'http://localhost:8080',
    },
  },
  entry: {
    index: ['react-hot-loader/patch', `${__dirname}/src/main/frontend/index.jsx`],
  },
  output: {
    path: `${__dirname}/dist/frontend/js`,
    publicPath: '/js',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
