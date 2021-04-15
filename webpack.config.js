const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
mode: 'development',
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static","build"),
       filename: 'app.js',
       publicPath: '/'
   },
    devServer: {
        historyApiFallback: true
    },
   plugins: [
       new MiniCssExtractPlugin({
           filename: 'styles.css',
           chunkFilename: '[id].css',

        })
    ],
   module: {    
        rules: [{
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/env', '@babel/react'],
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};