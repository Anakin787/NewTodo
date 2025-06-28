import { createRouter, createWebHistory } from 'vue-router'
import TodoLayout from '../components/TodoLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoLayout
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('../components/CompletedTodos.vue')
  },
  {
    path: '/major',
    name: 'major',
    component: () => import('../components/MajorTodos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
