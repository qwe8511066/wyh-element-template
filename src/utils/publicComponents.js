
import ElementUI from 'element-ui'
// import wyhElementTable from '@/components/LbTable/index'
// import dialogWyhElementChoose from '@/components/dialogWyhElementChoose/index'
// import dialogWyhElementChooseTabs from '@/components/dialogWyhElementChooseTabs/index'

import wyhElementTable from 'wyh-element-table'

wyhElementTable.mixins[0].props.definitionData.default = 'data.list'
wyhElementTable.mixins[0].props.definitionTotal.default = 'data.totalCount'

// 全局自定义组件库
const publicComponents = {
  install: function (Vue) {
    Vue.use(ElementUI);
    Vue.component(wyhElementTable.name, wyhElementTable)
    // Vue.component(dialogWyhElementChoose.name, dialogWyhElementChoose)
    // Vue.component(dialogWyhElementChooseTabs.name, dialogWyhElementChooseTabs)
  }
}

// 导出组件
export default publicComponents
