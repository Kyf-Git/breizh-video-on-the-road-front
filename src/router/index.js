// Ajout des differentes routes
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Evenements from '../views/Evenements.vue'
import Films from '../views/Films.vue'
import Villages from '../views/Villages.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    path: '/evenements',
    name: 'evenements',
    component: Evenements
    },
    {
    path: '/films',
    name: 'films',
    component: Films
  },
    {
    path: '/villages',
    name: 'villages',
    component: Villages
  }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router 