import { createRouter, createWebHistory } from 'vue-router'
import ListaProductos from '../views/ListaProductos.vue'
import CarritoCompras from '../views/CarritoCompras.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListaProductos
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoCompras
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
