const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'URL Shortner',
          filename: 'index.html',
          template: path.resolve(__dirname, 'src/template.html'),
        }),
      ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(svg|ico|png|webp|gif|jpeg)$/, type: 'asset/resource' }
        ],
    },
     devtool: 'inline-source-map',
     devServer: {
         static: path.resolve(__dirname, 'dist'),
         port: 8080,
         open: true,
         hot: true,
     },
};