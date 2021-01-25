<template>
  <div>
    <wyhElementTable
      type="checkbox"
      @selectComplete="selectComplete"
      :column="column1"
      :checkboxAttribute="checkboxAttribute"
      listServe="/getList1"
    ></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>  
        &lt;wyhElementTable
      type="checkbox"
      @selectComplete="selectComplete"
      :column="column1"
      :checkboxAttribute="checkboxAttribute"
      listServe="/getList1"
  &gt;  &lt;/wyhElementTable&gt;
 
  data() {
    return {
      checkboxAttribute: {
        type: 'user.id',
        value: [
          {
            user: {
              id: 33,
            },
          },
        ],
      },
      column1: [
        {
          prop: 'user.id',
          label: '编号',
        },
        {
          prop: 'user.name',
          label: '名称',
        },

        {
          type: 'date',
          prop: 'user.mtime',
          label: '年月日  超出宽度展示提示框',
          width: 100,
          showOverflowTooltip: true,
        },
      ],
    }
  }, 
  methods: {
    selectComplete(value) {
      if (checkArray(value.checkboxAttribute.value)) {
        this.$message(
          '选中了' +
            value.checkboxAttribute.value
              .map((item) => {
                return item.user.id
              })
              .toString()
        )
      }
    },
  },
}
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkData1',
  components: {},
  data() {
    return {
      checkboxAttribute: {
        type: 'user.id',
        value: [
          {
            user: {
              id: 33,
            },
          },
        ],
      },
      column1: [
        {
          prop: 'user.id',
          label: '编号',
        },
        {
          prop: 'user.name',
          label: '名称',
        },

        {
          type: 'date',
          prop: 'user.mtime',
          label: '年月日  超出宽度展示提示框',
          width: 100,
          showOverflowTooltip: true,
        },
      ],
    }
  },
  methods: {
    selectComplete(value) {
      if (checkArray(value.checkboxAttribute.value)) {
        this.$message(
          '选中了' +
            value.checkboxAttribute.value
              .map((item) => {
                return item.user.id
              })
              .toString()
        )
      }
    },
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
