import Vue from 'vue'
import VueRouter from 'vue-router'
import StaticRoutes from './static-routes'
import store from '@/store/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(VueRouter)

console.log(store)
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
      const res = await store.dispatch('setMenuList')
      const routes = res.list.filter(m => !!m.menuPath).map(m => {
        return {
          'path': m.menuPath,
          'name': m.menuPath.replace(/\//g, '-'),
          'meta': { 
            'title': m.menuName,
            'menuId': m.menuId,
            'menuParentId': m.menuParentId,
            'menuSort': m.menuSort
          },
          'component': () => import(`@/views/${m.menuPath}`)
        }
      })
      router.addRoutes([
        { path: '/aa', name: 'layout', component: () => import('@/layout/index'), children: routes},
        { path: '*', redirect: '/404' }
      ])
      next({...to, replace: true})
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router