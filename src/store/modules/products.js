import goodapi from '../../api'
import * as types from '../mutations'
// initial state
const state = {
  shopList: []
}

// getters
const getters = {
  allProducts: state => state.shopList
}

// actions
const actions = {
  getshopList(context) {
    goodapi.getProducts().then((data) => {
      context.commit('getshopList', data)
    })
  },
  actionsaddtocart(context, id) {
    console.log('produce我是在dispatch中触发的')
    context.commit('addtocart', id)
  },
  actionsreduceTo({commit}, id) {
    console.log('dispatch actionsreduceto')
    commit('reduceTo', id)
  }
}

// mutations
const mutations = {
  getshopList(state, data) {
    state.shopList = data
  },
  addtocart(state, id) {
      // 商品总数减一
    state.shopList.filter((e) => { return e.id === id })[0].shengyu -= 1
      // 购物车商品加一
  },
  reduceTo(state, id) {
    state.shopList.filter((e) => { return e.id === id })[0].shengyu += 1
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
