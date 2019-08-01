const path = require('path');

module.exports = {
    transpileDependencies: ['d3-scale', 'd3-array', 'cash-dom'],
    devServer: {
        port: 18080,
    },

    pwa: {
        workboxOptions: {
            exclude: [
                /\.map$/,
                /^manifest.*\.js(?:on)?$/,
                /\.js$/,
                /\.css$/,
                /\.html$/,
            ],
            skipWaiting: true,
        },
    },

    // TODO once we want proper support for offline usage we have to define
    // a network-first caching mechanism for js / css / html files

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/assets/scss/utilities.scss'),
            ],
        },
    },

    /** https://vuejs.org/v2/cookbook/debugging-in-vscode.html#Displaying-Source-Code-in-the-Browser */
    /*configureWebpack: {
        devtool: 'source-map',
    },*/
};
