import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入新建的路由文件
import router from './router/index'
import { createPinia } from 'pinia'
import SvgIcon from './components/svg-icon/index.vue'
// 导入icon的js
import "./assets/icons/iconfont.js"


// 创建App实例
const app = createApp(App)
const pinia = createPinia()
// 全局注册SvgIcon组件
app.component("SvgIcon", SvgIcon)
// 挂载路由
app.use(router).use(pinia)
app.mount("#app")

