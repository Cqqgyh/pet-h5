<template>
  <van-search
    v-model="searchParams.keyword"
    shape="round"
    show-action
    placeholder="请输入搜索关键词"
  >
    <template #action>
      <div @click="onSearchHandle">搜索</div>
    </template>
  </van-search>
  <van-tabs v-model:active="searchParams.sort" @click-tab="clickTabHandle">
    <van-tab :name="0"> <template #title>综合</template> </van-tab>
    <van-tab :name="1"> <template #title>销量</template> </van-tab>
    <van-tab :name="2">
      <template #title>
        <div>
          价格
          <van-icon :name="'arrow-up'" size="12" />
        </div>
      </template>
    </van-tab>
    <van-tab :name="3">
      <template #title>
        <div>
          价格
          <van-icon :name="'arrow-down'" size="12" />
        </div>
      </template>
    </van-tab>
  </van-tabs>
  <PullDownRefreshContainer
    :request="() => {}"
    ref="pullDownRefreshContainerRef"
    class="min-h-[70vh]"
  >
    <van-row class="pl-[10px]">
      <van-col span="12" v-for="item in [1, 2]" :key="item" @click="() => {}">
        <GoodItem></GoodItem>
      </van-col>
    </van-row>
  </PullDownRefreshContainer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PullDownRefreshContainer from "@/components/PullDownRefreshContainer/PullDownRefreshContainer.vue";
import type { TabProps } from "vant";
import GoodItem from "@/components/GoodItem/GoodItem.vue";
import bathImg from "@/assets/images/bath.png";
// 搜索参数
const searchParams = ref({
  keyword: "",
  //   排序规则 0:综合排序 1:销量排序 2:价格升序 3:价格降序
  sort: 0
});
// 点击标签
function clickTabHandle(param: TabProps) {
  searchParams.value.sort = param.name as number;
}
// 搜索
async function onSearchHandle() {

}
</script>
