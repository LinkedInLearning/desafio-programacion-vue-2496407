import { createStore } from 'vuex'

export default createStore({
  state: {
    imagenes: [
      {url: '../imagenes/imagen1.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {url: '../imagenes/imagen2.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {url: '../imagenes/imagen3.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {url: '../imagenes/imagen4.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {url: '../imagenes/imagen5.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      {url: '../imagenes/imagen6.jpg', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
