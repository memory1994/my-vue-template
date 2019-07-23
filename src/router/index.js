import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewRouters from './view-routers'

Vue.use(VueRouter)

const routes = [
  ...ViewRouters
]

const router = new VueRouter({
  mode: 'history',
  // base: '/',
  routes: routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router