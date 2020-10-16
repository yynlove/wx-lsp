// pages/lsp/lsp.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
     array:[],
     lb:{
      indicatorDots:true,
      autoplay:true,
      interval:3000,
      duration:1000,
      imgUrls:[
        "/resource/images/lb-01.jpg",
        "/resource/images/lb-02.jpg",
        "/resource/images/lb-03.jpg",
        "/resource/images/lb-04.jpg"
      ]
     } 
    }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("111");
    var array = this.initData();
    this.setData({array:array});
  },


  initData:function(){
    console.log("111");
    var array =[];
    var object1 = new Object(); 
    object1.img ='/resource/images/dblh.jpg'; 
    object1.title ='我永远喜欢多宝六花'; 
    object1.type  ='多宝六花'; 
    object1.liulan ='20696浏览'; 
    object1.pinglun ='7评论';
    object1.id = 0; 
    array[0] = object1;
    var object2 = new Object(); 
    object2.img ='/resource/images/xtq.jpg'; 
    object2.title ='我永远喜欢新条茜的脚'; 
    object2.type  ='新条茜'; 
    object2.liulan ='20696浏览'; 
    object2.pinglun ='83评论';
    object2.id = 1; 
    array[1] = object2;

    var object3 = new Object(); 
    object3.img ='/resource/images/xtq.jpg'; 
    object3.title ='我永远喜欢新条茜的脚'; 
    object3.type  ='新条茜'; 
    object3.liulan ='20696浏览'; 
    object3.pinglun ='83评论';
    object3.id = 1; 
    array[2] = object3;

    var object3 = new Object(); 
    object3.img ='/resource/images/xtq.jpg'; 
    object3.title ='我永远喜欢新条茜的脚'; 
    object3.type  ='新条茜'; 
    object3.liulan ='20696浏览'; 
    object3.pinglun ='83评论';
    object3.id = 1; 
    array[3] = object3;

    var object4 = new Object(); 
    object4.img ='/resource/images/xtq.jpg'; 
    object4.title ='我永远喜欢新条茜的脚'; 
    object4.type  ='新条茜'; 
    object4.liulan ='20696浏览'; 
    object4.pinglun ='83评论';
    object4.id = 1; 
    array[4] = object4;

    return array;
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