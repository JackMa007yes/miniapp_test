Page({
  onLoad(query) {
    this.setData({
      from: query.from,
    });
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  data: {},
  /**
   * 开始游戏
   */
  start() {
    this.setData({
      inGame: true,
    });
  },
  toggleBgm() {
    const app = getApp();
    app.toggleAudio();
  },
  toEmpty() {
    my.navigateTo({ url: "/pages/empty/empty" });
  },
});
