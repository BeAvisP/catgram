const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    filename: 'app.bundle.js',
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};