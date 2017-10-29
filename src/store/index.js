import gooapi from '../api'
import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

export default new vuex.Store({
  state: {
    goods: [],
    goodcart: 1
  },
  getters: {
    goodlength: (state) => {
      return state.goodcart
    },
    getProducts: (state) => {
      return state.goods
    }
  },
  mutations: {
    gcadd(state) {
      state.goodcart = state.goodcart + 1
    },
    getProducts(state, all) {
      state.goods = all
    },
    rcadd(state) {
      state.goodcart = state.goodcart - 1
    }
  },
  actions: {
    gcadd(context) {
      setTimeout(function() {
        context.commit('gcadd')
      })
    },
    getProducts(context) {
      gooapi.getProducts().then(function(data) {
        context.commit('getProducts', data)
      })
    }
  }
})