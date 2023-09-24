<template>
  <div class="user-container">
    <div class="user h-[30vh] flex flex-col justify-center items-center">
      <van-image
        @click="
          showImagePreview([userStore.userInfo?.avatarUrl || defaultAvatarUrl])
        "
        round
        width="30vw"
        height="30vw"
        :src="userStore.userInfo?.avatarUrl || defaultAvatarUrl"
      >
        <template v-slot:error>加载失败</template>
      </van-image>
      <div class="mt-[8px] font-bold text-[16px]">
        {{ userStore.userInfo?.nickname || "测试" }}
      </div>
    </div>
    <van-cell-group>
      <van-cell
        v-for="item in navList"
        :key="item.path"
        :title="item.name"
        is-link
        :to="item.path"
      />
    </van-cell-group>
    <div class="main-container flex justify-center mt-[150px]">
      <!--      退出登录-->
      <van-button type="primary" class="w-[50vw]" @click="logoutHandle"
        >退出登录</van-button
      >
    </div>
  </div>
</template>
<script setup lang="ts" name="UserCenter">
import { useUserStore } from "@/store/modules/user";
import { showImagePreview } from "vant";
import defaultAvatarUrl from "@/assets/logo.png";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
console.log("router.currentRoute.value.path", router);
const navList = ref([
  {
    icon: "",
    name: "测试导航1",
    path: "/"
  },
  {
    icon: "",
    name: "测试导航2",
    path: "/"
  },
  {
    icon: "",
    name: "测试导航3",
    path: ""
  },
  {
    icon: "",
    name: "测试导航4",
    path: ""
  }
]);
const userStore = useUserStore();
// 退出登陆
const logoutHandle = () => {
  userStore.Logout();
  // 清空路由浏览历史记录
  router.replace("/");
};
console.log(userStore);
onMounted(() => {
  // userStore.GetInfoAction();
});
</script>

<style scoped lang="less">
.user {
  background: var(--van-primary-background-color);
}
</style>
