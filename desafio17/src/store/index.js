import { createStore } from 'vuex'

export default createStore({
  state: {
    productosCarrito: []
  },
  getters: {
    totalNumProductos (state) {
      return state.productosCarrito.length
    }
  },
  mutations: {
    agregarProducto(state, producto){
      state.productosCarrito.push(producto);
    }
  },
  actions: {
    AgregarProducto(context, producto){
      return new Promise((resolve) =>{
        context.commit('agregarProducto', producto);
        resolve(true);
      })
    }
  },
  modules: {
  }
})
