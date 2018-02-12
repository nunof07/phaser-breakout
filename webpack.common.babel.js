import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'breakout.js',
    },
    plugins: [
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