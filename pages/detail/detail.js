import {
  request
} from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    autoSize: {
      maxHeight: 120,
      minHeight: 80
    },
    Model:{},
    DemandList:[],
    // activeName: '1',
    show:false,
    form:{
      NewDemand:'',
      Feedback:''
    }

  },
  onLoad:function(){
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
      Model:res.data.ResultData.Model,
      DemandList:res.data.ResultData.DemandList,
    })
  },

  // 手风琴事件
  onChange(event) {
    let index=event.currentTarget.dataset.index;
    let daset= this.data.DemandList;
    daset[index].activeName= event.detail;
    this.setData({
      DemandList: daset,
    });
  },
  // 点击需求跟进按钮
 handelfollow(e){
    // console.log(e);
    const clientid = e.currentTarget.dataset.id
    wx.setStorageSync("clientid",clientid)
    const btnid = e.currentTarget.id
    wx.setStorageSync("btnid",btnid)
    // const openid = wx.getStorageSync("openid")
    // // console.log(openid);
    // // console.log(id);
    // const res = await request({
    //   url:"/addfollow",
    //   data:{
    //     clientid,
    //     openid,
    //     NewDemand:btnid
    //     // Feedback
    //   },
    //   method:"post"
    // })
    // console.log(res)
    this.setData({
      show:true
    })
  },

  // 提交需求和反馈
  async formSubmit(e){
    const clientid = wx.getStorageSync("clientid")
    // const btnid = wx.getStorageSync("btnid")
    const openid = wx.getStorageSync("openid")
    const NewDemand = e.detail.value.NewDemand
    const Feedback = e.detail.value.Feedback
    console.log(NewDemand);
    console.log(Feedback);
    console.log(openid);
    // console.log(id);
    const res = await request({
      url:"/addfollow",
      data:{
        clientid,
        openid,
        NewDemand,
        Feedback,
      },
      method:"post"
    })
    console.log(res)
    // console.log(e);
    // 请求成功后，关闭弹窗，清空输入框
    this.setData({
      show:false,
      form:''
    })
    this.getDetails(clientid)
  },

  // 点击取消关闭添加框
  handlecancle(){
    this.setData({
      show:false,
    })
  }
})