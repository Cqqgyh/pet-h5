<template>
  <van-tabbar
    v-show="isShowTabBar"
    v-model="active"
    :placeholder="true"
    :route="true"
    fixed
    ref="tabbarRef"
  >
    <van-tabbar-item
      v-for="(item, index) in tabBarData"
      :key="index"
      :icon="item?.icon as string"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import tabBarRoutes from "@/router/tabBarRoutes";
import { useRoute } from "vue-router";
import { useApp } from "@/store/modules/useApp";

const route = useRoute();
console.log(route);
const active = ref(0);
// const tabBarData = reactive([
//   {
//     icon: "search",
//     title: "找房",
//     to: {
//       path: "/search"
//     }
//   },
//   {
//     icon: "star-o",
//     title: "圈子",
//     to: {
//       path: "/group"
//     }
//   },
//   {
//     icon: "home-o",
//     title: "我的房间",
//     to: {
//       path: "/myRoom"
//     }
//   },
//   {
//     icon: "comment-o",
//     title: "消息",
//     to: {
//       path: "/message"
//     }
//   },
//   {
//     icon: "user-o",
//     title: "个人中心",
//     to: {
//       path: "/userCenter"
//     }
//   }
//   // {
//   //   icon: "user-o",
//   //   title: "关于",
//   //   to: {
//   //     path: "/about"
//   //   }
//   // }
// ]);
const tabBarData = computed(() => {
  return tabBarRoutes.map(item => {
    return {
      icon: item.meta?.icon,
      title: item.meta?.title,
      to: {
        path: item.path
      }
    };
  });
});
const isShowTabBar = computed(() => {
  return tabBarRoutes.some(item => item.path === route.path);
});

const tabbarRef = ref();
watch(tabbarRef, () => {
  setTimeout(() => {
    useApp().setBottomTabBarInfo({
      height: tabbarRef.value?.$el.clientHeight || 0
    });
  }, 10);
});
</script>
