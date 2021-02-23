import { getMenu } from '@/api/menu'
import { checkArray } from '@/utils'
import { Message } from 'element-ui'
import store from '@/store'
const state = {
  // 菜单
  menuModule: [],

  //菜单的位置 如topApplication  或者别的
  //topApplication后菜单树每棵树必须要有一个顶级应用如：权限模块->权限菜单
  //                                   权限模块->用户权限
  position: 'topApplication',

  //判断顶部路由的切换  从而获取顶部路由下的缓存路由
  dynamicRoutes: [],

  //根据标题动态焦点
  activeRoute: 1,

  //固定第一个菜单
  fixedFirst: true,
}

const mutations = {
  SET_MENU_MODULE: (state, menuModule) => {
    state.menuModule = menuModule
  },
  SET_POSITION: (state, value) => {
    state.position = value
  },
  SET_APPLICATIONID: (state, applicationId) => {
    state.applicationId = applicationId
  },
  SET_APPLICATIONTITLE: (state, applicationTitle) => {
    state.applicationTitle = applicationTitle
  },
  SET_DYNAMIC_ROUTES: (state, routes) => {
    state.dynamicRoutes = routes;
  },

  SET_ACTIVE_ROUTES: (state, routes) => {
    state.activeRoute = routes;
  },
}

const actions = {
  setMenuModule({
    commit
  }, currentModule) {
    commit('SET_MENU_MODULE', currentModule)
  },
  setApplicationId({
    commit
  }, applicationId) {
    commit('SET_APPLICATIONID', applicationId)
  },
  setApplicationTitle({
    commit
  }, applicationTitle) {
    commit('SET_APPLICATIONTITLE', applicationTitle)
  },

  setDynamicRoutes({ commit }, value) {
    commit("SET_DYNAMIC_ROUTES", value);
  },

  setActiveRoute({ commit }, value) {
    commit("SET_ACTIVE_ROUTES", value);
  },

  getMenu({ commit },) {
    return new Promise((resolve, reject) => {
      getMenu().then(response => {
        const { data } = response
        if (!checkArray(data)) {
          Message.error('该账户没有对应的匹配菜单,请检查该账户')
          store.dispatch('user/resetToken')

          store.dispatch('app/setInitLoading', false)

          next(`/login?redirect=${to.path}`)
          return false
        }
        commit("SET_MENU_MODULE", data);
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setPosition({ commit }, value) {
    commit("SET_POSITION", value);
    const getters = store.getters
    //判断顶部菜单应用布局的菜单
    if (getters.menuPosition === 'topApplication') {
      let activeRoute = parseInt(getters.activeRoute)
      //判断下标是否超出菜单树的长度
      if (activeRoute > getters.menuModule.length) {
        store.dispatch('menu/activeRoute', 0)
        activeRoute = 0
      }
      //顶部菜单则重新排序过
      store.dispatch('permission/setRoutes', getters.menuModule[activeRoute].children)
    } else {
      //左侧菜单获取菜单树排序
      store.dispatch('permission/setRoutes', getters.menuModule)
    }
  },


  setActiveRouteMenu({ commit }, value) {
    if (value != state.activeRoute) {
      //改变全局顶部下标
      commit("SET_ACTIVE_ROUTES", value);
      const currentRoute = state.menuModule[state.activeRoute]
      //根据下标获取其子级菜单
      const routeChildren = currentRoute.children
      //设置左侧菜单
      store.dispatch('permission/setRoutes', routeChildren)
    }

  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}