const routes = [
    {
        path: '/',
        name: "index",
        title: "首页",
        component: () => import('../layout/index.vue'),
        redirect: { name: 'site' },
        children: [
            {
                path: "site",
                name: "site",
                component: () => import('../views/home.vue')
            },
            {
                path: "about-site",
                name: "aboutSite",
                component: () => import('../views/about-site.vue')
            },
            // {
            //     //路由参数实现将多个路由映射到一个组件中
            //     // 文档教程,动态字段以冒号开始
            //     path: "/documentation/:id",
            //     name: "documentation",
            //     component: () => import('../views/ele.vue')
            // }
        ]
    },

    {
        path: '/documentation',
        name: "documentation",
        title: "文档教程",
        component: () => import('../views/documentation.vue'),
    }
]

export default routes