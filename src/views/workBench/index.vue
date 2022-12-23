<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 10:27:38
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-21 14:32:30
 * @FilePath: \h5-mobile\src\views\workBench\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <!-- 工作台 -->
  <div class="workBenchPage">
    <nav-bar title="工作台"/>
    <div class="funcArea" v-for="(item, index) in data" :key="index">
      <span>{{ item.group }}</span>
      <div class="funcWrap">
        <funcArea :funcArr="item.funcArr" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import funcArr from "@/config/workBench";
import funcArea from "@/components/funcArea.vue";
export default {
  name: "WorkBench",
  components: {
    funcArea,
  },
  computed: {
    data() {
      // 将funcArr中的数据按照group分组
      const arr = [];
      for (let i = 0; i < funcArr.length; i++) {
        const element = funcArr[i];
        const index = arr.findIndex((item) => item.group === element.group);
        if (index === -1) {
          arr.push({
            group: element.group,
            funcArr: [element],
          });
        } else {
          arr[index].funcArr.push(element);
        }
      }
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
.workBenchPage {
  width: 100%;
  // padding-bottom: 24px;
  .funcArea {
    // margin: 24px 30px;
    padding: 16px 0;
    border-radius: 4px;
    background: #fff;
    span {
      display: flex;
      color: #000000;
      margin: 24px;
      font-weight: 500;
      align-items: center;
      &::before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 10px;
        border-radius: 4px;
        background: rgb(2, 122, 255);
        margin-right: 8px;
      }
    }
    .funcWrap {
      margin-top: 16px;
    }
  }
}
</style>
