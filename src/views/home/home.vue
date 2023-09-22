<template>
  <van-skeleton title avatar :row="10" :loading="!pageInfo.swiperList">
    <!--  轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in pageInfo.swiperList" :key="item.id">
        <!--   宽高比    1280:467-->
        <img class="w-[100vw]" :src="item.imgUrl || swiperImg" />
      </van-swipe-item>
    </van-swipe>
    <div class="main-container">
      <!--    导航区-->
      <van-row>
        <van-col
          span="6"
          v-for="item in pageInfo.navList"
          :key="item.id"
          @click="goTo(item.link)"
        >
          <div
            class="flex flex-col items-center justify-center bg-[--color-background-3] mr-[5px] mt-[5px] rounded-xl pb-[5px]"
          >
            <img class="w-[7vw] m-[10px]" :src="item.imgUrl || bathImg" />
            <div class="font-bold text-[16px]">{{ item.title }}</div>
            <div class="text-[--van-gray-6] text-[12px]">{{ item.desc }}</div>
          </div>
        </van-col>
      </van-row>
      <!--    广告-->
      <div class="flex flex-col">
        <div
          class="mt-[5px]"
          v-for="item in pageInfo.advertisement"
          :key="item.id"
        >
          <img class="w-[100%]" :src="item.imgUrl || adImg" />
        </div>
      </div>
      <!--    活动-->
      <div class="flex flex-col">
        <div class="mt-[5px]" v-for="item in pageInfo.active" :key="item.id">
          <img class="w-[100%]" :src="item.imgUrl || activeImg" />
        </div>
      </div>
    </div>
  </van-skeleton>
</template>

<script setup lang="ts" name="Home">
import { onMounted, ref } from "vue";
import { getHomeInfo } from "@/api/all";
import swiperImg from "@/assets/images/swipe.jpg";
import bathImg from "@/assets/images/bath.png";
import adImg from "@/assets/images/ad.jpg";
import activeImg from "@/assets/images/active.jpg";
import type { IHomeInfo } from "@/api/all/types";
const pageInfo = ref({} as IHomeInfo);
// 获取首页信息
const getHomeInfoHandle = async () => {
  const res = await getHomeInfo();
  pageInfo.value = res.data;
};
// 跳转
const goTo = (link: string) => {
  console.log(link);
};
onMounted(() => {
  getHomeInfoHandle();
});
</script>
