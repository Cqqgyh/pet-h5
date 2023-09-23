<template>
  <div>
    <van-pull-refresh
      v-bind="useAttrs()"
      v-model="loading"
      @refresh="onRefresh"
    >
      <slot>
        <van-empty ref="searchNotFoundRef" description="无更多内容" />
      </slot>
      <!--      分割-->
      <div class="h-[50px]"></div>
    </van-pull-refresh>
  </div>
</template>
<script setup lang="ts">
import { ref, useAttrs } from "vue";
const loading = ref(false);
const props = defineProps({
  onRefresh: {
    type: Function,
    default: () => ({})
  }
});
function onRefresh() {
  loading.value = true;
  props.onRefresh().finally(() => {
    loading.value = false;
  });
}
</script>

<style scoped lang="less"></style>
