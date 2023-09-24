import { defineStore } from "pinia";
import type {
  loginQueryInterface,
  UserInfoInterface,
  UserStateInterface
} from "@/api/user/types";
import { getUserInfo, login } from "@/api/user";
import { removeToken, setToken } from "@/utils/token";

export const useApp = defineStore({
  id: "app-app",
  state: () => ({
    tabBarInfo: {
      height: 0
    }
  }),
  actions: {
    //   设置底部导航条高度
    setBottomTabBarInfo(tabBarInfo: typeof this.tabBarInfo) {
      this.tabBarInfo = tabBarInfo;
    }
  },
  // 设置为true，缓存state
  persist: true
});
