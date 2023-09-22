// 数据字典接口
export interface IHomeInfo {
  swiperList: ISwiperListItem[];
  navList: INavListItem[];
  advertisement: IAdvertisementItem[];
  active: IActiveItem[];
}
export interface ISwiperListItem {
  id: number;
  imgUrl: string;
  link: string;
}
export interface INavListItem {
  id: number;
  imgUrl: string;
  link: string;
  title: string;
  desc: string;
}
export interface IAdvertisementItem {
  id: number;
  imgUrl: string;
  link: string;
}
export interface IActiveItem {
  id: number;
  imgUrl: string;
  link: string;
}
export interface IGoodsDetails {
  id: number;
  price: number;
  title: string;
  desc: string;
  image: string;
}
export interface ISearchParams {
  keyword: string;
  //   排序规则 0:综合排序 1:销量排序 2:价格升序 3:价格降序
  sort: number;
}
