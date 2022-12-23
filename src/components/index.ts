/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 14:03:07
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-23 10:22:03
 * @FilePath: \h5-mobile\src\components\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
// 注册全局组件
import Vue from 'vue'
import type {Component} from 'vue'
// 按需引入
import navBar from './navBar.vue'

const components: {[key: string]: Component} = {
    navBar
}

export default function installComponents(app: Vue.App): void {
    Object.keys(components).forEach(key => {
        app.component(key, components[key])
    })
}


