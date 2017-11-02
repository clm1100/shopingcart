import goodapi from '../api'
import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

export default new vuex.Store({
  state: {
    shopList: [],
    cartList: []
  },
  mutations: {
    getshopList(state, data) {
      state.shopList = data
    },
    addtocart(state, id) {
      // 商品总数减一
      state.shopList.filter((e) => { return e.id === id })[0].shengyu -= 1
      // 购物车商品加一
      if (state.cartList.filter((e) => { return e.id === id }).length === 0) {
        // let objdanli  = Object.assign({},this.shopList.filter((e)=>{return e.id == id})[0]);
        let objdanli = JSON.parse(JSON.stringify(state.shopList.filter((e) => { return e.id === id })[0]))
        delete objdanli.shengyu
        objdanli.geshu = 1
        state.cartList.push(objdanli)
      } else {
        state.cartList.filter((e) => { return e.id === id })[0].geshu += 1
      }
    },
    reduceTo(state, id) {
      state.shopList.filter((e) => { return e.id === id })[0].shengyu += 1
      if (state.cartList.filter((e) => { return e.id === id }).length === 0) {
        return false
      } else {
        state.cartList.filter((e) => { return e.id === id })[0].geshu -= 1
      }
    }

  },
  getters: {
    countPrice(state) {
      if (state.cartList.length > 0) {
        let a = 0
        state.cartList.forEach((e) => {
          a += Number(e.price) * Number(e.geshu)
        })
        return a
      } else {
        return 0
      }
    }
  },
  actions: {
    getshopList(context) {
      goodapi.getProducts().then((data) => {
        context.commit('getshopList', data)
      })
    }
  }
})