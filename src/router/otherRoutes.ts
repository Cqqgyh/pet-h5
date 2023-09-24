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
    name: "Login",
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    meta: {
      title: "登录",
      noCache: true
    }
  },
  {
    name: "Search",
    path: "/search",
    component: () => import("@/views/search/search.vue"),
    meta: {
      title: "搜索",
      icon: "search",
      noCache: true
    }
  },
  {
    name: "SecondaryCategory",
    path: "/secondaryCategory",
    component: () => import("@/views/secondaryCategory/secondaryCategory.vue"),
    meta: {
      title: "推荐",
      noCache: true
    }
  },
  {
    name: "GoodsSeckillList",
    path: "/goodsSeckillList",
    component: () => import("@/views/goodsSeckillList/goodsSeckillList.vue"),
    meta: {
      title: "秒杀",
      noCache: true
    }
  },
  {
    name: "GoodsRankList",
    path: "/goodsRankList",
    component: () => import("@/views/goodsRankList/goodsRankList.vue"),
    meta: {
      title: "排行榜",
      noCache: true
    }
  },
  {
    name: "Category",
    path: "/category",
    component: () => import("@/views/category/category.vue"),
    meta: {
      title: "分类",
      noCache: true
    }
  },
  {
    name: "GoodsDetail",
    path: "/goodsDetail",
    component: () => import("@/views/goodsDetail/goodsDetail.vue"),
    meta: {
      title: "商品详情",
      noCache: true
    }
  }
];

export default routes;
