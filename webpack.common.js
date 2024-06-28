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
  '/dictionary.ejs/',
  '/landing.ejs/',
  '/activity.ejs/',
  '/about.html/',
  '/checklist.ejs/',
  '/search.ejs/',
  '/article/acneprevention.ejs/',
  '/article/airpollution.ejs/',
  '/article/devices.ejs/',
  '/article/fastcare.ejs/',
  '/article/formula.ejs/',
  '/article/haleybieber.ejs/',
  '/article/homemaderecipes.ejs/',
  '/article/hydration.ejs/',
  '/article/skinaging.ejs/',
  '/article/spf.ejs/',
  '/article/undereye.ejs/',
  '/article/winterskincare.ejs/',
  '/checklist/agingskin.ejs/',
  '/checklist/basicset.ejs/',
  '/checklist/dryskin.ejs/',
  '/checklist/fortrip.ejs/',
  '/checklist/korean.ejs/',
  '/checklist/oilyskin.ejs/',
  '/checklist/oliviarodrigo.ejs/',
  '/checklist/sensitiveskin.ejs/',
  '/checklist/teenskincare.ejs/',
  '/checklist/wintercare.ejs/',
  '/dictionary/aloevera.ejs/',
  '/dictionary/collagen.ejs/',
  '/dictionary/conservants.ejs/',
  '/dictionary/cream.ejs/',
  '/dictionary/foam.ejs/',
  '/dictionary/gel.ejs/',
  '/dictionary/glycerin.ejs/',
  '/dictionary/hialuronicacid.ejs/',
  '/dictionary/hydrophilic.ejs/',
  '/dictionary/lacticacid.ejs/',
  '/dictionary/mask.ejs/',
  '/dictionary/niacinamide.ejs/',
  '/dictionary/patch.ejs/',
  '/dictionary/peeling.ejs/',
  '/dictionary/peptides.ejs/',
  '/dictionary/powder.ejs/',
  '/dictionary/propyleneglycol.ejs/',
  '/dictionary/retinol.ejs/',
  '/dictionary/salicyllicacid.ejs/',
  '/dictionary/scrub.ejs/',
  '/dictionary/serum.ejs/',
  '/dictionary/spf.ejs/',
  '/dictionary/toner.ejs/',
  '/dictionary/vitaminc.ejs/',
  '/dictionary/vitaminc.ejs/',
  '/tests/dryskin.ejs/',
  '/tests/knowledge.ejs/',
  '/tests/serum.ejs/',
  '/tests/typeofskin.ejs/',
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
    tagsDictionary: './src/javascript/tagsDictionary.js',
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
    new SitemapPlugin({ base: 'https://hseadc.github.io/skincore/', paths }),
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
      chunks: ['index', 'all' ]
    }),
    new HtmlWebpackPlugin({
      template: './src/landing.ejs',
      filename: './landing.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'menuBar', 'search']
    }),
    // Section
    new HtmlWebpackPlugin({
      template: './src/article.ejs',
      filename: './article.html',
      chunks: ['index', 'tags', 'all', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary.ejs',
      filename: './dictionary.html',
      chunks: ['index', 'all', 'dictionary','search', 'menuBar', 'tagsDictionary']
    }),
    new HtmlWebpackPlugin({
      template: './src/activity.ejs',
      filename: './activity.html',
      chunks: ['index', 'all', 'truthOrMyth', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist.ejs',
      filename: './checklist.html',
      chunks: ['index', 'all', 'tagsChecklists', 'search', 'menuBar']
    }),
    // Articles
    new HtmlWebpackPlugin({
      template: './src/article/winterskincare.ejs',
      filename: './article/winterskincare.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/spf.ejs',
      filename: './article/spf.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/haleybieber.ejs',
      filename: './article/haleybieber.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/homemaderecipes.ejs',
      filename: './article/homemaderecipes.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/undereye.ejs',
      filename: './article/undereye.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/acneprevention.ejs',
      filename: './article/acneprevention.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/airpollution.ejs',
      filename: './article/airpollution.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/skinaging.ejs',
      filename: './article/skinaging.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/formula.ejs',
      filename: './article/formula.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/fastcare.ejs',
      filename: './article/fastcare.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/devices.ejs',
      filename: './article/devices.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/article/hydration.ejs',
      filename: './article/hydration.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    // Dictionary
    new HtmlWebpackPlugin({
      template: './src/dictionary/niacinamide.ejs',
      filename: './dictionary/niacinamide.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/retinol.ejs',
      filename: './dictionary/retinol.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar'],
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/lacticacid.ejs',
      filename: './dictionary/lacticacid.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/serum.ejs',
      filename: './dictionary/serum.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/foam.ejs',
      filename: './dictionary/foam.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/toner.ejs',
      filename: './dictionary/toner.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/hydrophilic.ejs',
      filename: './dictionary/hydrophilic.html',
      chunks: ['index', 'toggleSwitchSkin', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/patch.ejs',
      filename: './dictionary/patch.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/gel.ejs',
      filename: './dictionary/gel.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/cream.ejs',
      filename: './dictionary/cream.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/spf.ejs',
      filename: './dictionary/spf.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/mask.ejs',
      filename: './dictionary/mask.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/scrub.ejs',
      filename: './dictionary/scrub.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/powder.ejs',
      filename: './dictionary/powder.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/peeling.ejs',
      filename: './dictionary/peeling.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/salicyllicacid.ejs',
      filename: './dictionary/salicyllicacid.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/aloevera.ejs',
      filename: './dictionary/aloevera.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'menuBar', 'search']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/collagen.ejs',
      filename: './dictionary/collagen.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/conservants.ejs',
      filename: './dictionary/conservants.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/glycerin.ejs',
      filename: './dictionary/glycerin.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/hialuronicacid.ejs',
      filename: './dictionary/hialuronicacid.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/lacticacid.ejs',
      filename: './dictionary/lacticacid.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/peptides.ejs',
      filename: './dictionary/peptides.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/propyleneglycol.ejs',
      filename: './dictionary/propyleneglycol.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/retinol.ejs',
      filename: './dictionary/retinol.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/dictionary/vitaminc.ejs',
      filename: './dictionary/vitaminc.html',
      chunks: ['index', 'toggleSwitchSkin','all', 'search', 'menuBar']
    }),
    // Checklists
    new HtmlWebpackPlugin({
      template: './src/checklist/korean.ejs',
      filename: './checklist/korean.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist/basicset.ejs',
      filename: './checklist/basicset.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/checklist/sensitiveskin.ejs',
      filename: './checklist/sensitiveskin.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/dryskin.ejs',
      filename: './checklist/dryskin.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/oliviarodrigo.ejs',
      filename: './checklist/oliviarodrigo.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/agingskin.ejs',
      filename: './checklist/agingskin.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/wintercare.ejs',
      filename: './checklist/wintercare.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/oilyskin.ejs',
      filename: './checklist/oilyskin.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/teenskincare.ejs',
      filename: './checklist/teenskincare.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    new HtmlWebpackPlugin({
      template: './src/checklist/fortrip.ejs',
      filename: './checklist/fortrip.html',
      chunks: ['index', 'all', 'search', 'menuBar']
    }), 
    // Tests
    new HtmlWebpackPlugin({
      template: './src/tests/typeofskin.ejs',
      filename: './tests/typeofskin.html',
      chunks: ['index', 'typeOfSkin', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/serum.ejs',
      filename: './tests/serum.html',
      chunks: ['index', 'serum', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/dryskin.ejs',
      filename: './tests/dryskin.html',
      chunks: ['index', 'drySkin', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/knowledge.ejs',
      filename: './tests/knowledge.html',
      chunks: ['index', 'knowledge', 'search', 'menuBar']
    }),
    new HtmlWebpackPlugin({
      template: './src/search.ejs',
      filename: './search.html',
      chunks: ['index', 'menuBar', 'search', 'all']
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