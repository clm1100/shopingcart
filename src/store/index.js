import vue from 'vue'
import vuex from 'vuex'
import carts from './modules/carts'
import products from './modules/products'
import * as actions from './actions'
console.log(actions)

vue.use(vuex)

export default new vuex.Store({
  actions,
  modules: {
    products,
    carts
  }
})