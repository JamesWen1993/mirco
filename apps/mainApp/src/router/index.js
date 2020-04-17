import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
]

const createRouter = () => new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

const router = createRouter();

// 重置路由
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}


export default router
