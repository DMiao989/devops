const routes = [
    {
        path: '/',
        name: "index",
        title: "首页",
        component: () => import('@/layout/index.vue')
    }
]

export default routes