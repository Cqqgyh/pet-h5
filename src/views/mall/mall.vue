<template>
  <van-search
    v-model="searchParams.keyword"
    shape="round"
    background="#4fc08d"
    placeholder="请输入搜索关键词"
  />
  <div class="main-container"></div>
</template>

<script setup lang="ts" name="Mall">
import { ref } from "vue";
const searchParams = ref({
  keyword: ""
});
</script>
<style lang="less" scoped></style>
