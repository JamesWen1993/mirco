const path = require('path');
const { name } = require('./package');

function resolve(dir) {
    return path.join(__dirname, dir);
}
const port = 3102; // dev port
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const productionGzipExtensions = ['js', 'css'];


// const glob = require('glob')

// const env = process.env.NODE_ENV;
//
// function getEntry(globPath) {
//     let entries = {};
//     glob.sync(globPath).forEach(function (entry) {
//         var tmp = entry.split('/').splice(-3);
//         entries[tmp[1]] = {
//             entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.js',
//             template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + 'index.html',
//             filename: tmp[1]
//         };
//     });
//     return entries;
// }

// const pages = getEntry('./src/pages/**?/*.html');
// let entry = "//192.168.11.222:"
// process.env.NODE_ENV === "production" ? entry = "//192.168.11.222:" : entry = "//localhost:"
module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    // publicPath:`//localhost:${port}`,
    publicPath: '/',
    // publicPath:`${entry}${port}`,
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    // 自定义webpack配置
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        // externals: {
        //     'jquery': '$',
        //     'axios': 'axios',
        //     'vue-router': 'VueRouter',
        //     'vue': 'Vue',
        //     'vuex': 'Vuex',
        //     'view-design': 'view-design',
        //     'vue-i18n': 'VueI18n',
        //     'swiper': 'Swiper',
        //     'echarts': 'echarts'
        // },
        // plugins: process.env.NODE_ENV === 'production' ?[
        //     new CompressionWebpackPlugin({
        //         algorithm: 'gzip',
        //         test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
        //         threshold: 10240,
        //         minRatio: 0.8,
        //     }),
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             compress: {
        //                 drop_debugger: true, // console
        //                 drop_console: true,
        //                 pure_funcs: ['console.log'] // 移除console
        //             },
        //         },
        //         sourceMap: false,
        //         parallel: true,
        //     }),
        //     // new BundleAnalyzerPlugin()
        // ]:[],
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
    //压缩图片
    // chainWebpack: config => {
    //     config.module
    //         .rule('images')
    //         .use('url-loader')
    //         .loader('url-loader')
    //         .tap(options => {
    //             // 修改它的选项...
    //             options.limit = 100
    //             return options
    //         })
    //     Object.keys(pages).forEach(entryName => {
    //         config.plugins.delete(`prefetch-${entryName}`);
    //     });
    // },
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].minify = false;
            return args;
        });
    }
};

