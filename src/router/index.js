import Vue from 'vue'
import VueRouter from 'vue-router'
import StaticRoutes from './static-routes'
import store from '@/store/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: '/',
  routes: StaticRoutes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.name === 'login') {
    next()
  } else {
    if (store.getters.menuList.length) {
      next()
    } else {
      const data = await store.dispatch('setMenuList')
      const routes = data.filter(m => !!m.path).map(m => {
        return {
          'path': m.path,
          'name': m.path.replace(/\//g, '-').replace(/^-/, ''),
          'meta': { 
            'title': m.name,
            'pName': m.pName,
            'pPath': m.pPath
          },
          'component': () => import(`@/views${m.path}`)
        }
      })
      console.log(router)
      router.addRoutes([
        { path: '/', name: 'layout', component: () => import('@/layout/index'), children: routes},
        // { path: '*', redirect: '/404' }
      ])
      next({...to, replace: true})
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router