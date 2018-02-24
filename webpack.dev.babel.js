import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanTerminalPlugin from 'clean-terminal-webpack-plugin';
import common from './webpack.common.babel';

export default merge(common, {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        overlay: true,
        hot: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanTerminalPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
});