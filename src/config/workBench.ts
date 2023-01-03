// 工作台功能配置项
import { FuncConfig } from "./funcArea";
import { RouteName } from "@/router";
import rainFallDot from "@/assets/images/rainFallDot.png";

const workBenchArr:FuncConfig = [{
    img: rainFallDot,
    name: "面雨量",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "点雨量",
    path: null,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "卫星云图",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "雷达图",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "河道水情",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "水库水情",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "降雨统计",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "视频",
    // path: "",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "险情上报",
    path: RouteName.template,
    // path:"",
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "超警预警",
    path: RouteName.template,
    group: "水雨情监测预警",
},
{
    img: rainFallDot,
    name: "水库信息",
    path: RouteName.template,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "河道信息",
    path: RouteName.template,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "蓄滞洪区",
    path: RouteName.template,
    // path:"",
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "水闸泵站",
    path: RouteName.template,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "社会经济",
    path: RouteName.template,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "洪水风险图",
    path: null,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "抢险手册",
    path: RouteName.template,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "避灾转移",
    path: RouteName.template,
    group: "基础信息",
},
{
    img: rainFallDot,
    name: "来水预报",
    path: RouteName.template,
    group: "预报分析",
},
{
    img: rainFallDot,
    name: "风险展示",
    path: RouteName.template,
    group: "预报分析",
},
{
    img: rainFallDot,
    name: "防汛总结",
    path: RouteName.template,
    // path:"",
    group: "预报分析",
},
{
    img: rainFallDot,
    name: "灾情统计",
    path: RouteName.template,
    group: "预报分析",
},
{
    img: rainFallDot,
    name: "定位导航",
    path: RouteName.template,
    group: "防汛业务",
},
{
    img: rainFallDot,
    name: "防汛队伍",
    path: RouteName.template,
    group: "防汛业务",
},
{
    img: rainFallDot,
    name: "防汛物资",
    path: RouteName.template,
    group: "防汛业务",
},
{
    img: rainFallDot,
    name: "防汛值班",
    path: RouteName.template,
    group: "防汛业务",
}
]
export default workBenchArr