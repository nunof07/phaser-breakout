import * as path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'breakout.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Breakout',
            hash: true,
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: true,
                removeScriptTypeAttributes: true,
            },
            inject: false,
            template: HtmlWebpackTemplate,
            appMountId: 'game',
            mobile: true,
        }),
    ],
};