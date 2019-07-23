import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewRouters from './view-routers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: ViewRouters
})

router.beforeEach((to, from, next) => {
  next()
})

export default router