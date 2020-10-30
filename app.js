App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        console.log(res);
        if (res.code) {
          // var d=that.globalData;//这里存储了appid、secret、token串  
          wx.request({
            url: 'https://www.aescr.club/api/1.0/user/wechatuserinfo',
            data: {
              UserCode: res.code
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            header: {}, // 设置请求的 header  
            success: function (res) {
              console.log(res);
              const session_key = res.data.ResultData.result.session_key
              const openid = res.data.ResultData.result.openid
              const isstaff = res.data.ResultData.isstaff
              wx.setStorageSync('session_key', session_key)
              wx.setStorageSync('openid', openid)
              wx.setStorageSync('isstaff', isstaff)
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    var isstaff = wx.getStorageSync("isstaff");
    if (isstaff) {
      wx.reLaunch({
        url: '/pages/index/index',
        success: (result) => {
          // console.log("hfaslfjlasjl");
        },
      });
    } else {
      wx.navigateTo({
        url: 'pages/login/login',
      })
      // console.log("哈哈哈哈哈哈");    
    }


  },
})