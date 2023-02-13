<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2023-01-12 10:53:31
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-01-31 14:45:26
 * @FilePath: \h5-mobile\src\views\tsStudy\child.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <div>{{ msg }}</div>
</template>
<script lang="ts" setup>
// 定义props
defineProps({
  msg: {
    type: String,
    default: "这是一个默认值",
  },
});
</script>

<style lang="scss" scoped>
div {
  width: 100px;
  height: 100px;
  color: black;
}
</style>
