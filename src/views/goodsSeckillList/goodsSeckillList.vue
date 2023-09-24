<template>
  <van-sticky>
    <!--    标题-->
    <div
      class="flex justify-center items-center bg-[--van-primary-color] py-[10px]"
    >
      <div class="flex justify-center items-center">
        <div class="text-[16px] font-bold">秒杀</div>
      </div>
    </div>
  </van-sticky>
  <div class="main-container mt-[15px]">
    <GoodItemBar
      v-for="item in goodsList"
      :key="item.id"
      :data="item"
    ></GoodItemBar>
  </div>
</template>
<script setup lang="ts">
import type { IGoodsDetails } from "@/api/all/types";
import { onMounted, ref } from "vue";
import { getSeckillList } from "@/api/all";
import GoodItemBar from "@/components/GoodItemBar/GoodItemBar.vue";

// 页面数据
const goodsList = ref<IGoodsDetails[]>([]);
// 获取当前分类页面
async function getSeckillListHandle() {
  const { data } = await getSeckillList();
  goodsList.value = data;
}
onMounted(() => {
  getSeckillListHandle();
});
</script>

<style scoped lang="less"></style>
