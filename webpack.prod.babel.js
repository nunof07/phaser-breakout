import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import common from './webpack.common.babel';

export default merge(common, {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
});