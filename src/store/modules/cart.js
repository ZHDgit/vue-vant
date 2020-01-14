
const state = {
  carts: []
}
// actions
const actions = {
  addCart({ commit, state }, {id, number}) {
    if (localStorage.carts) {
      state.carts = JSON.parse(localStorage.carts)
    }
    if(state.carts.length === 0){
      let data = JSON.parse(localStorage.goodsData)[id-1]
      if(number){
        data.number = number
      }
      state.carts.push(data)
      localStorage.carts = JSON.stringify(state.carts)
    } else {
      commit('ADD_CART', {id, number})
    }
  }
}
// mutations
const mutations = {
  ADD_CART(state, {id, number}) {
    let goodsData = JSON.parse(localStorage.carts)
    let judge = goodsData.find(n=> n.id === Number(id))
    if(!judge){
      goodsData.push(JSON.parse(localStorage.goodsData).find(n=> n.id === id))
    } else {
      goodsData.find(n=> n.id === Number(id)).number += number
    }
    state.carts = goodsData
    localStorage.carts = JSON.stringify(state.carts)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
