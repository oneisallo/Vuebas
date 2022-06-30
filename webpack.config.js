const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
  module: {  // 加载器配置
    rules: [
      {
        test: /\.css$/i, // 匹配css文件  /i忽略大小写
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i, // 匹配less文件  /i忽略大小写
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg|bmp)/, // 匹配gif文件  /i忽略大小写
        type: 'asset'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/, // 匹配gif文件  /i忽略大小写
        type: 'asset/resource', //所有的字体图标文件输出到dist下
        generator: {
          filename: 'fonts/[name].[hash:6][ext]' // 防止文件重名
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,  //排除文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  mode: 'development',
  devServer: {
    port: 8000
  },
};