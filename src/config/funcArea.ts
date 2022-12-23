/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 16:36:07
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-22 16:53:13
 * @FilePath: \h5-mobile\src\config\funcArea.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
// 首页功能区域配置
import { RouteName } from "@/router";

export type FuncConfig = {
    img: string;
    name: string;
    path: RouteName | null;
    group?: string;
}[];
const funcConfig: FuncConfig = [
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "面雨量",
        // router中面雨量的路径值
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "点雨量",
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "河道水情",
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "水库水情",
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "超警预警",
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "来水预报",
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/rainFallDot.png"),
        name: "风险展示",
        path: RouteName.template,
    },
    {
        img: require("@/assets/images/moreFunc.png"),
        name: "更多",
        path: RouteName.workBench,
    },
]
export default funcConfig