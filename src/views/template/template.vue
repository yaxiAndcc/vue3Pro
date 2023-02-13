<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 10:38:43
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-01-31 14:46:13
 * @FilePath: \h5-mobile\src\views\template\template.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <div>
    <nav-bar />
    这是示例页面
    <div id="extend"></div>
  </div>
</template>

<script lang="ts" setup>
import child from "../tsStudy/child.vue";
import { createApp, onMounted } from "vue";

const component = createApp(child, {
  msg: "extend是vue2.6新增的api",
});
onMounted(() => {
  component.mount("#extend");
});
</script>

<style lang="scss" scoped>
#extend {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
