import http from "@/utils/http/indexMock";
import type {
  ICategory,
  IComprehensive,
  IGoodsDetails,
  IHomeInfo,
  ISearchParams
} from "@/api/all/types";
import type { PageRes } from "@/api/types";
// import http from "@/utils/http";
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
