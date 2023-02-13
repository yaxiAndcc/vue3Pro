/*
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2023-02-09 10:09:55
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-02-13 09:03:31
 * @FilePath: \h5-mobile\src\views\map\qsService.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import mapboxgl from '@cgcs2000/mapbox-gl'
// 青石地图服务基础URL
const baseLayer = 'https://qtj.zjwater.com/qingshi/api/swan/mapWorkshopSource/detail?id='
const token = "pk.eyJ1IjoiZnpjdHl5IiwiYSI6ImNrdG8xdDF4aTA4ZG8yeHBxd2Y3OGM2MjcifQ.v7Gte_l4MXSaXANm8iSwZg";

/**
 * @description: 获取青石图层数据
 * @param {string} id 青石地图ID
 * @param {string} layerName 图层名称
 * @return {*}
 */
export async function getQsLayer(id: string, layerName: string): Promise<GeoJSON.FeatureCollection> {
    const res = await (await fetch(baseLayer + id)).json()
    const data: string = res?.data?.jsonData
    if (!data) throw new Error('未找到图层')
    const style: mapboxgl.Style = JSON.parse(data)
    const feaures = await getData(style, layerName);
    console.log("🚀 ~ file: qsService.ts:28 ~ getQsLayer ~ feaures", feaures)
    return feaures;
}

function getData(data: mapboxgl.Style, layerName: string): Promise<GeoJSON.FeatureCollection> {
    const layer = data.layers.find(item => item.id === layerName)
    if (typeof layer === 'undefined') throw new Error('未找到图层')
    if (layer.type === 'custom') throw new Error('暂不支持自定义图层')
    const source = data.sources[layer.source as string]
    const dom = document.createElement('div');
    dom.id = 'mapBox' + new Date().getTime();
    document.body.appendChild(dom);
    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
        container: dom.id
    });
    map.addSource(layer.source as string, source);
    map.addLayer(layer);
    return new Promise((resolve) => {
        map.on('sourcedata', (e) => {
            const features = map.querySourceFeatures(layer.source as string, {
                sourceLayer: layer.source as string
            });
            if (features.length > 0) {
                dom.remove();
                resolve({
                    type: 'FeatureCollection',
                    features: features
                });
            }
        });
    });
}