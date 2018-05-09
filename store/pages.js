export const state = () => ({
  home: "index",
})

export const mutations = {
  homeIndex (state,index) {
    state.home= index
  },

}

export const actions = {

  homeIndex({commit},index){
    commit('homeIndex',index)
  },


}
