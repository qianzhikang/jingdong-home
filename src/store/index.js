import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}

export default createStore({
  state: {
    cartList: getLocalCartList()
  },
  getters: {
    // getCart(state) {
    //   return state.cartList
    // }
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      let product = shopCartList.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopCartList.productList[productId] = product
      state.cartList[shopId] = shopCartList
      setLocalCartList(state)
    },
    changeShop(state, shopId) {
      const shopCartList = state.cartList[shopId] || {
        productList: {}
      }
      state.cartList[shopId] = shopCartList
      setLocalCartList(state)
    },
    setTotal(state, payload) {
      const { shopId, total } = payload
      state.cartList[shopId].total = total
    },
    clearCartData(state, shopId) {
      alert(shopId)
      delete state.cartList[shopId]
      setLocalCartList(state)
    }
  },
  actions: {},
  modules: {}
})
