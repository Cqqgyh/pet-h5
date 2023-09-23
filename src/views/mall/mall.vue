<template>
  <van-sticky ref="stickyRef">
    <van-search
      @click="goToOtherPage('/search')"
      shape="round"
      placeholder="请输入搜索关键词"
    />
  </van-sticky>
  <van-tabs animated sticky swipeable :offset-top="stickyRefHeight">
    <van-tab
      v-for="item in [{ id: 0, name: '综合' }, ...categoryList]"
      :key="item.id"
      :title="item.name"
    >
      <RefreshContaine :onRefresh="getCategoryListHandle">
        <comprehensive :category="item"></comprehensive>
      </RefreshContaine>
    </van-tab>
  </van-tabs>
  <div class="main-container"></div>
</template>

<script setup lang="ts" name="Mall">
import { goToOtherPage } from "@/utils";
import { computed, onMounted, ref } from "vue";
import type { ICategory } from "@/api/all/types";
import { getCategoryList } from "@/api/all";
import Comprehensive from "@/views/mall/comprehensive/comprehensive.vue";
// 商品类比
const categoryList = ref<ICategory[]>([]);
// 计算滚动像素
const stickyRef = ref();
const stickyRefHeight = computed(() => {
  return stickyRef.value?.$el.clientHeight || 0;
});

// 获取商品类比列表
async function getCategoryListHandle() {
  console.log("1");
  const { data } = await getCategoryList();
  categoryList.value = data;
}
onMounted(() => {
  getCategoryListHandle();
});
</script>
<style lang="less" scoped></style>
