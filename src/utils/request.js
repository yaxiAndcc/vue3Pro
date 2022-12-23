/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-10-09 10:07:56
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-16 10:20:14
 * @FilePath: \h5-mobile\src\utils\request.js
 * @Description: 请求封装，
 *
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved.
 */
import axios from 'axios'

const request = axios.create({
  withCredentials: true,
  timeout: 20000
})

request.interceptors.request.use(
  config => {
    // 这里配置请求头
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default request
