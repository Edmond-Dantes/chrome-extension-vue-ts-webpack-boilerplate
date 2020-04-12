const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    background: './src/scripts/background.ts',
    contentscript: './src/scripts/contentscript.ts',
    popup: './src/scripts/popup.ts'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/popup.html",
      filename: "../popup.html",
      chunks: ['popup'],
      minify: false
    }),
    new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './dist/images',
      },
      {
        from: './src/manifest.json',
        to: './dist/manifest.json',
      }
    ]),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/scripts'),
  },
};