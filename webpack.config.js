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
			}
		]
	}
};