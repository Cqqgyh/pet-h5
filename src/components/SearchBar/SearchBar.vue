<template>
  <van-search
    @click="goToOtherPage('/search')"
    shape="round"
    placeholder="请输入搜索关键词"
  />
</template>
<script setup lang="ts">
import { goToOtherPage } from "@/utils";
</script>

<style scoped lang="less"></style>
