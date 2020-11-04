// pages/add/add.js
import {request} from "../../request/index.js";
import wxValidate from "../../utils/wxValidate"
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    autoSize: {
      maxHeight: 120,
      minHeight: 80
    },
    form:{
      CompanyAddress:'',
      ContactPerson:'',
      ContactDetails:'',
      CustomerSource:'',
      SourceMethod:'',
      ProductType:'',
    }
  },
  onLoad:function(){
    this.initValidata()
  },

  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  initValidata(){
    const rules = {
      CompanyAddress:{
        required:true,
      },
      ContactPerson:{
        required:true,
        maxlength:5
      },
      ContactDetails:{
        required:true,
        tel:true
      },
      CustomerSource:{
        required:true,
      },
      SourceMethod:{
        required:true,
      },
      ProductType:{
        required:true,
      },
    }
    const message = {
      CompanyAddress:{
        required: '请填写公司地址',
      },
      ContactPerson:{
        required:"请输入联系人",
      },
      ContactDetails:{
        required:"请输入手机号",
        tel:'请输入正确的手机号'
      },
      CustomerSource:{
        required:"请输入客户来源",

      },
      SourceMethod:{
        required:"请输入来源方式",

      },
      ProductType:{
        required:"请输入产品类型",
      },
    }
    this.wxValidate = new wxValidate(rules,message)
  },
  //表单提交
  async formSubmit(e) {
    // console.log(e)
    const openid = wx.getStorageSync('openid')
    // console.log(openid);
    const d = e.detail.value
    if(!this.wxValidate.checkForm(d)){
      const error = this.wxValidate.errorList[0]  
      this.showModal(error)
    }else{
      const openid = wx.getStorageSync('openid')
      const res = await request({
        url: "/addclient",
        data: {
          CompanyAddress: d.CompanyAddress,
          ContactPerson: d.ContactPerson,
          ContactDetails: d.ContactDetails,
          CustomerSource: d.CustomerSource,
          SourceMethod: d.SourceMethod,
          ProductType: d.ProductType,
          BasicNeeds: d.BasicNeeds
        },
        method: "post",
        header:{'openid':openid}
      })
      // console.log(res);     
      if (res.data.ResultCode == 200) {
        Toast.success("添加成功")
      }
      this.setData({
        form:''
      })
    }
  },

})