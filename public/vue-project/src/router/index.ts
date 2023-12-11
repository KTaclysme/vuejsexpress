import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import SearchBar from '../components/SearchBar.vue'
import TuttiFruttiVue from '@/views/TuttiFrutti.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id/tuttifrutti',
      name: 'tuttifrutti',
      component: TuttiFruttiVue
    },
    {
      path: '/produit',
      name: 'searchbar',
      component: SearchBar
    },
    {
      path: '/inscription',
      name: 'Register',
      component: Register
    },
    {
      path: '/connexion',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
