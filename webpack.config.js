const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HashAssetsPlugin = require('hash-assets-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src/modules', 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]',
      },
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "file" loader.
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AB Tasty Turfu',
      template: 'src/assets/template.html',
    }),
    new ExtractTextPlugin({
      filename: 'style/[name].[hash].css',
      disable: process.env.NODE_ENV === 'development',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-module-static',
      filename: 'js/[name].[hash].js',
      minChunks({ context }) {
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new HashAssetsPlugin({
      path: './dist',
      chunkNameTemplate: 'js/[name].js',
      hashLength: 8,
      srcPath: './src',
      assetNameTemplate: '[name].[hash]',
      prettyPrint: true,
    }),
  ],
  devServer: {
    contentBase: '/dist',
    historyApiFallback: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    immutable: 'Immutable',
    redux: 'redux',
  },
};
