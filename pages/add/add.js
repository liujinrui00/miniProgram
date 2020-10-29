// pages/add/add.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    autoSize: {
      maxHeight: 120,
      minHeight: 80
    },
  },
  formSubmit(e) {
    console.log(e)
    const openid = wx.getStorageSync('openid')
    console.log(openid);
    const d = e.detail.value
    console.log(d);
    wx.request({
      url: 'https://www.aescr.club/api/1.0/user/addclient',
      data: {
        d
      },
      header: openid,
      method: "POST",
      timeout: 0,
      success: (result) => {
        console.log(result);       
      },
      fail: (res) => {},
      complete: (res) => {},
    })
      
  },

})