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

  position: '',

  //判断顶部路由的切换  从而获取顶部路由下的缓存路由
  dynamicRoutes: [],

  //根据标题动态焦点
  activeRoute: 1,
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
          next(`/login?redirect=${to.path}`)
          return false
        }

        // for (let i = 0; i < data.length; i++) {
        //   if (!data[i].children) {
        //     commit('SET_POSITION', 'left')
        //     Message.error('顶部菜单的布局错误：' + JSON.stringify(data[i]) + "。。请检查类型是否匹配。已强行修改布局");
        //   }
        // }
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