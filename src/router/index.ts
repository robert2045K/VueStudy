import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/study/:userId?',
      name: 'study',
      component: () => import('@/views/Study/04/index.vue'),
      props: true,
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('@/views/Study/35-分组选择器和链接伪类选择器/index.vue'),
      props: true,
    },
  ],
})

export default router
