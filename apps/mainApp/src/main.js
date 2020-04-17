import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pager from './until/page'
// process.env.NODE_ENV
Vue.config.productionTip = false
// 导入qiankun内置函数
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 第一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载子应用
  start // 启动
} from "qiankun";

// 初始化主应用渲染函数
let app = null;

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: "#mainApp",
      router,
      store,
      data() {
        return {
          content: appContent,
          loading
        };
      },
      render(h) {
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading
          }
        });
      }
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

/**
 * Step2 注册子应用
 */

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return (location) => location.pathname.startsWith(routerPrefix);
}

pager.subscribe((v) => {
  // 在主应用注册呼机监听器，这里可以监听到其他应用的广播
  console.log(`监听到子应用${v.from}发来消息：`, v);
  store.commit('save', v.data); // 这里处理主应用监听到改变后的逻辑
  store.commit('saveName', v.from); // 这里处理主应用监听到改变后的逻辑

});

let msg = {
  // 结合下章主应用下发资源给子应用，将pager作为一个模块传入子应用
  // data: store.getters, // 从主应用仓库读出的数据
  // components: LibraryUi, // 从主应用读出的组件库
  // utils: LibraryJs, // 从主应用读出的工具类库
  // emitFnc: childEmit, // 从主应用下发emit函数来收集子应用反馈
  pager, // 从主应用下发应用间通信呼机
};
Vue.prototype.$pager = pager;

// console.log(process.env.NODE_ENV)
let entry = "//192.168.11.222:"
process.env.NODE_ENV === "production" ? entry = "//192.168.11.222:" : entry = "//localhost:"
registerMicroApps(
    [
      {
        "name": "tenant",
        "entry": entry+"3102",
        "container": "#subapp-viewport",
        "activeRule": genActiveRule("/tenant"),
        render,
        props: msg, // 将上面数据传递给子应用
      },
      {
        "name": "disaster",
        "entry": entry+"3103",
        "container": "#subapp-viewport",
        "activeRule": genActiveRule("/disaster"),
        render,
        props: msg, // 将上面数据传递给子应用
      }
    ],
    {
      beforeLoad: [
        app => {
          console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
      ],
      beforeMount: [
        app => {
          console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
      ],
      afterUnmount: [
        app => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
      ],
    },
);


/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/tenant');

/**
 * Step4 启动应用
 */
start({
  prefetch: true,
  sandbox: true,
  singular: true,
});

runAfterFirstMounted((app) => {
  console.log('[MainApp] first app mounted',app);
});


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
