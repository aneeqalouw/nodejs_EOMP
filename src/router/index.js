import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import( '../views/ShopView.vue')
  },
  {
    path: '/unitards',
    name: 'unitards',
    component: () => import( '../views/UnitardsView.vue')
  },
  {
    path: '/topsandleggings',
    name: 'topsandleggings',
    component: () => import( '../views/TopsandleggingsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import( '../views/ProductView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
