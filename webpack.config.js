const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{	
				test: /\.png$/, 
				loader: 'file-loader' 
			},
			{
			  test: /\.html$/,
			  use: 'html-loader'
			}
	  
		]
	},
	plugins: [
		new CopyWebpackPlugin([ {from: './index.html', to: ''}])
	]
};