<template>
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
            <img class="w-[60px] h-[70px rounded-s" :src="item.image" />
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
            <img
              class="w-[60px] h-[70px rounded-s"
              :src="'http://dummyimage.com/60x70'"
            />
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
</template>
<script setup lang="ts">
import type { ICategory } from "@/api/all/types";
import type { PropType } from "vue";
import activeImg from "@/assets/images/active.jpg";
import { ref } from "vue";
import GoodItem from "@/components/GoodItem/GoodItem.vue";

const props = defineProps({
  category: {
    type: Object as PropType<ICategory>,
    default: () => ({}),
    readOnly: true
  }
});
// 页面数据
const pageInfo = ref({
  // 广告
  advertisement: [
    {
      id: 1,
      imgUrl: "http://dummyimage.com/2000x900"
    }
  ],
  //   秒杀
  seckill: [
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/60x70"
    },
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/60x70"
    }
  ],
  //   排行榜
  rank: [
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/60x70"
    },
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/60x70"
    }
  ],
  //   活动区域
  active: {
    left: [
      {
        id: 1,
        imgUrl: "http://dummyimage.com/200x200"
      }
    ],
    right: [
      {
        id: 1,
        imgUrl: "http://dummyimage.com/170x80"
      },
      {
        id: 1,
        imgUrl: "http://dummyimage.com/170x80"
      }
    ]
  },
  //   推荐商品区域
  recommend: [
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/200x200"
    },
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/200x200"
    },
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/200x200"
    },
    {
      id: 3,
      price: 66,
      title: "第二程强制入",
      desc: "类回联引风质养方油计低也总支指且写加石人",
      image: "http://dummyimage.com/200x200"
    }
  ]
});
// 获取综合页面
const getComprehensivePage = () => {
  console.log("getComprehensivePage");
};
</script>

<style scoped lang="less"></style>
