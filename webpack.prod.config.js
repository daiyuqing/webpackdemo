
const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config={
	mode:'production',
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
                test: /\.(png|jpg|gif)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                      outputPath: 'img/',
                      name: '[name].[ext]?[hash]',
                    }
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
            },
			{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		    },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader!sass-loader"
                })
            }
		]
	},
	optimization: {
        //提取公共模块，webpack4去除了CommonsChunkPlugin，使用SplitChunksPlugin作为替代
        //主要用于多页面
        //例子代码 https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk
        //SplitChunksPlugin配置，其中缓存组概念目前不是很清楚
        splitChunks: {
            // 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
            chunks: "all",
            // 表示在压缩前的最小模块大小，默认为0；
            minSize: 30000,
            //表示被引用次数，默认为1
            minChunks: 1,
            //最大的按需(异步)加载次数，默认为1；
            maxAsyncRequests: 3,
            //最大的初始化加载次数，默认为1；
            maxInitialRequests: 3,
            // 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；设置ture则使用默认值
            name: true,
            //缓存组，目前在项目中设置cacheGroup可以抽取公共模块，不设置则不会抽取
            cacheGroups: {
                //缓存组信息，名称可以自己定义
                commons: {
                    //拆分出来块的名字,默认是缓存组名称+"~" + [name].js
                    name: "test",
                    // 同上
                    chunks: "all",
                    // 同上
                    minChunks: 3,
                    // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
                    enforce: true,
                    //test: 缓存组的规则，表示符合条件的的放入当前缓存组，值可以是function、boolean、string、RegExp，默认为空；
                    test:""
                },
                //设置多个缓存规则
                vendor: {
                    test: /node_modules/,
                    chunks: "all",
                    name: "vendor",
                    //表示缓存的优先级
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
	plugins:[
		new ExtractTextPlugin("styles.css"),
		new HtmlWebpackPlugin({
			name:'index.html',
			template:'./public/index.html'
		})
	]

}

module.exports=config;