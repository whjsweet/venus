// webpack.base.conf.js
const path = require('path');
const APP_PATH = path.resolve(__dirname, './src');
const PAGE_PATH = path.resolve(__dirname, './src/pages');
const DIST_PATH = path.resolve(__dirname, './bin');
module.exports = {
  entry: {
    main: APP_PATH + '/app.js',
    framework: ['react', 'react-dom'],
  },
  output: {
    filename: 'js/bundle.js',
    path: DIST_PATH
  },
  resolve: {
    alias: {
      "@": require('path').resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" //在html中插入<style>标签
          },
          {
            loader: "css-loader",//获取引用资源，如@import,url()
          },
          {
            loader: "postcss-loader", //自动加前缀
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            modifyVars: {
              'hack': `true; @import "` + APP_PATH + `/public/color.less";`, // Override with less file
            },
            javascriptEnabled: true,
          },
        }]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        use: 'url-loader?limit=8129',
        //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            publicPath: '/',
            name: "images/[name].[ext]",
            limit: 500  //是把小于500B的文件打成Base64的格式，写入JS
          }
        }]
      },
    ]
  }
  // ,
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minChunks: 1,
  //     minSize: 0,
  //     cacheGroups: { // cacheGroups对象，定义了需要被抽离的模块
  //       framework: {
  //         test: "dist", // test属性是比较关键的一个值，他可以是一个字符串，也可以是正则表达式，还可以是函数。如果定义的是字符串，会匹配入口模块名称，会从其他模块中把包含这个模块的抽离出来
  //         name: "dist", // 抽离后生成的名字，和入口文件模块名称相同，这样抽离出来的新生成的framework模块会覆盖被抽离的framework模块
  //         enforce: true
  //       }
  //     }
  //   }
  // }
};