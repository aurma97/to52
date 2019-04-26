import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: '/api/obtain_token',
      refreshJWT: '/api/refresh_token'
    }
  },
  mutations: {
    // auth_request(state){
    //   state.status = 'loading'
    // },
    // auth_success(state, token, user){
    //   state.status = 'success'
    //   state.token = token
    //   state.user = user
    // },
    // auth_error(state){
    //   state.status = 'error'
    // },
    // logout(state){
    //   state.status = ''
    //   state.token = ''
    // },
    updateToken(state, newToken){
      localStorage.setItem('t', newToken);
      state.jwt = newToken;
    },
    removeToken(state){
      localStorage.removeItem('t');
      state.status = ''
      state.jwt = null;
    }
  },
  actions: {
      // login({commit}, user){
      //   return new Promise((resolve, reject) => {
      //     commit('auth_request')
      //     axios({url: '/api/obtain_token', data: user, method: 'POST' })
      //     .then(resp => {
      //       const token = resp.data.token
      //       const user = resp.data.user
      //       localStorage.setItem('token', token)
      //       axios.defaults.headers.common['Authorization'] = token
      //       commit('auth_success', token, user)
      //       resolve(resp)
      //     })
      //     .catch(err => {
      //       commit('auth_error')
      //       localStorage.removeItem('token')
      //       reject(err)
      //     })
      //   })
      // },
      // logout({commit}){
      //   return new Promise((resolve, reject) => {
      //     commit('logout')
      //     localStorage.removeItem('token')
      //     delete axios.defaults.headers.common['Authorization']
      //     resolve()
      //   })
      // },
      obtainToken(username, password){
        const payload = {
          username: username,
          password: password
        }
        axios.post(this.state.endpoints.obtainJWT, payload)
          .then((response)=>{
              this.commit('updateToken', response.data.token);
            })
          .catch((error)=>{
              console.log(error);
            })
      },
      refreshToken(){
        const payload = {
          token: this.state.jwt
        }
        axios.post(this.state.endpoints.refreshJWT, payload)
          .then((response)=>{
              this.commit('updateToken', response.data.token)
            })
          .catch((error)=>{
              console.log(error)
            })
      },
      disconnect({commit}){
           return new Promise((resolve, reject) => {
           commit('removeToken')
           localStorage.removeItem('t')
           delete axios.defaults.headers.common['Authorization']
           resolve()
         })
      },

    inspectToken(){
      const token = this.state.jwt;
      if(token){
        const decoded = jwt_decode(token);
        const exp = decoded.exp
        const orig_iat = decode.orig_iat
        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
          this.dispatch('refreshToken')
        } else if (exp -(Date.now()/1000) < 1800){
          // DO NOTHING, DO NOT REFRESH          
        } else {
          // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        }
      }
    }
  },
  getters : {
    isLoggedIn: state => !!state.jwt,
//    isLoggedIn: state => !!state.token,
      authStatus: state => state.status,
    
  }
})