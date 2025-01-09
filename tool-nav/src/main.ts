import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入新建的路由文件
import router from './router/index'
import { createPinia } from 'pinia'
import SvgIcon from './components/svg-icon/index.vue'
// 导入icon的js
import "./assets/icons/iconfont.js"
// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(vuepressTheme, {
    Prism,
    config: {
        toc: {
            includeLevel: [3, 4],
        },
    },
});


// 创建App实例
const app = createApp(App)
const pinia = createPinia()
// 全局注册SvgIcon组件
app.component("SvgIcon", SvgIcon)
// 挂载路由、pinia
app.use(router).use(pinia).use(VMdPreview) // 引入v-md-editor预览组件
app.mount("#app")

