import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import common from './webpack.common.babel';

export default merge(common, {
    output: {
        filename: '[name].[chunkhash].js',
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new UglifyJsPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
});