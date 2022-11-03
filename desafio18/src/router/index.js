import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImagenDetalle from '../views/ImagenDetalle'

const routes = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
