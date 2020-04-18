import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import './public-path';
import './assets/css/public.css'
import './assets/css/public.less'
//mock模拟后台接口工具，生产不用
Vue.config.productionTip = false
// 声明变量管理vue及路由实例
let router = null;
let instance = null;


function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/disaster' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#disaster') : '#disaster');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export async function bootstrap(props) {
  // eslint-disable-next-line
  console.log('[vue] vue app bootstraped');
  // 注册主应用下发的组件
  Vue.use(props.components);
  // 把工具函数挂载在vue $mainUtils对象
  Vue.prototype.$mainUtils = props.utils;
  let pager = props.pager;
  pager.subscribe((v) => {
    // 在子应用注册呼机监听器，这里可以监听到其他应用的广播
    console.log(`监听到子应用${v.from}发来消息：`, v);
    store.commit('save', v.data)   // 在子应用中监听到其他应用广播的消息后处理逻辑
    store.commit('savedisaster', v.from)   // 在子应用中监听到其他应用广播的消息后处理逻辑
  });
  Vue.prototype.$pager = pager; // 将呼机挂载在vue实例

}

export async function mount(props) {
  // eslint-disable-next-line
  console.log('[vue] props from main framework', props);

  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
