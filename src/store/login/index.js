import { reqLogin, reqLogout,reqStandLogin } from "@/api"

const state={
    token:localStorage.getItem('token'),
    username:''
}
const mutations={
    USERLOGIN(state,data){
        state.token=data.token
        state.username=data.name
    },
    LOGOUT(state){
        state.token=''
        state.username=''
    },
    STANDLOGIN(state,data){
        state.username = data.username
    }
}
const actions={
    async userLogin({commit},data){
        let result = await reqLogin(data)
        if(result.status==0){
            localStorage.setItem('token',result.data.token)
            commit('USERLOGIN',result.data)
        }else return Promise.reject(new Error(result.message))
    },

    async logout({commit}){
        // let result = await reqLogout()
        let result=0
        if(result==0){
            commit('LOGOUT')
            localStorage.removeItem('token')
        }
    },

    async standLogin({commit}){
        let result = await reqStandLogin()
        if(result.status==0){
            commit('STANDLOGIN',result.data)
        }
    }
}
const getters={}

export default  {
    state,
    mutations,
    actions,
    getters
}