const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');//打开浏览器
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成build文件夹及文件：
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: [path.resolve(SRC_PATH, 'index.js')]
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(SRC_PATH, 'node_modules'),
            include: SRC_PATH,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        }, {
            test: /\.css$/,
            use: {
            	loader:['css-loader','style-loader']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            title: 'react-music',
            favicon: './src/favicon.ico',
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("./src/index.css"),
        new OpenBrowserPlugin({url: 'http://localhost:3000'})
    ]
};
