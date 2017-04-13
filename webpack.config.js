import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    entry: [
        './src/webpack-public-path',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ],
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
