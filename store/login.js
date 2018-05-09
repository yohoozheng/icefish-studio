export const state = () => ({
  isLogin: false,
  user: {},
  token:{}
})

export const mutations = {
  toLogin (state) {
    state.isLogin = true
  },
  toLogout(state){
    state.isLogin = false
  },
  setUser(state, user){
    state.use = user
  },
  setToken(state,token){
    state.token = token
  }
}

export const actions = {

  login({commit}){
    commit('toLogin')
  },

  logout({commit}){
    commit('toLogout')
  },

  setUser({commit},user){
    commit("setUser",user)
  },

  setToken({commit},token){
    commit("setToken",token)
  }

}


