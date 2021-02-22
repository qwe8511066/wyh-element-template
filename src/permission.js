import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { checkArray, checkArrayString } from '@/utils/index'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
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
      const getters = store.getters
      //判断用户名称和全局变量是否存在菜单 
      if (getters.name && checkArray(getters.menuModule)) {
        next()
      } else {
        try {
          store.dispatch('app/setInitLoading', true)
          //获取并设置菜单
          await store.dispatch('menu/getMenu')
          //获取用户
          const { roles } = await store.dispatch('user/getInfo')
          //根据菜单设置路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          store.dispatch('app/setInitLoading', false)
          next({ ...to, replace: false })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          store.dispatch('app/setInitLoading', false)
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    store.dispatch('app/setInitLoading', false)
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(async (to, from, next) => {
  const getters = store.getters
  //判断顶部菜单应用布局的菜单的路由切换 保存一个状态
  //如 跳转到顶部菜单A1  菜单结构是A1->A2->A2-2->A3  下次点击A1的时候跳转到A3去
  if (getters.menuPosition == 'topApplication' && whiteList.indexOf(to.path) === -1) {
    let dynamicRoutes = getters.dynamicRoutes
    const index = checkArrayString(dynamicRoutes, 'label', to.meta.fatherNmae)
    const fatheIndex = checkArrayString(getters.menuModule, 'name', to.meta.fatherNmae)
    store.dispatch('menu/setActiveRouteMenu', fatheIndex)
    const value = { label: to.meta.fatherNmae, value: to.path }
    if (index == -1) {
      dynamicRoutes.push(value)
    } else {
      dynamicRoutes.splice(index, 1, value)
    }
    store.dispatch('menu/setDynamicRoutes', dynamicRoutes)
  }
  NProgress.done()
})
