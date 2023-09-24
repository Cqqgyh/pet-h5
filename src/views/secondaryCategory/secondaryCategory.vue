<template>
  <van-sticky>
    <!--    标题-->
    <div
      class="flex justify-center items-center bg-[--van-primary-color] py-[10px]"
    >
      <div class="flex justify-center items-center">
        <div class="text-[16px] font-bold">{{ pageTitle }}</div>
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

const props = defineProps({
  id: {
    type: Number,
    readOnly: true
  },
  pageTitle: {
    type: String,
    default: "推荐"
  }
});

// 页面数据
const recommendGoodsList = ref<IGoodsDetails[]>([]);
// 获取当前分类页面
async function getRecommendByCategoryIdHandle() {
  const { data } = await getRecommendByCategoryId(props.id as number);
  recommendGoodsList.value = data;
}
onMounted(() => {
  // 设置页面标题
  document.title = props.pageTitle;
  getRecommendByCategoryIdHandle();
});
</script>

<style scoped lang="less"></style>
