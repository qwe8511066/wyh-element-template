import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { checkArray } from '@/utils/index'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
import Vue from 'vue'
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  //设置title
  document.title = getPageTitle(to.meta.title)

  //获取token
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      const menuModule = store.getters.menuModule
      //判断用户名称和全局变量是否存在菜单 
      if (hasGetUserInfo && checkArray(menuModule)) {
        next()
      } else {
        try {
          //获取并设置菜单
          await store.dispatch('menu/getMenu')
          //获取用户
          const { roles } = await store.dispatch('user/getInfo')
          //根据菜单设置路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: false })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(async (to, from, next) => {
  // finish progress bar
  NProgress.done()
  // Vue.nextTick(() => {
  //   console.log(to)
  //   console.log(from)
  // })
  setTimeout(() => {
    console.log(to)
    console.log(from)
  }, 333);
})
