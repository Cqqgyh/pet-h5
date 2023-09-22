<template>
  <div class="main-container">
    <PullDownRefreshContainer
      :request="() => {}"
      ref="pullDownRefreshContainerRef"
      class="min-h-[70vh]"
    >
    </PullDownRefreshContainer>
  </div>
</template>

<script setup lang="ts" name="Home">
import { ref } from "vue";
import PullDownRefreshContainer from "@/components/PullDownRefreshContainer/PullDownRefreshContainer.vue";
import { getHomeInfo } from "@/api/all";
const pullDownRefreshContainerRef =
  ref<InstanceType<typeof PullDownRefreshContainer>>();
getHomeInfo().then(res => {
  console.log(res);
});
// 房间列表
</script>
