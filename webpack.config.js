var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
	entry:{
		index:'./src/index.js',
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].bundle.js'
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
	  	  	}
	  	]
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		// new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			title:'index',
			filename:'index.html',
			template: './src/index.html',
			inject:'body',
			favicon:'./src/favicon.ico',
			hash:true,
			cache:true,
			chunks:['index']
		})
	]
}