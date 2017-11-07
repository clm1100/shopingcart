import vue from 'vue'
import vuex from 'vuex'
import carts from './modules/carts'
import products from './modules/products'
import actions from './actions'

vue.use(vuex)

export default new vuex.Store({
  actions,
  modules: {
    products,
    carts
  }
})