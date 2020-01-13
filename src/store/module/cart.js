
const state = {
  carts: []
}
// actions
const actions = {
  addCart({ commit, state }, id){
    if(state.carts.length !== 0){
      state.carts.push(JSON.parse(localStorage.goodsData)[id-1])
      localStorage.carts = JSON.stringify(state.carts)
    } else {
      commit('ADD_CART', id)
    }
  }
}
// mutations
const mutations = {
  ADD_CART(state, id){
    let goodsData = JSON.parse(localStorage.goodsData)
    goodsData.forEach(item => {
      if (item.id === id) {
        item.number++
        state.carts.push(item)
        localStorage.carts = JSON.stringify(state.carts)
      }
    })
  }
}
export default {
  state,
  actions,
  mutations
}
