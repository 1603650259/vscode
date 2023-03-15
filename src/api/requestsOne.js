import axios from 'axios'
import nprogress from 'nprogress'
import store from '../store'
// 引入进度条的样式
import 'nprogress/nprogress.css'
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现api
    baseURL:'/admin',
    // 代表请求超时的时间5s
    timeout:5000
});
// 请求拦截器，在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start();
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    if(store.state.login.token){
        config.headers.Authorization=`Bearer ${store.state.login.token}`
        config.headers.token = store.state.login.token
    }
    return config;
});
// 响应拦截器
requests.interceptors.response.use(
    (res)=>{
        // 进度条结束
        nprogress.done();
        // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
        return res.data;
    },(error)=>{
        // 响应失败的回调函数
        return Promise.reject(new Error('faile'))
    }
)

// 对外暴露
export default requests;