<template>
  <lb-table
    ref="wyhElementTable"
    class="myLbTable"
    :highlight-current-row="
        type == 'radio' ||
          type == 'checkbox'
      "
    :current-page="returnPage()"
    :total="listServe?pagination.total:list.length"
    :pagination="isPagination"
    :max-height="maxHeight"
    :page-sizes="pageSizes"
    :layout="layout"
    :column="cobyColumn"
    :data="listServe?data:list.slice((returnPage() - 1) * returnPageSize(),returnPage() * returnPageSize())"
    v-loading="loading"
    :border="border"
    row-key="id"
    default-expand-all
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    @p-current-change="handleCurrentChange"
    @size-change="sizeChange"
    @row-click="rowClick"
    @select-all="selectAll"
    :merge="merge"
    :span-method="spanMethod"
    :summary-method="summaryMethod"
    :show-summary="summaryMethod?true:false"
    @select="select"
  >
    <template slot="item">
      <slot name="item"></slot>
    </template>
  </lb-table>
</template>

<script>
import LbTable from './lb-table'
import {
  checkArray,
  checkArrayString,
  getMultistage,
  getObjByValue,
  setMultistage,
  formateObjToParamStr,
} from '@/utils/index'
import { type } from '@jsmini/type'
import lodash from 'lodash'
import config from './config'
export default {
  name: 'wyhElementTable',
  components: {
    LbTable,
  },
  mixins: [config],
  computed: {},
  watch: {
    myPages: {
      handler(newName, oldName) {
        const self = this
        if (self.autoSearch && newName && oldName) {
          clearTimeout(self.autoSearchTimer)
          self.autoSearchTimer = setTimeout(function () {
            self.getList()
          }, self.autoSearchTime)
        }
      },
      immediate: true,
      deep: true,
    },
  },

  data() {
    return {
      //自动搜索的定时器
      autoSearchTimer: null,

      currentRow: {},

      // 传给后台的分页
      page: {
        // 当前页面
        // page: 1,
        // // 每页条数
        // pageSize: 10,
      },

      //分页的配置
      pagination: {
        total: 0,
      },

      loading: false,

      data: [],

      cobyColumn: [],
    }
  },
  created() {
    this.initPage()
    if (this.listServe) {
      this.getList()
    }
    this.initColumn()
  },
  methods: {
    returnData() {
      return this.listServe ? this.data : this.list
    },
    returnPage() {
      return getMultistage(this.page, this.definitionPage)
    },
    returnPageSize() {
      return getMultistage(this.page, this.definitionPageSize)
    },

    initPage(page = -1, pageSize = -1) {
      let pageValue =
        page == getMultistage(this.page, this.definitionPage)
          ? getMultistage(this.page, this.definitionPage)
          : this.definitionPageValue
      let pageSizeValue =
        pageSize == getMultistage(this.page, this.definitionPageSize)
          ? getMultistage(this.page, this.definitionPageSize)
          : this.definitionPageSizeValue
      if (page != -1) {
        this.page = lodash.merge(
          this.page,
          setMultistage(this.page, this.definitionPage, page)
        )
      }
      if (pageSize != -1) {
        this.page = lodash.merge(
          this.page,
          setMultistage(this.page, this.definitionPageSize, pageSize)
        )
      }

      if (pageSize == -1 && page == -1) {
        this.page = lodash.merge(
          setMultistage(this.page, this.definitionPage, pageValue),
          setMultistage(this.page, this.definitionPageSize, pageSizeValue)
        )
      }
    },
    initColumn() {
      this.cobyColumn = []
      lodash.cloneDeep(this.column).forEach((item) => {
        if (item.iif && type(item.iif) === 'function') {
          if (item.iif()) {
            this.cobyColumn.push(item)
          }
        } else {
          this.cobyColumn.push(item)
        }
      })

      if (this.type === 'checkbox') {
        this.cobyColumn.unshift({
          type: 'selection',
        })
      } else if (this.type == 'radio') {
        //radio 给新增一个 radio 框框
        this.cobyColumn.unshift({
          type: 'radio',
          width: this.radioAttribute.width ? this.radioAttribute.width : '50px',
          label: this.radioAttribute.label ? this.radioAttribute.label : '选择',
          radioType: this.radioAttribute.type,
          radioValue: getMultistage(
            this.radioAttribute.value,
            this.radioAttribute.type
          ),
        })
      }
    },
    //重置列
    resetColumn() {
      if (checkArray(this.column)) {
        this.$nextTick(() => {
          this.initColumn()
        })
      }
    },
    //点击搜索
    search() {
      this.page.page = 1
      this.getList()
    },
    //初始化MyPages
    //把myPages的值还原成空或是undefined
    initMyPages(myPages) {
      if (myPages) {
        Object.keys(myPages).forEach((key) => {
          switch (type(myPages[key])) {
            case 'object':
              if (Object.keys(myPages[key]).length) {
                this.initMyPages(myPages[key])
              } else {
                myPages[key] = {}
              }
              break
            case 'array':
              myPages[key] = []
              break
            default:
              myPages[key] = undefined
              break
          }
        })
      }
    },
    // 重置搜索
    reset() {
      this.page.page = 1
      this.initMyPages(this.myPages)
      this.$emit('reset')
      if (!this.autoSearch) {
        this.getList()
      }
    },

    //获取列表数据
    getList() {
      this.page = Object.assign({}, this.page, this.myPages)
      this.page = Object.assign({}, this.page, this.baseParams)
      const url =
        this.listServeMethod === 'POST'
          ? this.listServe
          : this.listServe + '?' + formateObjToParamStr(this.page)
      this.loading = true
      this[this.requestType]
        [this.listServeMethod.toLowerCase()](
          url,
          this.listServeMethod === 'POST' ? this.page : {}
        )
        .then((res) => {
          this.loading = false
          if (this.checkboxDeleteValue) {
            this.checkboxAttribute.value = []
          }
          if (checkArray(this.checkboxAttribute.value)) {
            this.checkboxArrayUpdate()
          }
          //返回列表对象
          this.$emit('onGetList', { data: res })
          this.data = getMultistage(res, this.definitionData)
          this.pagination.total = getMultistage(res, this.definitionTotal)
        })
        .catch((err) => {
          this.loading = false
        })
    },
    //分页的change事件
    handleCurrentChange(value) {
      this.initPage(value, -1)
      if (this.listServe) {
        this.getList()
      } else {
        this.$forceUpdate()
      }
    },
    //点击行
    rowClick(value, column, event) {
      this.currentRow = value
      if (this.type == 'radio') {
        //点击行和radio 的选中冲突了  在这做判断  如果是选中radio 则不触发回调
        if (
          event.target.localName === 'input' &&
          event.target.type === 'radio'
        ) {
          return false
        }
        this.setRadioAttributeValue(value)
      } else if (this.type == 'checkbox') {
        //当前列表没有多选判断的唯一值
        const typeValue = getMultistage(value, this.checkboxAttribute.type)
        if (!typeValue) {
          throw new Error(
            '当前列表没有多选判断的唯一值  请检查你的多选判断：' +
              JSON.stringify(this.checkboxAttribute) +
              '你的列表:' +
              JSON.stringify(this.column)
          )
          return false
        }
        const index = checkArrayString(
          this.checkboxAttribute.value,
          this.checkboxAttribute.type,
          typeValue
        )
        if (index === -1) {
          this.checkboxAttribute.value.push(value)
        } else {
          this.checkboxAttribute.value.splice(index, 1)
        }
        this.$refs.wyhElementTable.$refs.elTable.toggleRowSelection(value)
      }
      this.$refs.wyhElementTable.$refs.elTable.setCurrentRow()
      this.selectComplete()
    },

    //点击全选
    selectAll(value) {
      if (checkArray(value)) {
        this.returnData().forEach((item) => {
          const index = checkArrayString(
            this.checkboxAttribute.value,
            this.checkboxAttribute.type,
            getMultistage(item, this.checkboxAttribute.type)
          )
          if (index == -1) this.checkboxAttribute.value.push(item)
        })
      } else {
        this.returnData().forEach((item) => {
          const index = checkArrayString(
            this.checkboxAttribute.value,
            this.checkboxAttribute.type,
            getMultistage(item, this.checkboxAttribute.type)
          )
          if (index != -1) this.checkboxAttribute.value.splice(index, 1)
        })
      }
      this.selectComplete()
    },

    //修改checkbox状态
    checkboxArrayUpdate() {
      this.$nextTick(() => {
        this.returnData().forEach((value) => {
          if (
            checkArrayString(
              this.checkboxAttribute.value,
              this.checkboxAttribute.type,
              getMultistage(value, this.checkboxAttribute.type)
            ) != -1
          ) {
            this.$refs.wyhElementTable.$refs.elTable.toggleRowSelection(value)
          }
        })
      })
    },
    //点击单选
    select(value, row) {
      this.$emit('select', value, row)
      //找出已选列表数据的下标(element 的table selection)
      const index = checkArrayString(
        this.$refs.wyhElementTable.$refs.elTable.selection,
        this.checkboxAttribute.type,
        getMultistage(row, this.checkboxAttribute.type)
      )
      //不存在则添加
      if (index != -1) {
        this.checkboxAttribute.value.push(row)
      } else {
        //存在则再根据寻找一次(自己存的一份)
        const i = checkArrayString(
          this.checkboxAttribute.value,
          this.checkboxAttribute.type,
          getMultistage(row, this.checkboxAttribute.type)
        )
        this.checkboxAttribute.value.splice(i, 1)
      }
      this.selectComplete()
    },

    //分页的页码改变
    sizeChange(value) {
      this.initPage(-1, value)
      if (this.listServe) {
        this.getList()
      } else {
        this.$forceUpdate()
      }
    },

    //设置单选的value
    setRadioAttributeValue(value = null) {
      this.radioAttribute.value = value
      this.cobyColumn[
        checkArrayString(this.cobyColumn, 'type', 'radio')
      ].radioValue =
        this.radioAttribute.type && value
          ? getMultistage(value, this.radioAttribute.type)
          : value
    },

    //发送信息
    selectComplete() {
      this.$emit('selectComplete', {
        //返回列表对象
        list: this.returnData,

        //返回当前点击对象
        currentRow: this.currentRow,

        //返回多选对象
        checkboxAttribute: this.checkboxAttribute,
      })
    },
  },
}
</script>
