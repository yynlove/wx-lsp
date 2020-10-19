// pages/login/mobile/mobile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true, 
    btnstate:"default", 
    code:"",
    account:"",
    password:"",
    mobile:"",
    checkPasswordSuc:true
  },





  inputedit: function(e) {
    // 1. input 和 info 双向数据绑定
    // console.log(e);
    // let dataset = e.currentTarget.id;
    // //data-开头的是自定义属性，可以通过dataset获取到，dataset是一个json对象，有obj和item属性，可以通过这两个实现双向数据绑定，通过更改这两个值，对不同name的变量赋值
    // let value = e.detail.value;
    // this.data[dataset] = value;
    // this.setData({
    //   dataset: this.data[dataset]
    // });

    if(this.data.mobile!="" && this.data.code!=""){
      this.setData({disabled:false, btnstate:"primary"});
    }else{
      this.setData({ disabled:true, btnstate:"default"}); 
    } 
  },


  // inputCheckPassword:function(e){
  //   console.log("checkPassword",e);
  //   checkPasswordSuc = false;
  //   // if(this.data.password === ){
  //   //   checkPasswordSuc = true;
  //   // }else{
  //   //   checkPasswordSuc = false;
  //   // }
  // },

  formSubmit:function(e){
    console.log("e",e);
    var user = new Object();
    user.account = e.detail.value.account;
    user.password = e.detail.value.password;
    user.mobile = e.detail.value.mobile;
    console.log("user",user);
    // wx.setStorageSync('user', user);
    // wx.showToast({ title:"注册成功", icon:"success", duration: 5000, success:function(){
    //     wx.navigateBack({
    //       delta: 0,
    //     })
    //   } 
    // });
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
     
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})