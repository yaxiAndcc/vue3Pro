<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 09:43:26
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2023-01-09 14:12:35
 * @FilePath: \h5-mobile\src\components\funcArea.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <div class="funcAreaComponent">
    <div
      class="func"
      v-for="(item, index) in funcArr"
      :key="index"
      @click="funcClick(item)"
    >
      <img :src="item.img" class="uniImg" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { showToast } from "vant";
import { FuncConfig } from "@/config/funcArea";
import { RouteLocationRaw, useRouter } from "vue-router";
const router = useRouter();

interface Props {
  funcArr: FuncConfig;
}
defineProps<Props>();

function funcClick(item: FuncConfig[number]) {
  if (item.path) {
    router.push(<RouteLocationRaw>item.path);
  } else {
    showToast("功能开发中...");
  }
}
</script>

<style lang="scss" scoped>
.funcAreaComponent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 15px;
}
.func {
  display: flex;
  flex-direction: column;
  align-items: center;
  // font-size: 24px;
  .uniImg {
    width: 20px;
    height: 20px;
    margin-bottom: 8px;
  }
}
</style>
