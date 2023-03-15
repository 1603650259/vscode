import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'

// 引入swiper的css文件
import 'swiper/css/swiper.css'

// 引入表单验证
import '@/plugins/validate'

Vue.config.productionTip = false

// 引入全局组件
import Carousel from '@/components/Carousel'
import Typenav from '@/components/Typenav'
Vue.component(Carousel.name,Carousel)
Vue.component(Typenav.name,Typenav)

// mock模拟数据需要在入口文件引入一次
import '@/mock/mockServe'

import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
import videoPlayer from 'vue-video-player'
Vue.use(videoPlayer)

import * as API from '@/api'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$API=API
  },
  router,
  store
}).$mount('#app')
