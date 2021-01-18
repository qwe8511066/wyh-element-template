import { constantRoutes } from '@/router'
import store from '@/store'
import Layout from "@/layout";

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      const menuModule = checkModuleRouter(store.getters.menuModule)
      commit('SET_ROUTES', menuModule)
      resolve(menuModule)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}



/**
 * 递归将后台路由摊平成两级路由
 * 为了与多页面一起使用
 * @param {Array} menu 
 */
function checkModuleRouter(menu) {
  const res = [];
  menu.forEach((item, i) => {
    item.meta = {
      title: item.title,
      icon: item.icon,
      noCache: item.noCache,
      affix: item.affix,
      componetError: item.component,
      bigScreen: item.bigScreen,
    }
    const $item = { ...item };
    if ($item.component === "" || $item.component === "0") {
      // 父级路由
      // 这里是为了将父级路由铺成两级
      res.push(...checkModuleRouter($item.children));
    } else {
      // 根路由
      if ($item.component === "true") {
        $item.component = Layout;
        $item.children = checkModuleRouter($item.children);
      }
      else {
        // 非根路由
        $item.component = getViews(
          $item.component.replace(/(^\/\/*)|(\/\/*$)/g, "")
        );
      }
      res.push($item);
    }
  });
  return res;
}

//获取页面组件
function getViews(path) {
  return resolve => {
    require.ensure([], require => {
      try {
        resolve(require("@/views/" + path + ".vue"));
      } catch (error) {
        console.error(error);
        resolve(require("@/views/componentError/index.vue"));
      }
    });
  };
}