<template>
  <van-search
    v-model="searchParams.keyword"
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜索关键词"
  />
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
// 地区选择
.checked {
  color: var(--van-primary-color);
}

// 价格选择
.other-checked {
  background-color: var(--van-primary-color);
  color: var(--van-white);
}
</style>
