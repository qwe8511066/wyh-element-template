export default {
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    summaryMethod: {
      type: Function,
    },
    spanMethod: {
      type: Function,
    },
    //动态合并
    merge: {
      type: Array,
    },
    //分页数量的配置
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 25, 50, 100]
      },
    },

    //是否显示分页
    isPagination: {
      type: Boolean,
      default: true,
    },
    //分页的种类
    layout: {
      type: String,
      default: 'total, sizes,prev, pager, next, jumper',
    },
    //radio 或者 checkbox
    type: {
      type: String,
      default: '',
    },
    //动态参数
    myPages: {
      type: Object,
      default: function () {
        return {}
      },
    },
    //基本参数
    baseParams: {
      type: Object,
      default: function () {
        return {}
      },
    },

    //每次刷新列表 清空已选的列表
    checkboxDeleteValue: {
      type: Boolean,
      default: true,
    },

    //多选属性
    checkboxAttribute: {
      type: Object,
      default: function () {
        return {
          //判断的属性
          type: 'id',
          //默认值   外部传默认值进来
          value: [],
        }
      },
    },
    //单选属性
    radioAttribute: {
      type: Object,
      default: function () {
        return {
          //判断的属性
          type: 'id',

          //表头
          label: '选择',

          //默认值
          value: {},

          //宽度
          width: '50px',
        }
      },
    },
    //最大高度 做流动列表用的
    maxHeight: {
      type: String || Number,
    },

    //列
    column: {
      type: Array,
      default() {
        return []
      },
    },
    //列表请求的url
    listServe: {
      type: String,
      default: '',
    },
    //列表请求的类型
    listServeMethod: {
      type: String,
      default: 'POST',
    },
    //静态列表数据
    list: {
      type: Array,
      default() {
        return []
      },
    },
    //返回值的Total Key
    definitionTotal: {
      type: String,
      default: 'totalCount',
    },
    //返回值的Data Key
    definitionData: {
      type: String,
      default: 'list',
    },
    //page的Key
    definitionPage: {
      type: String,
      default: 'page',
    },
    //page的value
    definitionPageValue: {
      type: Number,
      default: 1,
    },
    //pageSize的Key
    definitionPageSize: {
      type: String,
      default: 'pageSize',
    },
    //pageSize的value
    definitionPageSizeValue: {
      type: Number,
      default: 10,
    },

    //请求开源组件的类型
    requestType: {
      type: String,
      default: '$http',
    },

    //myPages参数变了自动搜索
    autoSearch: {
      type: Boolean,
      default: false,
    },

    //自动搜索的时间
    autoSearchTime: {
      type: Number,
      default: 666,
    },
  }
}
