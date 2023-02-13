<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2023-01-09 13:46:16
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-02-13 15:44:50
 * @FilePath: \h5-mobile\src\views\map\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <div id="map"></div>
  <div id="map2"></div>
</template>
<script lang="ts" setup>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "@cgcs2000/mapbox-gl";
import { onMounted, ref } from "vue";
import { getQsLayer } from "./qsService";
import syncMaps from "@mapbox/mapbox-gl-sync-move";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZnpjdHl5IiwiYSI6ImNrdG8xdDF4aTA4ZG8yeHBxd2Y3OGM2MjcifQ.v7Gte_l4MXSaXANm8iSwZg";
function initMap() {
  const map1 = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [120.16, 29.34],
    zoom: 8.3,
  });
  const map2 = new mapboxgl.Map({
    container: "map2",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [120.16, 29.34],
    zoom: 8.3,
  });
  syncMaps(map1, map2);
}
onMounted(() => {
  initMap();
  getQsLayer("1622801203140235266", "水库1");
});
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 50%;
}
#map2 {
  width: 100%;
  height: 50%;
}
</style>
