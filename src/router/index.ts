import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Personal from '../views/Personal.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/choose',
    name: 'Choose',
    component: () => import(/* webpackChunkName: "about" */ '../views/Choose.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nav.vue')
  },
  {
    path: '/body',
    name: 'Body',
    component: () => import(/* webpackChunkName: "about" */ '../views/Body.vue')
  },
  {
    path: '/bottom',
    name: 'Bottom',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bottom.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
