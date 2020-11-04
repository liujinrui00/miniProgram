// 获取手机号
// 发送请求，参数为Sessionkey,iv,encryptedData,获取到手机号，并将手机号存到缓存中
Page({
  getPhoneNumber(e) {
    // console.log(e);
    let SessionKey = wx.getStorageSync('session_key')
    wx.request({
      url: 'https://www.aescr.club/api/1.0/user/getphone',
      data: {
        SessionKey,
        IV: e.detail.iv,
        encryptedData: e.detail.encryptedData,
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result);
        wx.setStorageSync("phone", result.data.ResultData.phone);
        if (e.detail.errMsg == 'getPhoneNumber:ok') {
          let phone = wx.getStorageSync('phone')
          console.log(phone);
          let openid = wx.getStorageSync('openid')
          wx.request({
            url: 'https://www.aescr.club/api/1.0/user/authorize',
            data: {
              phone,
              openid
            },
            header: {openid},
            method: 'post',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
              console.log(result.data.ResultCode);
              if (result.data.ResultCode !== 200) {
                wx.showToast({
                  title: '抱歉,您不是内部员工无法进入小程序',
                });
              } else {
                wx.reLaunch({
                  url: '/pages/index/index',
                  success: (result) => {},
                });
              }  
            },
          }); 
        }
      },
    });
  }
})