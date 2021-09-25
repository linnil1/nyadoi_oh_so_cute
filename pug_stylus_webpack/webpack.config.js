const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = (env, argv) => {
  var entry = {}
  if (argv.mode == "development")
    entry = {
      'tmp': [  // Put this because hot-reload
        './src/index.pug',
        './src/index.styl',
      ] 
    }

  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      port: 5000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.pug',
        inject: true,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: ['pug-loader']
        },
        {
          test: /\.styl$/,
          use: [
            // "style-loader",
            "css-loader",
            "stylus-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          use: ['file-loader']
        },
      ]
    }
  }
}
