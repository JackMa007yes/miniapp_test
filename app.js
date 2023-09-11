App({
  onLaunch(options) {
    this.createAudio();
  },
  onShow(options) {
    this.audioInstance && this.audioInstance.play();
  },
  onHide() {},

  /**
   * 背景音乐
   */
  audioInstance: null,
  /** instance的pause 一直是undefined，所以自己记录状态 */
  isPause: false,

  createAudio() {
    this.audioInstance = my.createInnerAudioContext();
    this.audioInstance.src =
      "https://impassets-newer.oss-cn-qingdao.aliyuncs.com/disney/bgm/bgm-1.mp3";
    this.audioInstance.autoplay = true;
    this.audioInstance.loop = true;
    this.audioInstance.play();
  },

  toggleAudio() {
    if (!this.audioInstance) return;
    if (this.isPause) {
      this.audioInstance.play();
      this.isPause = false;
    } else {
      this.audioInstance.pause();
      this.isPause = true;
    }
  },
});
