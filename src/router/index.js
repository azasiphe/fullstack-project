
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: () => import(/* webpackChunkName: "workshops" */ '../views/WorkshopsView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  }
 

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router