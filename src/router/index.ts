import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/manage',
      name: 'manage',
      component: () => import('../views/Admin/Manage.vue')
    },
    {
      path: '/admin/book',
      name: 'book',
      component: () => import('../views/Admin/Book.vue')
    },
    {
      path: '/admin/user',
      name: 'user',
      component: () => import('../views/Admin/User.vue')
    },
  ]
})

export default router
