<template>
  <refresh-container :onRefresh="getRecommendByCategoryIdHandle">
    <van-skeleton title avatar :row="10" :loading="!image.length">
      <div class="main-container">
        <!--    小分类-->
        <van-grid
          clickable
          :border="false"
          :column-num="4"
          class="mt-[10px] rounded-2xl"
        >
          <van-grid-item
            v-for="item in category.children.slice(0, 4)"
            :key="item"
            @click="
              goToOtherPage({
                path: '/secondaryCategory',
                query: { id: item.id, pageTitle: item.name }
              })
            "
          >
            <van-image class="w-[30px] h-[60px]" :src="item.image" />
            <span>{{ item.name }}</span>
          </van-grid-item>
        </van-grid>
        <!--   推荐商品区域-->
        <van-row class="mb-[20px] ml-[5px]" justify="space-between">
          <van-col span="12" v-for="item in image" :key="item.id">
            <GoodItem :data="item"></GoodItem>
          </van-col>
        </van-row>
      </div>
    </van-skeleton>
  </refresh-container>
</template>
<script setup lang="ts">
import type { ICategory, IComprehensive, IGoodsDetails } from "@/api/all/types";
import type { PropType } from "vue";
import { onMounted, ref } from "vue";
import GoodItem from "@/components/GoodItem/GoodItem.vue";
import { getComprehensive, getRecommendByCategoryId } from "@/api/all";
import RefreshContainer from "@/components/RefreshContainer/RefreshContainer.vue";
import { goToOtherPage } from "@/utils";

const props = defineProps({
  category: {
    type: Object as PropType<ICategory>,
    default: () => ({}),
    readOnly: true
  }
});
// 页面数据
const image = ref<IGoodsDetails[]>([]);
// 获取当前分类页面
async function getRecommendByCategoryIdHandle() {
  const { data } = await getRecommendByCategoryId(props.category?.id);
  image.value = data;
}
onMounted(() => {
  getRecommendByCategoryIdHandle();
});
</script>

<style scoped lang="less"></style>
