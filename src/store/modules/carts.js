import goodapi from '../../api'

const state = {
  cartList: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  getshopList(context) {
    goodapi.getProducts().then((data) => {
      context.commit('getshopList', data)
    })
  },
  actionsaddtocart(context, id) {
    console.log('我是在dispatch中触发的')
    context.commit('addtocart', id)
  },
  actionsreduceTo({commit}, id) {
    console.log('dispatch actionsreduceto')
    commit('reduceTo', id)
  }
}

// mutations
const mutations = {
  addtocart(state, id) {
    console.log(state)
    // 购物车商品加一
    if (state.cartList.filter((e) => { return e.id === id }).length === 0) {
        // let objdanli  = Object.assign({},this.shopList.filter((e)=>{return e.id == id})[0]);
      let objdanli = {id: id, name: '3243', price: '444'}
      objdanli.geshu = 1
      state.cartList.push(objdanli)
    } else {
      state.cartList.filter((e) => { return e.id === id })[0].geshu += 1
    }
  },
  reduceTo(state, id) {
    if (state.cartList.filter((e) => { return e.id === id }).length === 0) {
      return false
    } else {
      state.cartList.filter((e) => { return e.id === id })[0].geshu -= 1
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
