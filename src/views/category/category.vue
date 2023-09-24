<template>
  <van-skeleton title avatar :row="10" :loading="!categoryList.length">
    <van-sticky ref="stickyRef">
      <SearchBar></SearchBar>
    </van-sticky>
    <van-tree-select
      :height="treeSelectHeight"
      v-model:main-active-index="activeIndex"
      :items="categoryList as TreeSelectItem[]"
    >
      <template #content>
        <van-grid
          clickable
          :border="false"
          :column-num="3"
          class="mt-[10px] rounded-2xl"
        >
          <van-grid-item
            v-for="item in (categoryList[activeIndex].children as (ICategory & TreeSelectItem))"
            :key="item"
            @click="
              goToOtherPage({ path: '/search', query: { categoryId: item.id } })
            "
          >
            <van-image class="w-[30px] h-[60px]" :src="item.image" />
            <span>{{ item.text }}</span>
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
  </van-skeleton>
</template>
<script setup lang="ts">
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import { computed, onMounted, ref } from "vue";
import { getCategoryList } from "@/api/all";
import type { TreeSelectItem } from "vant";
import { goToOtherPage } from "@/utils";
import type { ICategory } from "@/api/all/types";
const activeIndex = ref(0);
const stickyRef = ref();
const treeSelectHeight = computed(() => {
  // 获取页面高度
  return window.innerHeight - (stickyRef.value?.$el.clientHeight || 0);
});

// 商品类比
const categoryList = ref<(ICategory & TreeSelectItem)[]>([]);
// 获取商品类比列表
async function getCategoryListHandle() {
  const { data } = await getCategoryList();
  categoryList.value = data.map(item => ({
    ...item,
    text: item.name,
    children: item.children.map(child => ({
      ...child,
      text: child.name
    }))
  }));
}
onMounted(() => {
  getCategoryListHandle();
});
</script>

<style scoped lang="less"></style>
