<template>
  <div
    class="w-[45vw] bg-[--color-background-3] mt-[10px] pl-[15px] pr-[15px] pt-[5px] pb-[5px] flex flex-col justify-center rounded-s"
  >
    <div class="flex flex-col justify-center items-center">
      <img :src="data.image" alt="产品图片" class="w-[35vw] h-[35vw]" />
    </div>

    <div class="mt-[5px]">
      <span class="text-[12px]">{{ data.title }}</span>
    </div>
    <div class="text-[--van-red]">
      <span class="text-[12px]">¥</span>
      <span class="text-[20px]">{{ data.price.toFixed(2) }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IGoodsDetails } from "@/api/all/types";
import type { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<IGoodsDetails>,
    default: () => ({}),
    readOnly: true
  }
});
</script>

<style scoped lang="less"></style>
