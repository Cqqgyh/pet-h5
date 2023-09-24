<template>
  <van-skeleton title avatar :row="10" :loading="!goodsDetail.id">
    <!--  轮播-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in goodsDetail.imageList" :key="item.id">
        <img :src="item.imgUrl" class="w-[100vw] h-[120vw]" />
      </van-swipe-item>
    </van-swipe>
    <div class="main-container">
      <!--    商品信息-->
      <div
        class="bg-[--van-background-2] px-[10px] py-[20px] rounded-xl mt-[10px]"
      >
        <!--    价格-->
        <div class="flex flex-row justify-between">
          <div class="text-[--van-red]">
            <span class="text-[15px]">¥ </span>
            <span class="text-[25px]">{{ goodsDetail.price.toFixed(2) }}</span>
          </div>
          <div class="text-[25px] mr-[5px]">
            <van-icon name="share-o" class="mr-[5px]" />
            <van-icon name="like-o" />
          </div>
        </div>
        <!--      标题-->
        <div class="mt-[5px]">
          <span class="text-[25px]">{{ goodsDetail.title }}</span>
        </div>
        <!--      描述-->
        <div>
          <span class="text-[15px] --van-gray-6 van-multi-ellipsis--l2">{{
            goodsDetail.desc
          }}</span>
        </div>
      </div>
      <!--      物流等信息-->
      <div
        class="bg-[--van-background-2] px-[10px] py-[20px] rounded-xl mt-[10px]"
      >
        <!--        优惠-->
        <div
          class="flex flex-row justify-between items-center text-[20px] mt-[16px] first:mt-0"
        >
          <div class="flex flex-row">
            <div class="mr-[5px]">
              <span class="text-[--van-gray-6]">优惠</span>
            </div>
            <div>满一件8折，满2见7.5折</div>
          </div>
          <div class="--van-gray-6">
            <van-icon name="arrow" />
          </div>
        </div>
        <!--        已选-->
        <div
          class="flex flex-row justify-between items-center text-[20px] mt-[16px] first:mt-0"
        >
          <div class="flex flex-row">
            <div class="mr-[5px]">
              <span class="text-[--van-gray-6]">已选</span>
            </div>
            <div>2kg</div>
          </div>
          <div class="--van-gray-6">
            <van-icon name="arrow" />
          </div>
        </div>
        <!--        运费-->
        <div
          class="flex flex-row justify-between items-center text-[20px] mt-[16px] first:mt-0"
        >
          <div class="flex flex-row">
            <div class="mr-[5px]">
              <span class="text-[--van-gray-6]">运费</span>
            </div>
            <div>待下单时候确认</div>
          </div>
          <div class="--van-gray-6">
            <van-icon name="arrow" />
          </div>
        </div>
        <!--        提示-->
        <div
          class="flex flex-row items-center text-[16px] mt-[16px] py-[3px] px-[10px] bg-[--van-gray-4] rounded-2xl"
        >
          <div class="mr-[10px]">
            <van-icon name="passed" class="mr-[5px]" />
            <span>快递发货</span>
          </div>
          <div class="mr-[10px]">
            <van-icon name="passed" class="mr-[5px]" />
            <span>七天无理由退货</span>
          </div>
        </div>
      </div>
      <!--      商品评价-->
      <div
        class="bg-[--van-background-2] px-[10px] py-[20px] rounded-xl mt-[10px]"
      >
        <div class="text-[20px] flex justify-center">商品评价</div>
        <van-empty image="error" description="暂无评价" :image-size="100" />
      </div>
      <!--      图文详情-->
      <div
        class="bg-[--van-background-2] px-[10px] py-[20px] rounded-xl mt-[10px]"
      >
        <div class="text-[20px] flex justify-center">图文详情</div>
        <div>
          <div v-for="item in goodsDetail?.imageList" :key="item.id">
            <img :src="item.imgUrl" class="w-[100vw] h-[120vw]" />
          </div>
        </div>
      </div>
    </div>
  </van-skeleton>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getGoodsDetailById } from "@/api/all";
import type { IGoodsDetails } from "@/api/all/types";
const route = useRoute();

const goodsDetail = ref({} as IGoodsDetails);
// 获取商品类比列表
async function getGoodsDetailByIdHandle() {
  const { data } = await getGoodsDetailById(
    route.query.id as unknown as number
  );
  goodsDetail.value = data;
}
onMounted(() => {
  getGoodsDetailByIdHandle();
});
</script>

<style scoped lang="less"></style>
