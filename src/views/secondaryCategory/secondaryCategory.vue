<template>
  <van-sticky>
    <!--    标题-->
    <div
      class="flex justify-center items-center bg-[--van-primary-color] py-[10px]"
    >
      <div class="flex justify-center items-center">
        <div class="text-[16px] font-bold">{{ route.query.pageTitle }}</div>
      </div>
    </div>
  </van-sticky>
  <div class="main-container mt-[15px]">
    <GoodItemBar
      v-for="item in recommendGoodsList"
      :key="item.id"
      :data="item"
    ></GoodItemBar>
  </div>
</template>
<script setup lang="ts">
import type { IGoodsDetails } from "@/api/all/types";
import { onMounted, ref } from "vue";
import { getRecommendByCategoryId } from "@/api/all";
import GoodItemBar from "@/components/GoodItemBar/GoodItemBar.vue";
import { useRoute } from "vue-router";
const route = useRoute();
// 页面数据
const recommendGoodsList = ref<IGoodsDetails[]>([]);
// 获取当前分类页面
async function getRecommendByCategoryIdHandle() {
  const { data } = await getRecommendByCategoryId(
    route.query.id as unknown as number
  );
  recommendGoodsList.value = data;
}
onMounted(() => {
  console.log("route.query", route.query);
  // 设置页面标题
  document.title = (route.query?.pageTitle as unknown as string) || "推荐";
  getRecommendByCategoryIdHandle();
});
</script>

<style scoped lang="less"></style>
