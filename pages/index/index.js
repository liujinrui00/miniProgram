// const { request } = require("../../request")
import {
  request
} from "../../request/index.js";

// pages/index/index.js
Page({
  data: {
      orders1:[], 
  },
  Status:1,
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
  },
  async getClientList(){
    const res = await request({
      url:"/getclientlist",
      data:{
        Status:this.Status,
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
      orders1:[...res.data.ResultData.List,...this.data.orders1]
    })
    console.log(this.data.orders1);
    //关闭下来刷新的窗口
    wx.stopPullDownRefresh()
  },
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