// 导入router所需的方法
import { createRouter, createWebHistory } from "vue-router"

// 导入路由页面的配置
import routes from './routes'

const baseUrl = "/devops-page/"
// 路由参数配置
const router = createRouter({
    // 使用hash（createWebHashHistory）模式，（createWebHistory是HTML5历史模式，支持SEO）
    history: createWebHistory(baseUrl),
    routes: routes,
})


// 全局前置守卫 这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
})

// 全局后置守卫，这里可以加入改变页面标题等操作
router.afterEach((to, from) => {
    console.log(to, from)
})

export default router