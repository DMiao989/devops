import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入新建的路由文件
import router from './router/index'

// 创建App实例
const app = createApp(App)
// 挂载路由
app.use(router)
app.mount("#app")

