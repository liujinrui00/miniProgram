import {
  request
} from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // orders:[{
    //   order_number:1,
    //   order_price:1000,
    //   create_time_cn:2020/10/21
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
    orders:[],
    isdisplay:true
  },
  onLoad:function (options) {
    // 能用
    // wx.request({
    //   url: 'https://www.easy-mock.com/mock/5f926e13288c725a6621003f/example/mock',
    //   data: {},
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (result) => {
    //     console.log(result);
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
      this.getOrders();
  },
  async getOrders(){
    const res = await request({
      url:'/mock',
    })
  //  console.log(res);
    this.setData({
      orders:res.data.projects
    })
  }, 
})