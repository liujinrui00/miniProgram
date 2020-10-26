import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast  from '../../miniprogram_npm/@vant/weapp/toast/toast';
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

  showDialog(){
    Dialog.confirm({
      title: '添加客户',
      message: '是否确认添加客户',
    })
      .then(() => {
        // on confirm
        Toast.success('添加成功');
      })
      .catch(() => {
        // on cancel
      });
  }

})