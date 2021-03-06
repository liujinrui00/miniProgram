App({
  onLaunch: function () {
    
    wx.login({
      success: function (res) {
        console.log(res);
        if (res.code) {
          wx.request({
            url: 'https://www.aescr.club/api/1.0/user/wechatuserinfo',
            data: {
              UserCode: res.code
            },
            method: 'GET',
            header: {},
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
    }
  },
})