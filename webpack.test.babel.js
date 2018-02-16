import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';

export default {
    output: {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'inline-cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test'),
                ],
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
};