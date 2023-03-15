// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Login from '@/views/login'
import Home from '@/views/home'
import Register from '@/views/Register'

// 获取原始路由方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve  && reject){
        originPush.call(this,location,resolve,reject)
    }
    else originPush.call(this,location,()=>{},()=>{})
}

// 配置路由
const router = new VueRouter({
    base:'/my_app/',
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:true}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})

export default router