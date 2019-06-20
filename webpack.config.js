const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const wp = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        admin: './src/admin.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name]_bundle.js'
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    devServer:{
        hot:true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    "presets": ["env", "react"],
                    "plugins": ["react-hot-loader/babel",
                     "syntax-dynamic-import",
                    ]
                }
            },
            {                
                test: /\.(css)|(scss)$/,
                use: [
                    {
                        loader: 'css-migration-loader',
                        options: {
                            path: './statics/css'
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new wp.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new HtmlWebpackPlugin({
            // inject: false,
            filename: 'index.html',
            template: './src/index.html',
            title: 'Index',
            minify: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            // inject: false,
            filename: 'admin.html',
            template: './src/index.html',
            title: 'Admin'
        }),
        new wp.HotModuleReplacementPlugin(),
    ]
}