// const { request } = require("../../request")
import {
  request
} from "../../request/index.js";

// pages/index/index.js
Page({
  data: {
      ordersList:[],     
  },
  Status1:1,
  Status2:2,
  // 页大小
  pageSize:10,
  //总数
  count:0,
  //当前页
  curPage:1,  
  //总页数，默认为1
  totalPages:1,
  onLoad:function(){
    this.getClientList()
    // this.getClientList1()
  },

  // 获取 跟进 项目详情
  async getClientList(){
    const res = await request({
      url:"/getclientlist",
      data:{
        Status:this.Status1,
        pageSize:this.pageSize,
        count:this.count,
        curPage:this.curPage,
      },
      method:"POST"
    })
    console.log(res);
    //总条数
    const total = res.data.ResultCount
    console.log(total);
    //计算总页数
    this.totalPages = Math.ceil(total / this.pageSize);
    console.log( this.totalPages);
    this.setData({
      ordersList:[...res.data.ResultData.List,...this.data.ordersList]
    })
  
    //关闭下来刷新的窗口
    wx.stopPullDownRefresh()
  },
  async onClick(e){
    console.log(e);
    const {index} = e.detail
    console.log(index+1);
    const openid = wx.getStorageSync("openid")
   
    //  const res = await request({
    //   url:"/getclientlist",
    //   data:{
    //     Status:this.Status2,
    //     pageSize:this.pageSize,
    //     count:this.count,
    //     curPage:this.curPage,
    //   },
    //   method:"POST"
    // })
    wx.request({
      url: 'https://www.aescr.club/api/1.0/user/getclientlist',
      data: {
        Status:index+1,
        pageSize:this.pageSize,
        count:this.count,
        curPage:this.curPage,
      },
      header: {"openid":openid},
      method: 'POST',
      success: (result) => {
        this.setData({
          ordersList:result.data.ResultData.List
        })
      },
    });
    
    
      
  },
  //  async getClientList1(){
  //   const res = await request({
  //     url:"/getclientlist",
  //     data:{
  //       Status:this.Status2,
  //       pageSize:this.pageSize,
  //       count:this.count,
  //       curPage:this.curPage,
  //     },
  //     method:"POST"
  //   })
  //   console.log(res);
  //   //总条数
  //   const total = res.data.ResultCount
  //   console.log(total);
  //   //计算总页数
  //   this.totalPages = Math.ceil(total / this.pageSize);
  //   console.log( this.totalPages);
  //   this.setData({
  //     orders2:[...res.data.ResultData.List,...this.data.orders2]
  //   })
  //   console.log(this.data.orders2);
  //   //关闭下来刷新的窗口
  //   wx.stopPullDownRefresh()
  //   console.log(e);
  // },
  //跳转到详情页
  navClick(event){
    var id=event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
    //页面触底函数
  onReachBottom() {
    //判断是否还有下一页数据
    if (this.curPage >= this.totalPages) {
      //没有下一页数据了
      // console.log("没有了");
      wx.showToast({title: '没有数据了'});
    } else {
      //还有数据
      // console.log("还是有数据");
      this.curPage++;
      this.getClientList()
    }
  },

//下拉刷新
  onPullDownRefresh(){
    //1重置数组
    this.setData({
      orders1:[]
    })
    //2 重置页码
    this.curPage=1;
    //3 发送请求
    this.getClientList();
  }

})