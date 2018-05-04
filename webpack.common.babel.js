import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    entry: {
        main: './src/index.ts',
        vendor: [
            'phaser',
            'ramda',
            'random-js',
            'format-duration',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            // GLSL shaders (required by Phaser)
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            },
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: 'awesome-typescript-loader',
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
            workers: process.env.NODE_ENV === 'travis' ? 2 : ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
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
            headHtmlSnippet: '<style>html,body{height:100%;margin:0;}body{background-color:#808080;}#game{height:100%;display:flex;justify-content:center;align-items:center;}canvas{cursor:none;}</style>',
        }),
        new CopyWebpackPlugin(['assets' ], { cache: true }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
        // vars used by Phaser
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],
};