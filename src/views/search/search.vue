<template>
  <van-sticky>
    <van-search
      v-model.trim="searchParams.keyword"
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
  </van-sticky>

  <PullDownRefreshContainer
    :request="getSearchInfoHandle"
    ref="pullDownRefreshContainerRef"
    class="min-h-[70vh]"
  >
    <van-row class="pl-[10px]">
      <van-col
        span="12"
        v-for="item in goodList"
        :key="item.id"
        @click="() => {}"
      >
        <GoodItem :data="item"></GoodItem>
      </van-col>
    </van-row>
  </PullDownRefreshContainer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PullDownRefreshContainer from "@/components/PullDownRefreshContainer/PullDownRefreshContainer.vue";
import type { TabProps } from "vant";
import GoodItem from "@/components/GoodItem/GoodItem.vue";
import { getSearchInfo } from "@/api/all";
import type { IGoodsDetails } from "@/api/all/types";
import type { ReqPage } from "@/api/types";
import { useRoute } from "vue-router";
const route = useRoute();
// 商品列表
const goodList = ref<IGoodsDetails[]>([]);
// 搜索参数
const searchParams = ref({
  keyword: "",
  categoryId: (route.query.categoryId as string)
    ? +(route.query.categoryId as unknown as string)
    : null,
  //   排序规则 0:综合排序 1:销量排序 2:价格升序 3:价格降序
  sort: 0
});
const pullDownRefreshContainerRef =
  ref<InstanceType<typeof PullDownRefreshContainer>>();
// 点击标签
function clickTabHandle(param: TabProps) {
  searchParams.value.sort = param.name as number;
  pullDownRefreshContainerRef.value?.onRefresh();
}
// 点击搜索
function onSearchHandle() {
  pullDownRefreshContainerRef.value?.onRefresh();
}
// 搜索
async function getSearchInfoHandle(pageInfo: ReqPage) {
  const { data } = await getSearchInfo({
    ...searchParams.value,
    ...pageInfo
  });
  if (pageInfo.current === 1) {
    console.log("data.records", data.records);
    goodList.value = data.records;
  } else {
    goodList.value = [...goodList.value, ...data.records];
  }
  pullDownRefreshContainerRef.value?.setFinished(
    goodList.value.length >= data.total
  );
}
</script>
