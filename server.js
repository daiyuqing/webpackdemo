const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
config.entry.index.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/only-dev-server");

new WebpackDevServer(webpack(config),{
	hot: true,
    inline:true,
    stats: {
        colors: true,
    }
}).listen(3000,'localhost',function(err){
	if (err) {
		console.log(err);
	}
});