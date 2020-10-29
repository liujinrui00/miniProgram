// const { request } = require("../../request")
import {
  request
} from "../../request/index.js";

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders1:[{
      natural:1,
      address:1000,
      date:2020-10-21
    },
    {
      natural:1,
      address:1000,
      date:2020-10-21
    },
    {
      natural:1,
      address:1000,
      date:2020-10-21
    },
    {
      natural:1,
      address:1000,
      date:2020-10-21
    }],
    orders2:[{
      order_number:1,
      order_price:1000,
      create_time_cn:1546416481315616
    },
    {
      order_number:2,
      order_price:1000,
      create_time_cn:1546416481315616
    },
    {
      order_number:3,
      order_price:1000,
      create_time_cn:1546416481315616
    },
    {
      order_number:4,
      order_price:1000,
      create_time_cn:1546416481315616
    }],
    // orders1:[],

  },
// onShow:function(){
//   wx.login({
//       success: function (res) {
//         console.log(res);
//         if (res.code) {
//           // var d=that.globalData;//这里存储了appid、secret、token串  
//           wx.request({
//             url: 'https://www.aescr.club/api/1.0/user/wechatuserinfo',
//             data: {
//               UserCode: res.code
//             },
//             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//             header: {}, // 设置请求的 header  
//             success: function (res) {
//               console.log(res);
//               const session_key = res.data.ResultData.result.session_key
//               const openid = res.data.ResultData.result.openid
//               const isstaff = res.data.ResultData.isstaff
//               wx.setStorageSync('session_key', session_key)
//               wx.setStorageSync('openid', openid)
//               if (isstaff) {
//                 wx.reLaunch({
//                   url: '/pages/login/login',
//                   success: (result) => {
//                     console.log("hfaslfjlasjl");
//                   },
//                   fail: () => {},
//                   complete: () => {}
//                 });
//               } else {    
//               }
//             }
//           });
//         } else {
//           console.log('获取用户登录态失败！' + res.errMsg)
//         }
//       }
//     });
//   },
  navClick(){
    console.log("AESCR")
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

})