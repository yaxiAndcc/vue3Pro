/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-11-21 15:23:50
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-11-25 15:43:54
 * @FilePath: \vite-project\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'; 

const app = createApp(App)
app.use(ArcoVue)
app.use(router)
app.mount('#app')
