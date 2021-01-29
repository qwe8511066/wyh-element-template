<template>
  <div style="cursor: pointer" :class="{ noclick: disabled }">
    <el-select
      style="width: 100%"
      v-model="checkModel"
      :placeholder="placeholder"
      multiple
      popper-class="publicChoiceSelect"
      :disabled="disabled"
      @focus="showDetailDialog"
      class="publicChoice"
      @remove-tag="removeTag($event)"
    >
      <el-option
        v-for="(item, index) in checkArray"
        :key="index"
        :label="getMultistageFn(item,typeLabel)"
        :value="getMultistageFn(item,typeValue)"
      ></el-option>
    </el-select>
    <dialogWyhElementChoose
      v-if="cobyDialogVisible"
      :dialogVisible="cobyDialogVisible"
      :checkboxAttribute="checkboxAttribute"
      :type="type"
      :listServe="listServe"
      @close="selectClose"
      :column="column"
      :radioAttribute="radioAttribute"
      :rightColumn="rightColumn"
    ></dialogWyhElementChoose>
  </div>
</template>
<script>
import {
  setMultistage,
  checkArrayString,
  getMultistage,
  checkArray,
} from '@/utils/index'
import config from '@/components/LbTable/config'
import dialogConfig from '@/components/LbTable/dialogConfig'
export default {
  name: 'dialogWyhElementChooseSelect',
  components: {},
  mixins: [config, dialogConfig],
  props: {
    placeholder: {
      type: String,
      default: '请选择',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checkList: {
      type: Array,
      default: function () {
        return []
      },
    },

    //选中的label
    typeLabel: {
      type: String,
      default: 'name',
    },

    //选中的value
    typeValue: {
      type: String,
      default: 'id',
    },

    //列表的label
    listLabel: {
      type: String,
      default: 'name',
    },

    //列表的value
    listValue: {
      type: String,
      default: 'id',
    },
    checkLabel: null,
    checkValue: null,
  },
  model: {},
  watch: {
    checkValue(to) {
      this.mergeFn(this.radioAttribute, this.listValue, '', to)
    },
    checkLabel(to) {
      this.mergeFn(this.radioAttribute, this.listLabel, '', to)
    },
    checkList() {
      this.setCheckArray(this.checkList)
    },
  },
  data() {
    return {
      checkModel: [],
      checkArray: [],

      cobyCheckArray: [],
      cobyCheckModel: [],

      cobyDialogVisible: false,
    }
  },
  created() {
    if (this.type === 'radio') {
      if (this.checkLabel && this.checkValue) {
        const value = {}
        this.mergeFn(value, this.typeLabel, '', this.checkLabel)
        this.mergeFn(value, this.typeValue, '', this.checkValue)
        this.checkArray.push(value)
        this.checkModel = [this.checkValue]
      }
    } else {
      this.setCheckArray(this.checkList)
    }
  },
  methods: {
    //打开弹窗
    showDetailDialog() {
      if (this.type === 'radio') {
        this.radioAttribute.type = this.listValue
        if (this.checkLabel && this.checkValue) {
          const value = this.radioAttribute.value
          this.mergeFn(value, this.listValue, '', this.checkValue)
          this.mergeFn(value, this.listLabel, '', this.checkLabel)
        }
      } else {
        this.checkboxAttribute.value = this.checkArray.map((item) => {
          const value = JSON.parse(JSON.stringify(item))
          this.mergeFn(value, this.listLabel, item, this.typeLabel)
          this.mergeFn(value, this.listValue, item, this.typeValue)
          return value
        })
      }
      this.cobyDialogVisible = true
    },
    //弹窗的回调
    selectClose(value) {
      this.cobyDialogVisible = false
      if (value) {
        this.cobyCheckArray = this.$lodash.cloneDeep(this.checkArray)
        this.cobyCheckModel = this.$lodash.cloneDeep(this.checkModel)
        this.setCheckArray(value)
        this.$emit('close', this.checkArray)
      }
    },

    //删除tag
    removeTag(value) {
      const index = checkArrayString(this.checkArray, this.typeValue, value)
      if (index != -1) {
        this.checkArray.splice(index, 1)
      }
      this.$emit('close', this.checkArray)
    },
    //快捷方式
    getMultistageFn(data, key) {
      return getMultistage(data, key)
    },

    //设置下拉框的数组和默认值
    setCheckArray(value) {
      this.checkArray = value.map((item) => {
        const value = JSON.parse(JSON.stringify(item))
        this.mergeFn(value, this.typeLabel, item, this.listLabel)
        this.mergeFn(value, this.typeValue, item, this.listValue)
        this.mergeFn(value, this.listLabel, item, this.listLabel)
        this.mergeFn(value, this.listValue, item, this.listValue)
        return value
      })
      this.checkModel = this.checkArray.map((item) => {
        return getMultistage(item, this.typeValue)
      })
    },
    //快捷方式
    mergeFn(valie, valueLabel, item, itemLabel) {
      this.$lodash.merge(
        valie,
        setMultistage(
          valie,
          valueLabel,
          item ? getMultistage(item, itemLabel) : itemLabel
        )
      )
    },
    //重置下拉框数据
    reset() {
      this.checkModel = []
      this.checkArray = []
    },
    //返回上一次操作的数据
    reduction() {
      this.checkModel = this.cobyCheckModel
      this.checkArray = this.cobyCheckArray
    },
  },
}
</script>
<style lang="scss" scoped>
.noclick {
  pointer-events: none;
}
</style>
