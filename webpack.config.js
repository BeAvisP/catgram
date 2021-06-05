const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
  })],
  module: {
    rules: [
      {
        test: /\.js$/, // Todos los ficheros javascript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // eslint-disable-next-line max-len
      // TODO: Remove the below rule for .mjs, once aws-amplify supports webpack 5
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
