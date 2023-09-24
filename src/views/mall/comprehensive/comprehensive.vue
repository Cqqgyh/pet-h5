<template>
  <van-skeleton title avatar :row="10" :loading="!pageInfo.recommend">
    <div class="main-container">
      <!--    广告-->
      <div class="flex flex-col">
        <div
          class="mt-[5px]"
          v-for="item in pageInfo.advertisement"
          :key="item.id"
        >
          <img class="w-[100%]" :src="item.imgUrl" />
        </div>
      </div>
      <!--    秒杀/排行榜-->
      <div class="flex flex-row justify-between mt-[10px]">
        <!--      秒杀-->
        <div class="flex flex-col bg-[--color-background-3] p-[10px]">
          <!--        标题-->
          <div class="flex flex-row justify-between items-center w-[40vw]">
            <div class="text-[14px] font-bold">秒杀</div>
            <div class="text-[12px]">更多</div>
          </div>
          <!--        秒杀内容-->
          <div class="flex flex-row justify-between items-center mt-[10px]">
            <div
              class="flex flex-col justify-center items-center"
              v-for="item in pageInfo.seckill"
              :key="item.id"
            >
              <img class="w-[70px] h-[70px rounded-s" :src="item.image" />
              <div class="text-[--van-red] bg-orange-300 w-[100%]">
                <span class="text-[12px]">¥</span>
                <span class="text-[15px]">{{ item.price.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
        <!--      排行榜-->
        <div class="flex flex-col bg-[--color-background-3] p-[10px]">
          <!--        标题-->
          <div class="flex flex-row justify-between items-center w-[40vw]">
            <div class="text-[14px] font-bold">排行榜</div>
            <div class="text-[12px]">更多</div>
          </div>
          <!--        秒杀内容-->
          <div class="flex flex-row justify-between items-center mt-[10px]">
            <div
              class="flex flex-col justify-center items-center"
              v-for="(item, index) in pageInfo.rank"
              :key="item.id"
            >
              <img class="w-[70px] h-[70px rounded-s" :src="item.image" />
              <div
                class="text-[--van-red] bg-orange-300 w-[100%] flex justify-center"
              >
                <span class="text-[15px]">{{ `Top ${index + 1}` }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--   活动区域 -->
      <div class="flex flex-row justify-between mt-[10px]">
        <!--      左侧活动-->
        <div>
          <img
            v-for="item in pageInfo.active.left"
            :key="item.id"
            class="w-[170px] h-[170px] rounded-xl"
            :src="item.imgUrl"
          />
        </div>
        <!--      右侧活动-->
        <div class="flex flex-col justify-between">
          <img
            v-for="item in pageInfo.active.right"
            :key="item.id"
            class="w-[170px] h-[80px] rounded-xl"
            :src="item.imgUrl"
          />
        </div>
      </div>
      <!--   推荐商品区域-->
      <van-row class="mb-[20px] ml-[5px]" justify="space-between">
        <van-col
          span="12"
          v-for="item in pageInfo.recommend"
          :key="item.id"
          @click="() => {}"
        >
          <GoodItem :data="item"></GoodItem>
        </van-col>
      </van-row>
    </div>
  </van-skeleton>
</template>
<script setup lang="ts">
import type { ICategory, IComprehensive } from "@/api/all/types";
import type { PropType } from "vue";
import { onMounted, ref } from "vue";
import GoodItem from "@/components/GoodItem/GoodItem.vue";
import { getComprehensive } from "@/api/all";

const props = defineProps({
  category: {
    type: Object as PropType<ICategory>,
    default: () => ({}),
    readOnly: true
  }
});
// 页面数据
const pageInfo = ref({} as IComprehensive);
// 获取综合页面
async function getComprehensiveHandle() {
  const { data } = await getComprehensive();
  pageInfo.value = data;
}
onMounted(() => {
  getComprehensiveHandle();
});
</script>

<style scoped lang="less"></style>
