import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth:true,
        layout:'defaultLayout'
      }
    },
    {
      path:'/auth/login',
      name:'Login',
      // @ts-ignore
      component: () => import('../views/Login.vue'),
      meta:{
        layout:'authLayout'
      }
    }
  ]
})

export default router
