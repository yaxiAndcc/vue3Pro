<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 13:53:58
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-23 08:54:11
 * @FilePath: \h5-mobile\src\components\navBar.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <!-- 顶部标签栏组件,这是个示例，后续有其他要求可在此模板上进行修改 -->
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    class="navBar"
  />
</template>

<script lang="ts">
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.navBar {
  position: sticky;
  top: 0;
}
</style>
