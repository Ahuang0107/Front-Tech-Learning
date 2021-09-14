const {resolve} = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
        ],
    },
    plugins: [],
    mode: 'development',
};
