import http from "@/utils/http/indexMock";
// import http from "@/utils/http";
import type {
  ICategory,
  IComprehensive,
  IGoodsDetails,
  IHomeInfo,
  ISearchParams,
  IServiceCategory
} from "@/api/all/types";
import type { PageRes } from "@/api/types";
/**
 * @description 获取数据字典接口
 * @param params
 */
export function getHomeInfo() {
  return http.get<IHomeInfo>(`/home`);
}

/**
 * @description 搜索商品
 * @param params
 */
export function getSearchInfo(params: ISearchParams) {
  return http.post<PageRes<IGoodsDetails>>(`/search`, params);
}
/**
 * @description 获取商品类比列表
 */
export function getCategoryList() {
  return http.get<ICategory[]>(`/category`);
}

/**
 * @description 获取综合页面
 */
export function getComprehensive() {
  return http.get<IComprehensive>(`/comprehensive`);
}

/**
 * @description 根据分类id获取推荐商品
 * @param id
 */
export function getRecommendByCategoryId(id: number) {
  return http.get<IGoodsDetails[]>(`/recommend/${id}`);
}

/**
 * @description 获取秒杀商品列表
 */
export function getSeckillList() {
  return http.get<IGoodsDetails[]>(`/seckill`);
}

/**
 * @description 获取商品排行列表
 */
export function getGoodsRankingList() {
  return http.get<IGoodsDetails[]>(`/goodsRanking`);
}
/**
 * @description 获取服务页面种类列表
 */
export function getServiceList() {
  return http.get<IServiceCategory[]>(`/serviceList`);
}

/**
 * @description 根据商品id获取商品详情
 * @param id
 */
export function getGoodsDetailById(id: number) {
  return http.get<IGoodsDetails>(`/goodsDetail/${id}`);
}
