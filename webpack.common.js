const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    all: './src/javascript/all.js',
    test: './src/javascript/test.js',
    toggleSwitch: './src/javascript/toggleswitch.js', 
    toggleSwitchSkin: './src/javascript/toggleswitchskin.js',
    tags: './src/javascript/tags.js',
    tagsChecklists: './src/javascript/tagsChecklist.js'
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
      template: './src/landing.html',
      filename: './landing.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html',
      chunks: ['index', 'toggleSwitchSkin']
    }),
    // Section
    new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: './article.html',
      chunks: ['index', 'tags']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/activity.html',
      filename: './activity.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist.html',
      filename: './checklist.html',
      chunks: ['index', 'all', 'tagsChecklists']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html',
      chunks: ['index', 'all']
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
    new HtmlWebpackPlugin({
      template: './src/article/airpollution.html',
      filename: './article/airpollution.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/skinaging.html',
      filename: './article/skinaging.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/formula.html',
      filename: './article/formula.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/fastcare.html',
      filename: './article/fastcare.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/devices.html',
      filename: './article/devices.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/article/hydration.html',
      filename: './article/hydration.html'
    }),
    // Dictionary
    new HtmlWebpackPlugin({
      template: './src/dictionary/niacinamide.html',
      filename: './dictionary/niacinamide.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/retinol.html',
      filename: './dictionary/retinol.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/lacticacid.html',
      filename: './dictionary/lacticacid.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/salicyllicacid.html',
      filename: './dictionary/salicyllicacid.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/collagen.html',
      filename: './dictionary/collagen.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/hialuronicacid.html',
      filename: './dictionary/hialuronicacid.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/propyleneglycol.html',
      filename: './dictionary/propyleneglycol.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/glycerin.html',
      filename: './dictionary/glycerin.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/peptides.html',
      filename: './dictionary/peptides.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/conservants.html',
      filename: './dictionary/conservants.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/vitaminc.html',
      filename: './dictionary/vitaminc.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/aloevera.html',
      filename: './dictionary/aloevera.html',
      chunks: ['index', 'toggleSwitchSkin', 'all'],
    }),
    // Checklists
    new HtmlWebpackPlugin({
      template: './src/checklist/korean.html',
      filename: './checklist/korean.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist/basicset.html',
      filename: './checklist/basicset.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist/sensitiveskin.html',
      filename: './checklist/sensitiveskin.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/dryskin.html',
      filename: './checklist/dryskin.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/oliviarodrigo.html',
      filename: './checklist/oliviarodrigo.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/agingskin.html',
      filename: './checklist/agingskin.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/wintercare.html',
      filename: './checklist/wintercare.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/oilyskin.html',
      filename: './checklist/oilyskin.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/teenskincare.html',
      filename: './checklist/teenskincare.html',
      chunks: ['index', 'all']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/fortrip.html',
      filename: './checklist/fortrip.html',
      chunks: ['index', 'all']
    }), 
    // Tests
    new HtmlWebpackPlugin({
      template: './src/tests/typeofskin.html',
      filename: './tests/typeofskin.html',
      chunks: ['index', 'test']
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