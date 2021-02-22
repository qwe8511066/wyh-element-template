import { constantRoutes } from '@/router'
import store from '@/store'
import Layout from "@/layout";
import { checkArray, checkArrayString, getMultistage, sonsTree } from '@/utils';

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
      const sonsTreeNode = sonsTree([menuModule[0]])[0]

      if (getters.fixedFirst) {
        sonsTreeNode.meta.affix = true
      }

      //追加第一个为默认路由
      menuModule.push({ path: '/', redirect: sonsTreeNode.path, hidden: true });
      //追加404 写在静态会导致一开始就404
      menuModule.push({ path: '*', redirect: '/404', hidden: true });

      store.dispatch('menu/setPosition', getters.menuPosition)
      // //判断顶部菜单应用布局的菜单
      // if (getters.menuPosition === 'topApplication') {

      //   let activeRoute = parseInt(getters.activeRoute)
      //   //判断下标是否超出菜单树的长度
      //   if (activeRoute > menuModule.length) {
      //     store.dispatch('menu/activeRoute', 0)
      //     activeRoute = 0
      //   }
      //   //顶部菜单则重新排序过
      //   commit('SET_ROUTES', menuModule[activeRoute].children)
      // } else {
      //   //左侧菜单获取菜单树排序
      //   commit('SET_ROUTES', getters.menuModule)
      // }
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
      fatherNmae: allMenu[state.fatherIndex].name,
      permissionButtons: item.permissionButtons,
    }
    const $item = { ...item };
    if ($item.component === "" || $item.component === "0") {
      // 父级路由
      // 这里是为了将父级路由铺成两级
      res.push(...checkModuleRouter($item.children, allMenu));
    } else {
      // 根路由
      $item.component = getViews(
        $item.component.replace(/(^\/\/*)|(\/\/*$)/g, "")
      );
      if (checkArray($item.children)) {
        $item.children = checkModuleRouter($item.children, allMenu);
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
        resolve(require("@/" + path + ".vue"));
      } catch (error) {
        resolve(require("@/views/componentError/index.vue"));
      }
    });
  };
}


