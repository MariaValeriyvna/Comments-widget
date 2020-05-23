const path = require('path');


module.exports = {
   entry: './src/index.js',
  output: {
     path: path.resolve(__dirname, './build'),
    filename: 'build.js',
    publicPath: 'build/'
  },
  devServer: {
    overlay: true
 },

  module: {
   rules: [
     {
       test: /\.m?js$/,
       exclude: /(node_modules|bower_components)/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-env', '@babel/preset-react'],
           plugins: ['@babel/plugin-proposal-object-rest-spread']
         }
       }
     },
   
     {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      loader: 'url-loader',
      options: {
        limit: 8192,
      },
    }
    ],
},


}
