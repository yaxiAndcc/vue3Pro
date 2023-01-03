/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 16:36:07
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-01-03 16:56:25
 * @FilePath: \h5-mobile\src\config\funcArea.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
 */
// 首页功能区域配置
import { RouteName } from "@/router";
import rainFallDot from "@/assets/images/rainFallDot.png";
import moreFunc from "@/assets/images/moreFunc.png";
export type FuncConfig = {
    img: string;
    name: string;
    path: RouteName | null;
    group?: string;
}[];
const funcConfig: FuncConfig = [
    {
        img: rainFallDot,
        name: "面雨量",
        // router中面雨量的路径值
        path: RouteName.template,
    },
    {
        img: rainFallDot,
        name: "点雨量",
        path: RouteName.template,
    },
    {
        img: rainFallDot,
        name: "河道水情",
        path: RouteName.template,
    },
    {
        img: rainFallDot,
        name: "水库水情",
        path: RouteName.template,
    },
    {
        img: rainFallDot,
        name: "超警预警",
        path: RouteName.template,
    },
    {
        img: rainFallDot,
        name: "来水预报",
        path: RouteName.template,
    },
    {
        img: rainFallDot,
        name: "风险展示",
        path: RouteName.template,
    },
    {
        img: moreFunc,
        name: "更多",
        path: RouteName.workBench,
    },
]
export default funcConfig