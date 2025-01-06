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
        ]
    },

]

export default routes