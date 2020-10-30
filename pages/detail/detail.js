import {
  request
} from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    Model:{},
    DemandList:[],
    activeName: '1',
  },
  onShow:function(){
    let pages =  getCurrentPages();
    // console.log(pages);
    let currentPages = pages[pages.length-1];
   // console.log(currentPages);
    let options=currentPages.options;
    // const {Clientid} = options;
    this.getDetails(options.id)
  },
  // getDetails(id){
  //   console.log(id)
  //   const res = request({
  //     url:'/getdetails?Clientid='+id,
  //   }).then((data)=>{
  //      this.setData({
  //       detail:res.data.data
  //   })
  //     console.log(data)
  //   }).error((err)=>{
  //     console.log(err)
  //   });
  //   console.log(res);
  // }, 
  // 获取项目详情
  async getDetails(id){
    const res = await request({
      url:'/getdetails?Clientid='+id
    })
    console.log(res);
    this.setData({
      Model:res.data.ResultData.Model
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  // 点击需求跟进按钮
  async handelfollow(e){
    const id = e.currentTarget.dataset.id
    const openid = wx.getStorageSync("openid")
    console.log(openid);
    console.log(id);
    const res = await request({
      url:"/addfollow",
      data:{
        id,
        openid,
        // NewDemand,
        // Feedback
      }
    })
  }
})