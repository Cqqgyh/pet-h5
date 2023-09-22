<template>
  <div class="box" v-on-click-remove-or-add-class="['pink']"></div>
</template>

<script setup lang="ts" name="Service"></script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 200vh;
  background-color: red;
}
.pink {
  background-color: pink;
}
</style>
