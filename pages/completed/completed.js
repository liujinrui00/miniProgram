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
    // orders1:[{
    //   order_number:1,
    //   order_price:1000,
    //   create_time_cn:2020-10-21
    // },
    // {
    //   order_number:2,
    //   order_price:1000,
    //   create_time_cn:2020/10/21
    // },
    // {
    //   order_number:3,
    //   order_price:1000,
    //   create_time_cn:2020/10/21
    // },
    // {
    //   order_number:4,
    //   order_price:1000,
    //   create_time_cn:2020/10/21
    // }],
    // orders2:[{
    //   order_number:1,
    //   order_price:1000,
    //   create_time_cn:1546416481315616
    // },
    // {
    //   order_number:2,
    //   order_price:1000,
    //   create_time_cn:1546416481315616
    // },
    // {
    //   order_number:3,
    //   order_price:1000,
    //   create_time_cn:1546416481315616
    // },
    // {
    //   order_number:4,
    //   order_price:1000,
    //   create_time_cn:1546416481315616
    // }],
    orders1:[],

  },
  onLoad:function(){
    this.getIndex1()
  },
  // async getIndex1(){
  //   const res = await request({
  //     url:"/mock1"
  //   })
  //   console.log(res.data.data);
  //   this.setData({
  //     orders1:res.data.data,    
  //   })
  // },
  navClick(){
    console.log("AESCR")
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  }
})