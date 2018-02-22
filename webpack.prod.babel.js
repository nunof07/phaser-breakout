import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import LicenseBannerPlugin from 'license-banner-webpack-plugin';
import common from './webpack.common.babel';

const sourceMapEnabled = false;

export default merge(common, {
    output: {
        filename: '[name].[chunkhash].js',
    },
    devtool: sourceMapEnabled ? 'source-map' : false,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new UglifyJsPlugin({
            sourceMap: sourceMapEnabled,
            cache: true,
            parallel: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new LicenseBannerPlugin({
            licenseDirectories: [
                path.join('node_modules')
            ]
        }),
        new webpack.BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
    ],
});