import { createStore } from 'vuex'

const store = createStore({
  state: {
    token: '',
    isLoggedIn: false,
    user: {},
    shoppingCart: []
  },
  getters: {
  },
  mutations: {
    setToken(state, payload) {
        state.token = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
    addToCart(state, payload) {
      if (!state.shoppingCart.includes(payload)) {
        state.shoppingCart.push(payload)
      }
    },
    removeFromCart(state, payload) {
      for( var i = 0; i < state.shoppingCart.length; i++){                     
        if ( state.shoppingCart[i]._id === payload) { 
            state.shoppingCart.splice(i, 1); 
        }
    }
    }
  },
  actions: {
  },
  modules: {
  }
})


export default store