const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const StaticSourceData = require("static-source-data")

const webpack = require('webpack')
const path = require('path')

const paths = [
  '/',
  '/article.ejs/',
  '/dictionary.html/',
  '/landing.html/',
  '/activity.html/',
  '/about.html/',
  '/checklist.html/',
  '/search.html/'
];

module.exports = {
  entry: {
    index: './src/index.js',
    all: './src/javascript/all.js',
    typeOfSkin: './src/javascript/typeofskin.js',
    serum: './src/javascript/serum.js',
    drySkin: './src/javascript/dryskin.js',
    knowledge: './src/javascript/knowledge.js',
    dictionary: './src/javascript/dictionary.js', 
    toggleSwitchSkin: './src/javascript/toggleswitchskin.js',
    tags: './src/javascript/tags.js',
    tagsChecklists: './src/javascript/tagsChecklist.js',
    truthOrMyth: './src/javascript/truthormyth.js',
    menuBar: './src/menuBar.jsx',
    search: './src/search.jsx'
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
    // new StaticSourceData({
    //   indexData: {
    //     url: 'https://api.airtable.com/v0/appePrphSXY2TX8TD/teasers',
    //     headers: {
    //       Authorization:
    //         'Bearer pat7rZ3bNn1doX7yx.e3a053db849dbc90266ee4437df084f90e6a245c626138ea6a63c9859661b5c9'
    //     }
    //   }
    // }),
    new SitemapPlugin({ base: 'https://hseadc.github.io/skincore/index.html', paths }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/landing.html',
      filename: './landing.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'menuBar', 'search']
    }),
    // Section
    new HtmlWebpackPlugin({
      template: './src/article.html',
      filename: './article.html',
      chunks: ['index', 'tags', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.ejs',
      filename: './dictionary.html',
      chunks: ['index', 'all', 'dictionary', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/activity.html',
      filename: './activity.html',
      chunks: ['index', 'all', 'truthOrMyth']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist.html',
      filename: './checklist.html',
      chunks: ['index', 'all', 'tagsChecklists']
    }),
    // Articles
    new HtmlWebpackPlugin({
      template: './src/article/winterskincare.html',
      filename: './article/winterskincare.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/spf.html',
      filename: './article/spf.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/haleybieber.html',
      filename: './article/haleybieber.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/homemaderecipes.html',
      filename: './article/homemaderecipes.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/undereye.html',
      filename: './article/undereye.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/acneprevention.html',
      filename: './article/acneprevention.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/airpollution.html',
      filename: './article/airpollution.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/skinaging.html',
      filename: './article/skinaging.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/formula.html',
      filename: './article/formula.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/fastcare.html',
      filename: './article/fastcare.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/devices.html',
      filename: './article/devices.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/hydration.html',
      filename: './article/hydration.html',
      chunks: ['index', 'all']
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
      chunks: ['index', 'toggleSwitchSkin', 'all',],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/lacticacid.html',
      filename: './dictionary/lacticacid.html',
      chunks: ['index', 'toggleSwitchSkin', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/serum.html',
      filename: './dictionary/serum.html',
      chunks: ['index', 'toggleSwitchSkin', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/foam.html',
      filename: './dictionary/foam.html',
      chunks: ['index', 'toggleSwitchSkin', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/toner.html',
      filename: './dictionary/toner.html',
      chunks: ['index', 'toggleSwitchSkin', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/hydrophilic.html',
      filename: './dictionary/hydrophilic.html',
      chunks: ['index', 'toggleSwitchSkin', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/patch.html',
      filename: './dictionary/patch.html',
      chunks: ['index', 'all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/gel.html',
      filename: './dictionary/gel.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/cream.html',
      filename: './dictionary/cream.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/spf.html',
      filename: './dictionary/spf.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/mask.html',
      filename: './dictionary/mask.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/scrub.html',
      filename: './dictionary/scrub.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/powder.html',
      filename: './dictionary/powder.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/peeling.html',
      filename: './dictionary/peeling.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/salicyllicacid.html',
      filename: './dictionary/salicyllicacid.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/aloevera.html',
      filename: './dictionary/aloevera.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/collagen.html',
      filename: './dictionary/collagen.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/conservants.html',
      filename: './dictionary/conservants.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/glycerin.html',
      filename: './dictionary/glycerin.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/hialuronicacid.html',
      filename: './dictionary/hialuronicacid.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/lacticacid.html',
      filename: './dictionary/lacticacid.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/peptides.html',
      filename: './dictionary/peptides.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/propyleneglycol.html',
      filename: './dictionary/propyleneglycol.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/retinol.html',
      filename: './dictionary/retinol.html',
      chunks: ['index', 'toggleSwitchSkin','all']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/vitaminc.html',
      filename: './dictionary/vitaminc.html',
      chunks: ['index', 'toggleSwitchSkin','all']
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
      chunks: ['index', 'typeOfSkin']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/serum.html',
      filename: './tests/serum.html',
      chunks: ['index', 'serum']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/dryskin.html',
      filename: './tests/dryskin.html',
      chunks: ['index', 'drySkin']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/knowledge.html',
      filename: './tests/knowledge.html',
      chunks: ['index', 'knowledge']
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'menuBar', 'search']
    }),
    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}