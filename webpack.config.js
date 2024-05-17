const path = require('path');

module.exports = {
    mode: 'development',
    entry: './reactjs/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        fallback: {
            http: false,
            https: false,
        }
    }
}