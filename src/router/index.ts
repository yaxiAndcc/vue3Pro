import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import todo from '@/components/todo.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: todo },
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


export default router