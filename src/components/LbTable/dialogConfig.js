export default {
  props: {
    dialogTitle: {
      type: String,
      default: '请选择',
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    rightColumn: {
      type: Array,
      default() {
        return []
      },
    },
    layout: {
      type: String,
      default: "total, prev, pager, next",
    },
  },
  methods: {
    //关闭弹窗  true刷新父级页面   false 修改父级的visible
    close(value) {
      this.$emit("close", value);
    },
  }
}
