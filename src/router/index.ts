/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-11-25 15:46:09
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-11-25 16:12:33
 * @FilePath: \vite-project\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home-page.vue";

const routes = [
    { path: '/', name: 'Home', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router