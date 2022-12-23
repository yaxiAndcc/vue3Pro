<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 15:03:50
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-21 09:49:17
 * @FilePath: \h5-mobile\src\views\redirect\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <!-- 跳转页面 -->
  <div class="loading">
    <van-loading type="spinner" color="#1989fa"> 加载中... </van-loading>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
onMounted(() => {
  const router = useRouter();
  setTimeout(() => {
    router.push({ path: "/home" });
  }, 2000);
});
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
