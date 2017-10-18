
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/app.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './public/js'),//Webpack结果存储
        publicPath: '/public/js',//懵懂，懵逼，//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
        filename: 'app.js'
    },
    module: {
        rules : [
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{

                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
}