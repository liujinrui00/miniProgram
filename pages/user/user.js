// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },

  /**
   * 生命周期函数--监听页面显示
   */
  handleGetUserInfo(e){
       console.log(e);
      this.setData({
        userinfo:e.detail.userInfo
      })
  }
})