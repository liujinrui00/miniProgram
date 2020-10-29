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