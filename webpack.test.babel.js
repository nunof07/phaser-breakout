import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { TsConfigPathsPlugin } from 'awesome-typescript-loader';

const isCoverage = process.env.NODE_ENV === 'coverage';
const coverageLoaders = isCoverage ? [{
    test: /\.ts$/,
    include: path.resolve(__dirname, 'src'),
    use: 'istanbul-instrumenter-loader',
}] : [];

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
        rules: coverageLoaders.concat([
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test'),
                ],
                exclude: /node_modules/,
                use: 'awesome-typescript-loader',
            },
        ]),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsPlugin(),
        ]
    },
};