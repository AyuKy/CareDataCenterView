import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
       path:'/news',
       name:'news',
    component: () => import('../views/news.vue'),
    }
   
  ],
})

export default router
