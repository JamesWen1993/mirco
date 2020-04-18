const port = 3101; // dev port
module.exports = {

    configureWebpack:{
        externals: {
            'jquery': '$',
            'axios': 'axios',
            'vue-router': 'VueRouter',
            'vue': 'Vue',
            'vuex': 'Vuex',
            'view-design': 'view-design',
            'vue-i18n': 'VueI18n',
            'swiper': 'Swiper',
            'echarts': 'echarts'
        }
    },
    // publicPath: './',
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
};
