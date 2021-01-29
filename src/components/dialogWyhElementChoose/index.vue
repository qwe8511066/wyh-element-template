<template>
  <el-dialog
    :title="dialogTitle"
    :visible="dialogVisible"
    width="1000px"
    custom-class="myDialog"
    v-dialogDrag
    lock-scroll
    :modal-append-to-body="true"
    :append-to-body="true"
    :modal="true"
    :close-on-click-modal="true"
    @close="close"
  >
    <el-row :gutter="10">
      <el-col :span="16">
        <wyhElementTable
          @selectComplete="selectComplete"
          ref="leftWyhElementTable"
          :checkboxAttribute="checkboxAttribute"
          :checkboxDeleteValue="false"
          :myPages="myPages"
          :baseParams="baseParams"
          :type="type"
          :radioAttribute="radioAttribute"
          :listServe="listServe"
          :layout="layout"
          :column="column"
        ></wyhElementTable>
      </el-col>
      <el-col :span="8">
        <el-card
          v-if="type == 'checkbox'?
          checkboxAttribute.value &&
          checkboxAttribute.value.length > 0:
          radioAttribute.value
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
              type:type === 'checkbox'?checkboxAttribute.type:radioAttribute.type,
              value:cobyRightCheckboxValue
            }"
            :checkboxDeleteValue="false"
            :list="cobyRightList"
            :layout="layout"
            type="checkbox"
          ></wyhElementTable>
        </el-card>
        <el-card
          class="box-card"
          v-if="type == 'checkbox'?
          checkboxAttribute.value.length == 0:
          !radioAttribute.value
        "
        >
          <h3>暂无已选字段...</h3>
        </el-card>
      </el-col>
    </el-row>

    <div slot="footer" class="text-center">
      <el-button @click="close()">取消</el-button>
      <el-button type="primary" @click="close(checkboxAttribute.value)">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import wyhElementTable from '../LbTable/index'
import { checkArray, checkArrayString, getMultistage } from '@/utils/index'
import lbTable from '../LbTable/lb-table'
import lodash from 'lodash'
import config from '@/components/LbTable/config'
import dialogConfig from '@/components/LbTable/dialogConfig'

export default {
  name: 'dialogWyhElementChoose',
  directives: {},
  components: {
    wyhElementTable,
    lbTable,
  },
  mixins: [config, dialogConfig],
  props: {},

  data() {
    return {
      cobyRightList: [],
      cobyRightCheckboxValue: [],
    }
  },
  created() {
    if (this.type === 'checkbox' && checkArray(this.checkboxAttribute.value)) {
      this.cobyRightList = lodash.cloneDeep(this.checkboxAttribute.value)
    }

    if (this.type === 'radio' && this.radioAttribute.value) {
      this.cobyRightList = [lodash.cloneDeep(this.radioAttribute.value)]
    }
  },
  methods: {
    //左侧选中的回调
    selectComplete(value) {
      if (this.type === 'radio') {
        this.checkboxAttribute.value = [value.currentRow]
      }
      this.cobyRightList = lodash.cloneDeep(this.checkboxAttribute.value)
      if (checkArray(this.cobyRightCheckboxValue)) {
        this.cobyRightCheckboxValue.forEach((item, index) => {
          const i = checkArrayString(
            this.cobyRightList,
            this.checkboxAttribute.type,
            getMultistage(item, this.checkboxAttribute.type)
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
      if (this.type === 'radio') {
        this.$refs.leftWyhElementTable.setRadioAttributeValue()
      }

      const data = this.$refs.leftWyhElementTable.data
      this.cobyRightCheckboxValue.forEach((element, i) => {
        //判断删除右侧列表中。左侧列表的数据的下标
        this.checkboxAttribute.value.splice(
          checkArrayString(
            this.checkboxAttribute.value,
            this.checkboxAttribute.type,
            getMultistage(element, this.checkboxAttribute.type)
          ),
          1
        )

        //判断删除右侧列表中。左侧列表的数据的下标
        this.cobyRightList.splice(
          checkArrayString(
            this.cobyRightList,
            this.checkboxAttribute.type,
            getMultistage(element, this.checkboxAttribute.type)
          ),
          1
        )

        //判断删除右侧的列表中。左侧列表是否同样勾选
        const index = checkArrayString(
          data,
          this.checkboxAttribute.type,
          getMultistage(element, this.checkboxAttribute.type)
        )
        //如果勾选便去除勾选
        if (index != -1) {
          this.$refs.leftWyhElementTable.$refs.wyhElementTable.$refs.elTable.toggleRowSelection(
            data[index]
          )
        }
      })
      this.cobyRightCheckboxValue = []
    },
  },
}
</script>
 
