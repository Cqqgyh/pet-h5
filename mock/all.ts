import { resultSuccess } from "./_utils";

// mock/user.ts

const mockApiList = [
  // 获取用户信息
  {
    url: "/home",
    method: "get",
    response: (request: any) => {
      return resultSuccess({ a: 1, b: 2 });
    }
  }
];
export default mockApiList.map(item => {
  return {
    ...item,
    url: `/mock${item.url}`
  };
});
