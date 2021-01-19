import { constantRoutes } from '@/router'
import store from '@/store'
import Layout from "@/layout";
import { checkArrayString, getMultistage, sonsTree } from '@/utils';

const state = {
  routes: [],
  addRoutes: [],
  fatherIndex: -1,
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  setRoutes({
    commit
  }, routes) {
    commit('SET_ROUTES', routes)
  },
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      const getters = store.getters
      //根据菜单设置路由模块
      let menuModule = checkModuleRouter(getters.menuModule, getters.menuModule)


      //追加默认路由
      menuModule.push({ path: '/', redirect: sonsTree([menuModule[0]])[0].path, hidden: true });
      //追加404 写在静态会导致一开始就404
      menuModule.push({ path: '*', redirect: '/404', hidden: true });

      //判断顶部布局的菜单
      if (getters.menuPosition === 'top') {
        let activeRoute = parseInt(getters.activeRoute)
        //判断下标是否超出菜单树的长度
        if (activeRoute > menuModule.length) {
          store.dispatch('menu/activeRoute', 0)
          activeRoute = 0
        }
        commit('SET_ROUTES', menuModule[activeRoute].children)
      } else {
        commit('SET_ROUTES', menuModule)
      }
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
function checkModuleRouter(menu, allMenu) {
  const res = [];
  menu.forEach((item, i) => {
    const fatherIndex = checkArrayString(allMenu, 'name', item.name)
    if (fatherIndex != -1) {
      state.fatherIndex = state.fatherIndex + 1;

    }
    item.meta = {
      title: item.title,
      icon: item.icon,
      noCache: item.noCache,
      affix: item.affix,
      componetError: item.component,
      bigScreen: item.bigScreen,
      fatherNmae: allMenu[state.fatherIndex].name
    }
    const $item = { ...item };
    if ($item.component === "" || $item.component === "0") {
      // 父级路由
      // 这里是为了将父级路由铺成两级
      res.push(...checkModuleRouter($item.children, allMenu));
    } else {
      // 根路由
      if ($item.component === "true") {
        $item.component = Layout;
        $item.children = checkModuleRouter($item.children, allMenu);
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


