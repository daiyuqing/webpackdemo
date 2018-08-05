
const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config={
	mode:'development',
	entry: {
        main: './src/index.js',
        vendor: [
       		'lodash'
        ]
    },
    resolve:{
    	alias:{
    		components: path.resolve(__dirname, 'src/components/'),
            static: path.resolve(__dirname, 'src/static/')
    	}
    },
	output:{
		path:path.resolve(__dirname,'./build'),
		filename: '[name].js',
	},
	module:{
		rules:[
			{
				test:/\.(js|jsx)$/,
				include: path.resolve(__dirname, "src"),
				use:'babel-loader'
			},
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader' , "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:'file-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
		]
	},
	devServer: {
	    contentBase: path.join(__dirname, "build"),
	    compress: true,
	    open:true,
	    port: 9000,
	    hot:true,
	    historyApiFallback: true,
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			name:'index.html',
			template:'./public/index.html',
		})
	]

}

module.exports=config;