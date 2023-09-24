<template>
  <van-card class="rounded-xl shadow" :tag="data.tag || ''">
    <!--      title-->
    <template #title>
      <slot name="title">
        <!--      标题-->
        <span class="text-[14px] font-bold">{{ data.title }}</span>
      </slot>
    </template>
    <!--      desc-->
    <template #desc>
      <slot name="desc">
        <div>
          <span class="text-[12px] --van-gray-6">{{ data.desc }}</span>
        </div>
      </slot>
    </template>
    <!--    price-->
    <template #price>
      <slot name="price">
        <!--      价格-->
        <span class="text-red-500 text-[14px]">￥</span>
        <span class="text-red-500 text-[20px]">{{ data.price }}</span>
      </slot>
    </template>
    <!--    thumb-->
    <template #thumb>
      <slot name="thumb">
        <van-image
          class="w-full h-full object-cover"
          :src="data.image || '失败'"
        >
          <template v-slot:error>加载失败</template>
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </slot>
    </template>
  </van-card>
</template>
<script setup lang="ts">
import type { IGoodsDetails } from "@/api/all/types";
import type { PropType } from "vue";
const props = defineProps({
  data: {
    type: Object as PropType<IGoodsDetails & { tag?: string }>,
    default: () => ({}),
    readOnly: true
  }
});
</script>

<style scoped lang="less"></style>
