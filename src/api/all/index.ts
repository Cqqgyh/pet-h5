import http from "@/utils/http/indexMock";
import type { IGoodsDetails, IHomeInfo, ISearchParams } from "@/api/all/types";
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
