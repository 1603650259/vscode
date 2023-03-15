import mockAjax from './mockAjax'
import requests from './requestsAjax'
import requestsone from './requestsOne'
export const reqMockVideo = ()=>{
    return mockAjax({
        url:'/video',
        method:'get'
    })
}

// 注册用户
export const reqRegister = (data)=>{
    return requests({
        url:'/register',
        method:'post',
        data
    })
}

// 获取验证码
export const reqGetcode = (username)=>{
    return requests({
        url:`/getcode/${username}`,
        method:'get'
    })
}

// 登录
export const reqLogin = (data)=>{
    return requests({
        url:'/login',
        method:'post',
        data
    })
}

// 退出登录
export const reqLogout = ()=>{
    return requests({
        url:'/logout',
        method:'get'
    })
}

// 获取轮播图照片
export const reqGetPhoto = ()=>{
    return requests({
        url:'getphoto',
        method:'get'
    })
}

// 获得保持登录
export const reqStandLogin = ()=>{
    return requestsone({
        url:'stand',
        method:'get'
    })
}

// 获取个人信息
export const reqGetuserinfo =()=>{
    return requestsone({
        url:'getuserinfo',
        method:'get'
    })
}