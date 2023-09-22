import { resultSuccess } from "./_utils";

// mock/user.ts

const mockApiList = [
  // 获取首页信息
  {
    url: "/home",
    method: "get",
    response: (request: any) => {
      return resultSuccess({
        //   轮播
        swiperList: [
          {
            id: 1,
            imgUrl: "",
            link: ""
          },
          {
            id: 2,
            imgUrl: "",
            link: ""
          },
          {
            id: 3,
            imgUrl: "",
            link: ""
          }
        ],
        //   导航区
        navList: [
          {
            id: 1,
            imgUrl: "",
            link: "",
            title: "E卡",
            desc: "送2166元"
          },
          {
            id: 2,
            imgUrl: "",
            link: "",
            title: "大牌主粮",
            desc: "第二件半价"
          },
          {
            id: 3,
            imgUrl: "",
            link: "",
            title: "快速预约",
            desc: "优秀美容师"
          },
          {
            id: 4,
            imgUrl: "",
            link: "",
            title: "全部门店",
            desc: "查找门店预约"
          }
        ],
        //   广告区
        advertisement: [
          {
            id: 1,
            imgUrl: "",
            link: ""
          }
        ],
        // 活动
        active: [
          {
            id: 1,
            imgUrl: "",
            link: ""
          },
          {
            id: 2,
            imgUrl: "",
            link: ""
          },
          {
            id: 3,
            imgUrl: "",
            link: ""
          }
        ]
      });
    }
  }
];
export default mockApiList.map(item => {
  return {
    ...item,
    url: `/mock${item.url}`
  };
});
