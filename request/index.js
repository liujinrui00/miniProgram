
// 同时发送异步代码的次数
let ajaxTimes=0;
export const request=(params)=>{

  // 判断 url中是否带有 /my/ 请求的是私有的路径 带上header token
  let header={...params.header};
  if(params.url.includes("/my/")){
    // 拼接header 带上token
    header["Authorization"]=wx.getStorageSync("token");
  }
  ajaxTimes++;
  //显示加载中效果
 wx.showLoading({
    title: "加载中",
    mask: true,
  });

  // // 定义公共的url
  //封装的request请求
  const baseUrl="https://www.easy-mock.com/mock/5f926e13288c725a6621003f/example";
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     header:header,
     url:baseUrl+params.url,
     timeout:3000,
     success:(result)=>{
      //  resolve(result.data.message);
        resolve(result)
     },
     fail:(err)=>{
       reject(err);
     },
    complete:()=>{
      ajaxTimes--;
      if(ajaxTimes===0){
        //关闭加载图图标
        wx.hideLoading();
      }   
    }
    });
  })
}