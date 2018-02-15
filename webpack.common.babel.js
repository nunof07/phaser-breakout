import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

export default {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            watch: './src',
            workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
        }),
        new HardSourceWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Breakout',
            hash: false,
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
    ],
};