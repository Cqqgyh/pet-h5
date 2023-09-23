import { resultSuccess } from "./_utils";
import Mock from "mockjs";
import type { ISearchParams } from "@/api/all/types";

// mock/user.ts

const mockApiList = [
  // 获取首页信息
  {
    url: "/home",
    method: "get",
    response: (request: any) => {
      return resultSuccess(
        Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          // id: 1,
          // imgUrl: "",
          // link: ""
          "swiperList|8": [
            {
              "id|+1": 1,
              link: "",
              imgUrl: "@image(2058x900)"
            }
          ],
          "navList|8": [
            {
              "id|+1": 1,
              imgUrl: "@image(50x50)",
              link: "",
              title: "@ctitle(2, 4)",
              desc: "@ctitle(4, 6)"
            }
          ],
          "advertisement|1-3": [
            {
              "id|+1": 1,
              imgUrl: "@image(600x150)",
              link: ""
            }
          ],
          "active|1-3": [
            {
              "id|+1": 1,
              imgUrl: "@image(600x150)",
              link: ""
            }
          ]
        })
      );
    }
  },
  // 搜索
  {
    url: "/search",
    method: "post",
    response: (request: any) => {
      const body: ISearchParams = request.body;
      // //   排序规则 0:综合排序 1:销量排序 2:价格升序 3:价格降序
      const { keyword, current, sort, size } = body;
      return resultSuccess(
        Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          "records|10": [
            {
              // id: number;
              // price: number;
              // title: string;
              // desc: string;
              // image: string;
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              "id|+1": current,
              // 价格升序
              price: "@integer(60, 100)",
              title: "@ctitle(5, 10)",
              desc: "@ctitle(10, 20)",
              image: "@image(200x200)"
            }
          ],
          // 当前页
          current: current,
          // 每页显示条数
          size: size,
          total: 40
        })
      );
    }
  }
];
export default mockApiList.map(item => {
  return {
    ...item,
    url: `/mock${item.url}`
  };
});
