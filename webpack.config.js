var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports={
	devtool: 'cheap-module-source-map',
	entry:{
		index:['./src/index.js']
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'[name].js'
	},
	module: {
	  	loaders: [
	  	  	{
	  	  	  	test: /\.js$/,
	  	  	  	exclude: /node_modules/,
	  	  	  	loader: 'babel-loader',
	  	  	  	query: {
	  	  	  	  	 presets: ['react', 'es2015']
	  	  	  	}
	  	  	},
	  	  	{
	  	  	  	test: /\.css$/,
	  	  	  	exclude: /node_modules/,
	  	  	  	loader: [ 'style-loader', 'css-loader' ]
	  	  	}
	  	]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			title:'index',
			filename:'index.html',
			template: './public/index.html',
			inject:'body',
			favicon:'./src/favicon.ico',
			// hash:true,
			cache:true,
			chunks:['index']
		}),
		new OpenBrowserPlugin({url: 'http://localhost:3000'})
	]
}
