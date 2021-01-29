
<template>
  <el-button
    v-if="button && iifFn"
    :icon="button ? button.icon : undefined"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template>{{ button ? button.label : name }}</template>
  </el-button>
</template>

<script>
import { checkArray } from '@/utils'
import { type } from '@jsmini/type'
export default {
  name: 'buttonPermission',
  props: {
    // 按钮名称
    name: {
      type: String,
      required: true,
    },
    //二次校验按钮是否展示
    iif: {
      type: Function,
    },
  },
  computed: {
    iifFn() {
      return this.iif && type(this.iif) === 'function' ? this.iif() : true
    },
    // 当前按钮
    button() {
      const permissionButtons = checkArray(this.$route.meta.permissionButtons)
        ? this.$route.meta.permissionButtons
        : []
      return permissionButtons.find((v) => {
        return v.label === this.name
      })
    },
  },
  created() {},
}
</script>
