<template>
  <van-sticky ref="stickyRef">
    <van-search
      @click="goToOtherPage('/search')"
      shape="round"
      placeholder="请输入搜索关键词"
    />
  </van-sticky>
  <van-tabs
    v-model:active="activeTab"
    animated
    sticky
    swipeable
    :offset-top="stickyRefHeight"
  >
    <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
      <component :is="item.component" :category="item"></component>
      <!--      <comprehensive :category="item"></comprehensive>-->
      <!--      <category-item-page :category="item"></category-item-page>-->
    </van-tab>
  </van-tabs>
  <div class="main-container"></div>
</template>

<script setup lang="ts" name="Mall">
import { goToOtherPage } from "@/utils";
import { computed, onMounted, ref, shallowRef } from "vue";
import type { ICategory } from "@/api/all/types";
import { getCategoryList } from "@/api/all";
import Comprehensive from "@/views/mall/comprehensive/comprehensive.vue";
import RefreshContainer from "@/components/RefreshContainer/RefreshContainer.vue";
import CategoryItemPage from "@/views/mall/categoryItemPage/categoryItemPage.vue";
// 活动的tab
const activeTab = ref(0);
// 商品类比
const categoryList = shallowRef<(ICategory & { component: string })[]>([]);
// 计算滚动像素
const stickyRef = ref();
const stickyRefHeight = computed(() => {
  return stickyRef.value?.$el.clientHeight || 0;
});

// 获取商品类比列表
async function getCategoryListHandle() {
  console.log("1");
  const { data } = await getCategoryList();

  categoryList.value = [
    {
      id: 0,
      name: "综合",
      image: "",
      children: [],
      component: Comprehensive
    },
    ...data.map(item => ({
      ...item,
      component: CategoryItemPage
    }))
  ];
}
onMounted(() => {
  getCategoryListHandle();
});
</script>
<style lang="less" scoped></style>
