import * as types from './mutations'
export const addToCart = ({ commit }, id) => {
  commit('addToCart', id)
}