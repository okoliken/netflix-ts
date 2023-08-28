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
    },
    {
      path:'/auth/sign-up',
      name:'Signup',
      // @ts-ignore
      component: () => import('../views/Signup.vue'),
      meta:{
        layout:'authLayout'
      }
    },
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some((routes) => routes.meta.requiresAuth)){
      let user  = JSON.parse(String(sessionStorage.getItem('user')))
      if(!user){
        next('/auth/login')
      }
  }
  next()
})

export default router
