<template>
  <div>
    <wyhElementTable
      type="radio"
      :column="column1"
      @selectComplete="selectComplete"
      listServe="/getList1"
      :radioAttribute="radioAttribute"
    ></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;type="radio"
      :column="column1"
      @selectComplete="selectComplete"
      listServe="/getList1"
      :radioAttribute="radioAttribute"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
      checkboxAttribute: {
        type: &#x27;user.id&#x27;,
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
          prop: &#x27;user.id&#x27;,
          label: &#x27;编号&#x27;,
        },
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
        },

        {
          type: &#x27;date&#x27;,
          prop: &#x27;user.mtime&#x27;,
          label: &#x27;年月日  超出宽度展示提示框&#x27;,
          width: 100,
          showOverflowTooltip: true,
        },
      ],
    }
  },
   methods: {
    selectComplete(value) {
      this.$message('选中了' + value.currentRow.user.id)
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
  name: 'radioData',
  components: {},
  data() {
    return {
      radioAttribute: {
        label: '选择',
        type: 'user.id',
        value: {
          user: {
            id: 11,
          },
        },
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
      this.$message('选中了' + value.currentRow.user.id)
    },
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
