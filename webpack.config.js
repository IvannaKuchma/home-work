const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
    ];
  }

  return config;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '',
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './statistics.ts',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },
  optimization: optimization(),
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 4200,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
   // new CopyWebpackPlugin({
      //patterns: [
        //{
        //  from: path.resolve(__dirname, './images/favicon.png'),
         // to: path.resolve(__dirname, 'dist/images'),
        //},
    // ],
   // }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
   //new EslintWebpackPlugin({
     // extensions: ['js', 'ts'],
     // fix: true,
   // }),
    new BundleAnalyzerPlugin({
      analyzerMode: isProd ? 'static' : 'disabled',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|ttf|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript'),
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        },
      },
    ],
  },
};
