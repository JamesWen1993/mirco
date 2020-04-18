import axios from 'axios'

//开发环境配置
if (process.env.VUE_APP_MODE === 'dev') {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

    axios.interceptors.request.use(function (config) {
        config.headers['from'] = 'app'
        config.headers['tenant'] = 'gplsyzt'
        config.headers['ruhr-auth'] = 'feaa68ba-a26d-4ead-b338-cea61b66a791'
        return config
    }, function (error) {
        // Do something with request error
        console.log(error)
        return Promise.reject(error)
    })

} else if (process.env.VUE_APP_MODE === 'pro') {
    //生产环境配置
    let url = window.location.href
    if (url.indexOf('/') > -1) {
        let tenat = url.split("/")
        axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
        if (tenat[2].indexOf('www.ruhrtec.cn') > -1 || tenat[2].indexOf('manager.ruhrtec.cn') > -1 || tenat[2].indexOf('partner.ruhrtec.cn') > -1) {
            axios.defaults.uploadBaseURL = tenat[0] + '//upload.ruhrtec.cn'
        } else {
            axios.defaults.uploadBaseURL = tenat[0] + '//upload.' + tenat[2]
        }

    }
}

axios.interceptors.request.use(function (config) {
    // store.commit('getLang')
    // if (store.state.lang == 'zh-CN') {
    //     config.headers['accept-language'] = 'zh-CN'
    // } else {
    //     config.headers['accept-language'] = 'en-us'
    // }
    return config
}, function (error) {
    // Do something with request error
    console.log(error)
    return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
    // if (response.config.url.indexOf('doLogin') > -1){
    //     if (response.headers['ruhr-auth']){
    //         store.commit('saveauth',response.headers['ruhr-auth'])
    //     }
    // }
    // if (response.data.status == 'authorization_fail') {
    //     store.commit('getLang')
    //     let title = 'Login Timeout'
    //     let desc = 'There is no access to this resource.'
    //     if (store.state.lang == 'zh-CN') {
    //         title = '登录超时'
    //         desc = '没有权限访问此资源'
    //     }
    //     Notice.open({
    //         title: title,
    //         desc: desc
    //     })
    //     store.commit('getLoginUrl')
    //     // router.push('/404')
    //     // router.push('/' + store.state.loginUrl)
    // }
    return response
}, function (err) {
    // Do something with request error
    // if (err && err.response) {
    //     switch (err.response.status) {
    //         case 501:
    //             router.push('/403')
    //             break
    //
    //         case 502:
    //             router.push('/403')
    //             break
    //
    //         case 503:
    //             router.push('/403')
    //             break
    //
    //         case 504:
    //             router.push('/403')
    //             break
    //
    //         case 505:
    //             router.push('/403')
    //             break
    //
    //         default:
    //     }
    // }
    return Promise.reject(err)
})
