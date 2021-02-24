import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import * as filters from './filters' // global filters
import publicComponents from "@/utils/publicComponents";
import '@/directive/dialogDrag.js' //全局弹窗拖拽
import '@/directive/enterForm.js' //全局表单回车事件
import service from '@/utils/request'
import lodash from "lodash";

//全局变量
import '@/global/';
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
//全局组件库
Vue.use(publicComponents);

Vue.prototype.$lodash = lodash;
Vue.prototype.$http = service //全局HTTP
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
