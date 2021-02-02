import { getMenu } from '@/api/menu'
import { checkArray } from '@/utils'
import { Message } from 'element-ui'
import store from '@/store'
import Layout from "@/layout";
const state = {
  // 菜单
  menuModule: [],

  /**
   * 菜单的按钮权限  
   * 对象格式。去除根菜单  格式:{'url':{'新增':'icon'}}
   **/
  menusButton: null,

  //菜单的位置 如top  或者别的
  //top后菜单树每棵树必须要有一个顶级应用如：权限模块->权限菜单
  //                                   权限模块->用户权限
  position: '',

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
  SET_MENUSBUTTON: (state, menus) => {
    state.menusButton = menus
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
  setMenusButton({
    commit
  }, menus) {
    commit('SET_MENUSBUTTON', menus)
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
  setPosition: (state, value) => {
    commit("SET_POSITION", value);
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