import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
