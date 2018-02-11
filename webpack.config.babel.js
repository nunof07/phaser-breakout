import * as path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'breakout.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
};