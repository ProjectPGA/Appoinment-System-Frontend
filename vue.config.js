const path = require('path');
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    // TODO: Review if not works
    // publicPath: devMode ? '' : ':3000',

    transpileDependencies: ['d3-scale', 'd3-array', 'cash-dom'],
    devServer: {
        port: 18000,
        proxy: {
            '/api': {
                target: 'http://45.9.190.165:3000/',
                ws: true,
                changeOrigin: true,
                cookieDomainRewrite: true,
                protocolRewrite: 'http',
            },
        },
    },

    pwa: {
        name: 'Porfolio framework',
        themeColor: '#506975',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
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
        // iconPaths: {
        //     favicon32: 'img/icons/icon-32x32.png',
        //     favicon16: 'img/icons/icon-16x16.png',
        //     appleTouchIcon: 'img/icons/icon-152x152.png',
        //     msTileImage: 'img/icons/icon-144x144.png',
        // },
    },

    // TODO once we want proper support for offline usage we have to define
    // a network-first caching mechanism for js / css / html files

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, 'src/styles/utilities.scss')],
        },
    },

    // https://github.com/vuejs/vue-cli/issues/3123#issue-390532313
    chainWebpack(config) {
        config.resolve
            .plugin('tsconfig-paths')
            .use(require('tsconfig-paths-webpack-plugin'));
    },
};
