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
