<!--
 * @Author: fang_zc fang_zc@hdec.com
 * @Date: 2022-12-16 09:47:59
 * @LastEditors: fang_zc fang_zc@hdec.com
 * @LastEditTime: 2022-12-21 10:03:22
 * @FilePath: \h5-mobile\src\views\home\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by fang_zc fang_zc@hdec.com, All Rights Reserved. 
-->
<template>
  <!-- 首页 -->
  <div class="homePage">
    <div class="homeBanner">
      <div class="headTile">
        <span class="headTile-text"> {{ title }} </span>
        <div class="userInfo"></div>
      </div>
      <div class="imgSwiper"></div>
    </div>

    <div class="funcArea">
      <funcArea :funcArr="funcArr" />
    </div>
  </div>
</template>

<script lang="ts">
import funcArea from "../../components/funcArea.vue";
import funcConig from "../../config/funcArea.js";
import { useProjectBaseStore } from "../../store";
import { ref } from "vue";
export default {
  name: "home-page",
  components: {
    funcArea,
  },
  setup() {
    const store = useProjectBaseStore();
    const title = ref(store.projectName);
    const funcArr = ref(funcConig);
    return {
      title,
      funcArr,
    };
  },
};
</script>

<style lang="scss" scoped>
.homePage {
  width: 100%;
  height: 100%;
}
.homeBanner {
  padding: 16px;
}

.headTile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-text {
    display: inline-block;
  }
}

.imgSwiper {
  position: relative;
}

.funcArea {
  height: 320px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.newsArea {
  width: 100%;
  padding: 0 32px;
  .news {
    width: 100%;
    margin-bottom: 40px;

    .newsTitle {
      display: flex;
      align-items: center;
      margin-bottom: 28px;

      image {
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }

      span {
        display: inline-block;
        color: rgba(0, 0, 0, 0.85);
        font-size: 26px;
      }
    }

    .defend-info {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 44px;
      // margin-top: 56px;
      margin-bottom: 48px;
      padding: 0 35px;
    }
  }
}
</style>
