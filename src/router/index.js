import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
