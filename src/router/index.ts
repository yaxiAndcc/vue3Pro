/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 09:44:08
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-22 16:46:37
 * @FilePath: \h5-mobile\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
// 路由配置
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export enum RouteName {
    redirect = 'redirect',
    home = 'home',
    workBench = 'workBench',
    template = 'template'
}

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name:  RouteName.redirect,
        component: () => import('../views/redirect/index.vue')
    },
    {
        path: '/home',
        name: RouteName.home,
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/workBench',
        name: RouteName.workBench,
        component: () => import('../views/workBench/index.vue')
    },
    {
        path: '/template',
        name: RouteName.template,
        component: () => import('../views/template/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router





