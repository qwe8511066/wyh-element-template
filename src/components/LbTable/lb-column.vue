/*
 * FileName: lb-column.vue
 * Remark: element-column
 * Project: lb-element-table
 * Author: LiuBing
 * File Created: Tuesday, 19th March 2019 9:58:23 am
 * Last Modified: Tuesday, 19th March 2019 10:14:42 am
 * Modified By: LiuBing
 */

<template>
  <el-table-column
    v-bind="$attrs"
    v-on="$listeners"
    :prop="column.prop"
    :label="column.label"
    :type="column.type"
    :index="column.index"
    :column-key="column.columnKey"
    :width="column.width"
    :min-width="column.minWidth"
    :fixed="column.fixed"
    :render-header="column.renderHeader"
    :sortable="column.sortable || false"
    :sort-method="column.sortMethod"
    :sort-by="column.sortBy"
    :sort-orders="column.sortOrders"
    :resizable="column.resizable || true"
    :formatter="column.formatter"
    :show-overflow-tooltip="column.showOverflowTooltip || false"
    :align="column.align || align || 'center'"
    :header-align="column.headerAlign || headerAlign || column.align || align || 'center'"
    :class-name="column.className"
    :label-class-name="column.labelClassName"
    :selectable="column.selectable"
    :reserve-selection="column.reserveSelection || false"
    :filters="column.filters"
    :filter-placement="column.filterPlacement"
    :filter-multiple="column.filterMultiple"
    :filter-method="column.filterMethod"
    :filtered-value="column.filteredValue"
  >
    <slot name="item"></slot>

    <template slot="header" slot-scope="scope">
      <lb-render v-if="column.renderHeader" :scope="scope" :render="column.renderHeader"></lb-render>
      <span v-else>{{ scope.column.label }}</span>
    </template>

    <template slot-scope="scope">
      <lb-render :scope="scope" :render="column.render"></lb-render>
    </template>

    <template v-if="column.children">
      <lb-column v-for="(col, index) in column.children" :key="index" :column="col"></lb-column>
    </template>
  </el-table-column>
</template>

<script>
import LbRender from './lb-render'
import forced from './forced.js'
import { getMultistage } from '@/utils/index'
export default {
  name: 'LbColumn',
  props: {
    column: Object,
    headerAlign: String,
    align: String,
  },
  components: {
    LbRender,
  },
  methods: {
    setColumn() {
      if (this.column.type) {
        this.column.renderHeader = forced[this.column.type].renderHeader
        this.column.render =
          this.column.render || forced[this.column.type].renderCell
      }
      if (this.column.formatter) {
        this.column.render = (h, scope) => {
          return (
            <span>
              {scope.column.formatter(
                scope.row,
                scope.column,
                scope.row,
                scope.$index
              )}
            </span>
          )
        }
      }
      if (!this.column.render) {
        this.column.render = (h, scope) => {
          let value = getMultistage(scope.row, scope.column.property)
          value = value && typeof value == 'object' ? '' : value
          return <span>{value}</span>
        }
      }
    },
  },
  watch: {
    column: {
      handler() {
        this.setColumn()
      },
      immediate: true,
    },
  },
}
</script>
