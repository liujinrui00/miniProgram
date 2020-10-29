// pages/login/login.js
Page({
getPhoneNumber(e){
  // console.log(e);
  let SessionKey = wx.getStorageSync('session_key')
   wx.request({
    url: 'https://www.aescr.club/api/1.0/user/getphone',
    data: {
      SessionKey,
      IV:e.detail.iv,
      encryptedData: e.detail.encryptedData,
    },
    header: {'content-type':'application/json'},
    method: 'post',
    dataType: 'json',
    responseType: 'text',
    success: (result) => {
      console.log(result);
      wx.setStorageSync("phone", result.data.ResultData.phone);       
    },
    fail: () => {},
    complete: () => {}
  });
    // console.log(e.detail.errMsg)
    if(e.detail.errMsg=='getPhoneNumber:ok')
    {
      let phone = wx.getStorageSync('phone')
      let openid = wx.getStorageSync('openid')
      wx.showToast({
        title: '授权成功',
        icon: 'none',
        image: '',
        duration: 3000,
        mask: false,
        success: (result) => {          
        },
      });     
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
          console.log(result);
          wx.reLaunch({
            url: '/pages/index/index',
            success: (result) => {             
            },
          });                   
        },
      });
        
    }

}
})
