const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
	mode: argv.mode,
	devtool: 'source-map',
	entry: './src/js/app.js',
	output: {
		filename: 'js/bundle.js',
		chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: argv.mode === 'development' ? '/' : '/LeavPortfolio/'
	},
	optimization: {
		usedExports: true,
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: argv.mode === 'development',
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	module: {
		rules: [
            {
                test: /\.ejs$/,
                use: {
                    loader: 'ejs-compiled-loader',
                    options:
                    {
                        htmlmin: argv.mode !== 'development',
                        htmlminOptions: {
                            removeComments: argv.mode !== 'development'
                        }
                    }
                }
            },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
            },
            {
                test: /\.(gif|png|jpe?g|ico)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath: 'assets/images',
                            esModule: false
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: argv.mode === 'development',
                        }
                    }
                ]
            },
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							sourceMap: argv.mode === 'development',
						},
					},
					{
						loader: 'css-loader',
						options: {
							url: true,
							sourceMap: argv.mode === 'development',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [require('autoprefixer')];
							},
							sourceMap: argv.mode === 'development',
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: argv.mode === 'development',
							implementation: require('sass'),
						},
					},
				],
			},
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            },
            {
                test: /\.webmanifest$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[contenthash].[ext]',
                        outputPath: 'assets',
                        esModule: false
                    }
                  },
                  {
                    loader: 'webmanifest-loader',
                    options: { }
                  }
                ]
              },
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'windows.jQuery': 'jquery',
		}),

        new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css',
        }),

        new CleanWebpackPlugin({
            dry: argv.mode === 'development'
        }),

        ...['index', 'gallery', 'art', 'contact', 'bio'].map(fileName =>
        new HtmlWebpackPlugin({
            minify: argv.mode !== 'development',
            filename: `${fileName}.html`,
            template: `./src/views/${fileName}.ejs`
        }))
	],
});
