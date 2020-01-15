
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
  },
  deleteCart({ commit, state }, id) {
    commit('DELETE_CART', id)
  }
}
// mutations
const mutations = {
  ADD_CART(state, {id, number}) {
    let goodsData = JSON.parse(localStorage.carts)
    let judge = goodsData.find(n=> n.id === Number(id))
    if(!judge){
      let data = JSON.parse(localStorage.goodsData).find(n=> n.id === Number(id))
      data.number += number
      goodsData.push(data)
    } else {
      goodsData.find(n=> n.id === Number(id)).number += number
    }
    state.carts = goodsData
    localStorage.carts = JSON.stringify(state.carts)
  },
  DELETE_CART(state, id) {
    let goodsData = JSON.parse(localStorage.carts)
    id.forEach((item,index) => {
      if (goodsData.find(n=> n.id === Number(item))) {
        goodsData.splice(index,1)
      }
    })
    localStorage.carts = JSON.stringify(goodsData)
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
