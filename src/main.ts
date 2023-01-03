/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 16:35:26
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-01-03 16:33:39
 * @FilePath: \h5-mobile\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 16:35:26
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-23 10:49:13
 * @FilePath: \h5-mobile\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Vant from 'vant';
import 'vant/lib/index.css';
import  installComponents from './components/index'

const app=createApp(App)

app.use(router)
app.use(Vant);
const pinia = createPinia()
app.use(pinia)
app.use(installComponents)
// app.use(router) 需放在app.mount('#app')前面 不然加载时router-view、router-link等未被渲染
app.mount('#app')

