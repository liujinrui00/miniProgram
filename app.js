App({
  globalData:{
      appid:'wx266fda23c38facf5',//appid
      secret:'d3b6d929d7e8cf37ca592ff25fc6a473',//secret
  },
  onLaunch: function () {
  //  var that = this
  //  var user=wx.getStorageSync('user') || {};  
  //  if((!user.openid)){ 
  //     wx.login({  
  //     success: function(res){ 
  //         if(res.code) {
  //             var d=that.globalData;//这里存储了appid、secret、token串  
  //             var l='https://api.weixin.qq.com/sns/jscode2session?appid='+d.appid+'&secret='+d.secret+'&js_code='+res.code+'&grant_type=authorization_code';  
  //             wx.request({  
  //                 url: l,  
  //                 data: {},  
  //                 method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
  //                 // header: {}, // 设置请求的 header  
  //                 success: function(res){ 
  //                   console.log(res);
  //                     var obj={};
  //                     obj.openid=res.data.openid;  
  //                     // console.log(openid);
  //                     obj.expires_in=Date.now()+res.data.expires_in;  
  //                     console.log(obj);
  //                     wx.setStorageSync('user', obj);//存储openid  
  //                 }  
  //             });
  //         }else {
  //             console.log('获取用户登录态失败！' + res.errMsg)
  //         }          
  //     }  
  //   }); 
  // } 
  var that = this
   var user=wx.getStorageSync('user') || {};  
   if((!user.openid)){ 
      wx.login({  
      success: function(res){ 
          if(res.code) {
              var d=that.globalData;//这里存储了appid、secret、token串  
              var l='http://192.168.2.228:3000/mock/88/api/1.0/user/wechatuserinfo?res.code';  
              wx.request({  
                  url: l,  
                  data: {},  
                  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
                  // header: {}, // 设置请求的 header  
                  success: function(res){ 
                    console.log(res);
                  }  
              });
          }else {
              console.log('获取用户登录态失败！' + res.errMsg)
          }          
      }  
    }); 
  } 
  // wx.login({
  //   success: (result) => {
  //   wx.request({
  //       url: 'http://192.168.2.228:3000/mock/88/api/1.0/user/wechatuserinfo',
  //       data: {},
  //       header: {'content-type':'application/json'},
  //       method: 'GET',
  //       dataType: 'json',
  //       responseType: 'text',
  //       success: (result) => {
  //         console.log(result);
  //       },
  //       fail: () => {},
  //       complete: () => {}
  //     });    
  //   },
  //   fail: (res) => {},
  //   complete: (res) => {},
  // })
 },
})