import type { RouteRecordRaw } from "vue-router";

/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标，只有tabBar菜单才需要配置
 * @param meta.title ==> 菜单标题
 * @param meta.noCache ==> 是否不缓存，默认开启组件缓存，需要vue组件中配置name属性和路由菜单别名一致
 * @param meta.isShowNavBar ==> 是否展示顶部导航栏，默认不展示
 * */
const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/home",
    component: () => import("@/views/home/home.vue"),
    meta: {
      title: "首页",
      icon: "home-o"
    }
  },
  {
    name: "Mall",
    path: "/mall",
    component: () => import("@/views/mall/mall.vue"),
    meta: {
      title: "商城",
      icon: "shopping-cart-o"
    }
  },
  {
    name: "Service",
    path: "/service",
    component: () => import("@/views/service/service.vue"),
    meta: {
      title: "服务",
      icon: "shop-o"
    }
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("@/views/order/order.vue"),
    meta: {
      title: "订单",
      icon: "comment-o"
    }
  },
  {
    path: "/userCenter",
    name: "UserCenter",
    component: () => import("@/views/userCenter/userCenter.vue"),
    meta: {
      title: "我的",
      icon: "user-o",
      isShowNavBar: true
    }
  }
];

export default routes;
