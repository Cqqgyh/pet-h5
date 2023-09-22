import http from "@/utils/http/indexMock";
import type { IHomeInfo } from "@/api/all/types";
// import http from "@/utils/http";
/**
 * @description 获取数据字典接口
 * @param params
 */
export function getHomeInfo() {
  return http.get<IHomeInfo>(`/home`);
}
