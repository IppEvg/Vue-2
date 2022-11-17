import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/transport/:cost?',
    name: 'TransportView',
    component: () => import('../views/TransportView.vue')
  },
  {
    path: '/entertainment/:cost?',
    name: 'EntertainmentView',
    component: () => import('../views/EntertainmentView.vue')
  },
  {
    path: '/health/:cost?',
    name: 'HealthView',
    component: () => import('../views/HealthView.vue')
  },
  {
    path: '/food/:cost?',
    name: 'FoodView',
    component: () => import('../views/FoodView.vue')
  },
  {
    path: '*',
    name: 'ErrView',
    component: () => import('../views/ErrView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
