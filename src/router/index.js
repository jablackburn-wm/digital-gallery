import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'
import ArtworkView from '../views/ArtworkView.vue'
import CheckoutView from '../views/CheckoutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/artist/:name',
    name: 'artist',
    component: ArtistView
  },
  {
    path: '/artwork/:name',
    name: 'artwork',
    component: ArtworkView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
