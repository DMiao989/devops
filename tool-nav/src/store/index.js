import { defineStore } from 'pinia'
import { ref } from 'vue'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
// 与 Vue 组合式 API 的 setup 函数 相似，我们可以传入一个函数，
// 该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。
// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
export const useExpandStore = defineStore("expend", () => {
    const isExpand = ref(true)
    const changeExpand = () => {
        isExpand.value = !isExpand.value
    }
    return { isExpand, changeExpand } //返回store的所有属性
})