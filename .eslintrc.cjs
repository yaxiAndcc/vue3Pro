/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-11-25 15:51:22
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-11-25 16:03:14
 * @FilePath: \vite-project\.eslintrc.cjs
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
