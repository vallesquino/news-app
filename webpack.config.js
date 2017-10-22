var path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['./src/index.js', './src/sass/news.scss'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{ // sass / scss loader for webpack
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
				options: { minimize: true }
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({ // define where to save the file
			filename: 'css/bundle.css',
			allChunks: true
		})
	]
};
