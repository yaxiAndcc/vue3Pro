/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 14:24:03
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-16 14:51:12
 * @FilePath: \h5-mobile\src\store\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
// 配置pinia状态
import { defineStore } from 'pinia'

const { projectName, projectVersion, projectDescription } = require('../config')
// 项目基础信息
export const useProjectBaseStore = defineStore({
    id: 'projectBase',
    state: () => ({
        projectName: projectName,
        projectVersion: projectVersion,
        projectDescription: projectDescription,
    })
})

// 用户信息
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userName: '',
        userId: '',
        token: '',
    }),
    getters: {
        getUserName() {
            return this.userName
        },
    },
    actions: {
        setUserName(userName) {
            this.userName = userName
        },
    },
})
