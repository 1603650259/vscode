<template>
  <div class="hello">
    <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
    >
    </video-player>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      video: [],
      playerOptions: {
        // videojs options
        autoplay: false,
        muted: false,
        preload: "auto",
        language: "zh-CN",
        fluid: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // type: "application/x-mpegURL",
            src:'http://sp.720ku.net//upload/video/2019-10-12/5b20b4db-fb3c-4578-9d3c-46ffd588da69.mp4', // 路径
            
          },
        ],
        poster: this.cover_url, // 你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, // 全屏按钮
          currentTimeDisplay: true, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: true, // 暂停和播放键
          progressControl: true, // 进度条
        },
      },
      testData:{}
    };
  },
  props: {},
  mounted() {
    this.getData();
    this.test()
  },
  methods: {
    async getData() {
      let result = await this.$API.reqMockVideo();
      if (result.code == 200) {
        this.video = result.data;
      } else alert(result.message);
    },
    async test(){
      let result = await this.$API.reqRequest({username:'admin1',password:'123456'})
      // if(result.code==304){
        // this.testData = JSON.parse(result.data)
      // }
      this.testData = result
    }
  },
  computed:{
    srcc(){
      return this.video[0].imgUrl
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
