import http from "@/utils/http/indexMock";
// import http from "@/utils/http";
/**
 * @description 获取数据字典接口
 * @param params
 */
export function getHomeInfo() {
  return http.get<any>(`/home`);
}
