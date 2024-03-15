const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.webp/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html'
    }),
    // Section
    new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: './article.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/activity.html',
      filename: './activity.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist.html',
      filename: './checklist.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html'
    }),
    // Articles
    new HtmlWebpackPlugin({
      template: './src/article/winterskincare.html',
      filename: './article/winterskincare.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/spf.html',
      filename: './article/spf.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/haleybieber.html',
      filename: './article/haleybieber.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/homemaderecipes.html',
      filename: './article/homemaderecipes.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/undereye.html',
      filename: './article/undereye.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/acneprevention.html',
      filename: './article/acneprevention.html'
    }),
    // Dictionary
    new HtmlWebpackPlugin({
      template: './src/dictionary/serum.html',
      filename: './dictionary/serum.html'
    }),
    
    // Checklists
    new HtmlWebpackPlugin({
      template: './src/checklist/korean.html',
      filename: './checklist/korean.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist/basicset.html',
      filename: './checklist/basicset.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist/sensitiveskin.html',
      filename: './checklist/sensitiveskin.html'
    }), 

    // Tests
    new HtmlWebpackPlugin({
      template: './src/tests/typeofskin.html',
      filename: './tests/typeofskin.html'
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}