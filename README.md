# webFontBest

鲁尔微服务化前端架构
# qiankunspa

初始主程序 cd apps/mainApp

地灾项目 cd apps/disaster

基础项目（路由） cd apps/tenant

后续新增-------

# step1:安装所有应用依赖

根目录 apps:installAll

# step2:启动项目

启动程序所有应用(开发环境)

根目录 apps:startDev

启动单个应用startDev:xx

# step3:打包(举例：测试6环境) 如需打包其他环境需要添加配置

根目录 apps:buildTest6

打包单个应用buildTest6:xx

#请求处理
所有模块请求处理放到apps/mainApp/src/httpConfig/axiosConfig.js内

#请求文本
例：
 axios.get('/open/choose/tenants', {})
                .then((response) => {
                    let data = response.data
                })
