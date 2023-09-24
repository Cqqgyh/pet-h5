<template>
  <van-skeleton title avatar :row="10" :loading="!serviceList.length">
    <van-sticky ref="stickyRef">
      <!--    标题-->
      <div
        class="flex justify-center items-center bg-[--van-primary-color] py-[10px]"
      >
        <div class="flex justify-center items-center">
          <div class="text-[16px] font-bold">服务</div>
        </div>
      </div>
    </van-sticky>
    <van-tree-select
      :height="treeSelectHeight"
      v-model:main-active-index="activeIndex"
      :items="serviceList as TreeSelectItem[]"
    >
      <template #content>
        <div class="mt-[20px] mb-[20px]">
          <service-item-bar
            v-for="item in (serviceList[activeIndex].children as (ICategory & TreeSelectItem))"
            :key="item.id"
            :data="item"
          ></service-item-bar>
        </div>
      </template>
    </van-tree-select>
  </van-skeleton>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getServiceList } from "@/api/all";
import type { TreeSelectItem } from "vant";
import { goToOtherPage } from "@/utils";
import type { ICategory } from "@/api/all/types";
import { useApp } from "@/store/modules/useApp";
import type { IServiceCategory } from "@/api/all/types";
import ServiceItemBar from "@/components/ServiceItemBar/ServiceItemBar.vue";
const app = useApp();
const activeIndex = ref(0);
const stickyRef = ref();
const treeSelectHeight = computed(() => {
  // 获取页面高度
  return (
    window.innerHeight -
    (stickyRef.value?.$el.clientHeight || 0) -
    app.tabBarInfo.height
  );
});

// 商品类比
const serviceList = ref<(IServiceCategory & TreeSelectItem)[]>([]);
// 获取商品类比列表
async function getServiceListHandle() {
  const { data } = await getServiceList();
  serviceList.value = data.map(item => ({
    ...item,
    text: item.name,
    children: item.children.map(child => ({
      ...child,
      text: child.title
    }))
  }));
}
onMounted(() => {
  getServiceListHandle();
});
</script>

<style scoped lang="less"></style>
