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
      const simpleMenu = await store.dispatch('setMenuList')
      dynamicAddRoutes(simpleMenu)
      next({...to, replace: true})
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

// 动态添加路由
function dynamicAddRoutes (simpleMenu) {
  const routes = simpleMenu.filter(m => !!m.path).map(m => {
    return {
      'path': m.path,
      'name': m.path.replace(/\//g, '-').replace(/^-|-$/, ''),
      'meta': { 
        'title': m.name,
        'pName': m.pName,
        'pPath': m.pPath
      },
      'component': () => import(`@/views${m.path}`)
    }
  })
  router.addRoutes([
    { path: '/', name: 'layout', component: () => import('@/layout/index'), children: routes},
    // { path: '*', redirect: '/404' }
  ])
}

export default router