<template>
  <van-sticky ref="stickyRef">
    <SearchBar></SearchBar>
  </van-sticky>
  <van-tabs
    ref="tabsRef"
    v-model:active="activeTab"
    animated
    sticky
    swipeable
    :offset-top="stickyRefHeight"
  >
    <van-tab
      v-for="item in categoryList"
      :key="item.id"
      :title="item.name"
      :disabled="!!item?.disabled"
    >
      <component :is="item.component" :category="item"></component>
    </van-tab>
  </van-tabs>
  <div
    ref="categoryRef"
    class="fixed top-[30px] right-0 flex mt-[10px] justify-center items-center bg-[--van-background-2]"
    @click="goToOtherPage('/category')"
  >
    <van-icon name="bar-chart-o" class="rotate-[-90deg]" />
    <div>分类</div>
  </div>
</template>

<script setup lang="ts" name="Mall">
import { computed, nextTick, onMounted, ref, shallowRef, watch } from "vue";
import type { ICategory } from "@/api/all/types";
import { getCategoryList } from "@/api/all";
import Comprehensive from "@/views/mall/comprehensive/comprehensive.vue";
import CategoryItemPage from "@/views/mall/categoryItemPage/categoryItemPage.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import { goToOtherPage } from "@/utils";
// 活动的tab
const activeTab = ref(0);
// 商品类比
const categoryList = shallowRef<
  (ICategory & { component: string; disabled?: boolean })[]
>([]);
// 计算滚动像素
const stickyRef = ref();
const stickyRefHeight = computed(() => {
  console.log("stickyRefHeight--------------------");
  return stickyRef.value?.$el.clientHeight || 0;
});
// 计算分类定位与大小
const tabsRef = ref();
const categoryRef = ref();
watch(stickyRefHeight, () => {
  setTimeout(() => {
    let tabsRefHeight =
      document.getElementById("van-tabs-3-1")?.clientHeight || 0;
    let tabRefWidth = document.getElementById("van-tabs-3-1")?.clientWidth || 0;
    categoryRef.value.style.top = `${tabsRefHeight}px`;
    categoryRef.value.style.width = `${tabRefWidth}px`;
    categoryRef.value.style.height = `${tabsRefHeight}px`;
    categoryRef.value.style.zIndex = `99`;
  }, 100);
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
    })),
    {
      id: -1,
      name: "占位元素",
      image: "",
      children: [],
      component: "div",
      disabled: true
    }
  ];
}
onMounted(() => {
  getCategoryListHandle();
});
</script>
<style lang="less" scoped></style>
