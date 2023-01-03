/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 14:24:03
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-01-03 16:46:45
 * @FilePath: \h5-mobile\src\store\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
// 配置pinia状态
import { defineStore } from 'pinia'

import projectInfo from '@/config'
// 项目基础信息
export const useProjectBaseStore = defineStore({
    id: 'projectBase',
    state: () => ({
        projectName: projectInfo.projectName,
        projectVersion: projectInfo.projectVersion,
        projectDescription: projectInfo.projectDescription,
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
        getUserName(): string {
            return this.userName
        },
    },
    actions: {
        setUserName(userName: string) {
            this.userName = userName
        },
    },
})
