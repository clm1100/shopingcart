import * as types from './mutations'
export const addToCart = ({ commit }, id) => {
  commit(types.ADD_TO_CART, id)
}