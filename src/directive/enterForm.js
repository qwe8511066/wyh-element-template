import { checkArray } from '@/utils';
import Vue from 'vue';

// enterForm: 表单回车触发列表搜索事件
Vue.directive('enterForm', {
  bind(el, binding, vnode, oldVnode) {
    let listRef = el.getAttribute('listRef') ? el.getAttribute('listRef') : 'wyhElementTable'
    el.getElementsByTagName('input').forEach((element, index) => {
      element.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
          vnode.context.$refs[listRef].search()
        }
      })
    });
  }
})