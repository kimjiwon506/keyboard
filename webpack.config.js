const path = require("path");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // 자바스크립트 진입
  entry: "./src/js/index.js",
  // 빌드 했을때 번들 파일관련 속성 path: 번들 파일의 경로
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"./dist"),
    clean: true,
  },
  // 빌드한 파일과 원본파일 연결
  devtool: "source-map",
  // 자바스크립트,css,html 난독화기능 
  mode: "development",

  plugins:[
    new HtmlWebpackPlugin({
      title: "keyboard",
      template: "./index.html",
      // javascript가 body에 넣어지도록 설적
      inject: "body",
      favicon: "./favicon.ico"
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  // 추가적인 압축 프로그램 설치 npm i -D terser-webpack-plugin 
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin()
    ]   
  },
  // webpack dev server 편리하게 구축서버 완성
  devServer:{
    host:"localhost",
    port: 8080,
    open: true,
    watchFiles: 'index.html'
  },
};

// path의 output의 상대경로를 사용하게 되면 찾지 못하게 되어서 웹팩에서 경로를 못찾아 path라는 모듈을 불러와 resolve라는 메서드를 사용하고
// webpack이 절대 경로를 찾을 수 있도록 함.