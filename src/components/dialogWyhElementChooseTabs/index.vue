<template>
  <el-dialog
    :title="dialogTitle"
    :visible="dialogVisible"
    width="1000px"
    custom-class="myDialog"
    lock-scroll
    v-dialogDrag
    :modal-append-to-body="true"
    :append-to-body="true"
    :modal="true"
    :close-on-click-modal="true"
    @close="close"
  >
    <el-row :gutter="10">
      <el-col :span="16">
        <el-tabs
          v-model="cobyTabsActive"
          v-if="tabs && tabs.length>0"
          @tab-click="changeCobyTabsActive"
        >
          <el-tab-pane
            v-for="(item,index) of tabs"
            :key="index"
            :label="item.label"
            :name="item.index"
            :lazy="true"
          >
            <wyhElementTable
              @selectComplete="selectComplete($event,item)"
              :ref="`leftWyhElementTable`+index"
              :checkboxAttribute="item.checkboxAttribute"
              :checkboxDeleteValue="false"
              :myPages="item.myPages"
              :baseParams="item.baseParams"
              :type="item.type"
              :radioAttribute="item.radioAttribute"
              :listServe="item.listServe"
              :column.sync="item.column"
            ></wyhElementTable>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col
        :span="8"
        v-if="getValue() && (getValue().checkboxAttribute || getValue().radioAttribute)"
      >
        <el-card
          v-if="getValue().type == 'checkbox'?
          getValue().checkboxAttribute.value &&
          getValue().checkboxAttribute.value.length > 0:
          getValue().radioAttribute.value
        "
        >
          <div class="flexBox marginBottom18">
            <div class="flex1 flexLeftContent">
              <el-button
                @click="deleteFn"
                :disabled="cobyRightCheckboxValue.length == 0"
                type="primary"
              >删除</el-button>
            </div>
            <div class="flexContent">
              <label>已选{{cobyRightCheckboxValue.length}}条</label>
            </div>
          </div>

          <wyhElementTable
            :column="rightColumn"
            ref="rightWyhElementTable"
            :checkboxAttribute="{
              type:getValue().type === 'checkbox'?getValue().checkboxAttribute.type:getValue().radioAttribute.type,
              value:cobyRightCheckboxValue
            }"
            :checkboxDeleteValue="false"
            :list="cobyRightList"
            type="checkbox"
          ></wyhElementTable>
        </el-card>
        <el-card
          class="box-card"
          v-if="getValue().type == 'checkbox'?
          getValue().checkboxAttribute.value.length == 0:
          !getValue().radioAttribute.value
        "
        >
          <h3>暂无已选字段...</h3>
        </el-card>
      </el-col>
    </el-row>
    <div slot="footer" class="textCenter">
      <el-button @click="close()">取消</el-button>
      <el-button type="primary" @click="close(checkboxAttribute.value)">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import wyhElementTable from '../LbTable/index'
import { checkArray, checkArrayString, getMultistage } from '@/utils/index'
import lbTable from '../LbTable/lb-table'
import dialogConfig from '@/components/LbTable/dialogConfig'
import lodash from 'lodash'
import config from '@/components/LbTable/config'
export default {
  name: 'dialogWyhElementChooseTabs',
  components: {
    wyhElementTable,
    lbTable,
  },
  mixins: [config, dialogConfig],
  props: {
    tabsActive: {
      type: Number,
      default: 0,
    },
    tabs: {
      type: Array,
      default: function () {
        return []
      },
    },
  },

  data() {
    return {
      cobyRightList: [],
      cobyRightCheckboxValue: [],
    }
  },
  created() {
    this.cobyTabsActive = this.$lodash.cloneDeep(this.tabsActive)
    this.init()
    this.initCobyRightList()
  },
  methods: {
    init() {
      this.tabs.forEach((item) => {
        if (item.type == 'radio') {
          item.checkboxAttribute = {
            value: [],
            type: item.radioAttribute.type,
          }
        }
      })
    },
    initCobyRightList() {
      const value = this.getValue()
      if (
        value.type === 'checkbox' &&
        checkArray(value.checkboxAttribute.value)
      ) {
        this.cobyRightList = lodash.cloneDeep(value.checkboxAttribute.value)
      }

      if (value.type === 'radio' && value.radioAttribute.value) {
        this.cobyRightList = [lodash.cloneDeep(value.radioAttribute.value)]
      }
    },
    getValue() {
      return this.tabs[this.cobyTabsActive]
    },
    //左侧选中的回调
    selectComplete(value, item) {
      if (this.getValue().type === 'radio') {
        this.getValue().checkboxAttribute.value = [value.currentRow]
      }
      this.cobyRightList = lodash.cloneDeep(
        this.getValue().checkboxAttribute.value
      )
      if (checkArray(this.cobyRightCheckboxValue)) {
        this.cobyRightCheckboxValue.forEach((item, index) => {
          const i = checkArrayString(
            this.cobyRightList,
            this.getValue().checkboxAttribute.type,
            getMultistage(item, this.getValue().checkboxAttribute.type)
          )
          if (i == -1) {
            this.cobyRightCheckboxValue.splice(index, 1)
            index--
          }
        })
        this.$refs.rightWyhElementTable.checkboxArrayUpdate()
      }

      this.$emit('selectComplete', value)
    },

    //删除
    deleteFn(value, i) {
      if (this.getValue().type === 'radio') {
        this.$refs[
          'leftWyhElementTable' + this.cobyTabsActive
        ][0].setRadioAttributeValue()
      }

      const data = this.$refs['leftWyhElementTable' + this.cobyTabsActive][0]
        .data

      this.cobyRightCheckboxValue.forEach((element, i) => {
        //判断删除右侧列表中。左侧列表的数据的下标
        this.getValue().checkboxAttribute.value.splice(
          checkArrayString(
            this.getValue().checkboxAttribute.value,
            this.getValue().checkboxAttribute.type,
            getMultistage(element, this.getValue().checkboxAttribute.type)
          ),
          1
        )

        //判断删除右侧列表中。左侧列表的数据的下标
        this.cobyRightList.splice(
          checkArrayString(
            this.cobyRightList,
            this.getValue().checkboxAttribute.type,
            getMultistage(element, this.getValue().checkboxAttribute.type)
          ),
          1
        )

        //判断删除右侧的列表中。左侧列表是否同样勾选
        const index = checkArrayString(
          data,
          this.getValue().checkboxAttribute.type,
          getMultistage(element, this.getValue().checkboxAttribute.type)
        )
        //如果勾选便去除勾选
        if (index != -1) {
          this.$refs[
            'leftWyhElementTable' + this.cobyTabsActive
          ][0].$refs.wyhElementTable.$refs.elTable.toggleRowSelection(
            data[index]
          )
        }
      })
      this.cobyRightCheckboxValue = []
    },
    changeCobyTabsActive() {
      this.initCobyRightList()
      this.$forceUpdate()
    },
  },
}
</script>
 
