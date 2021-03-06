const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?(jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/cereal/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
