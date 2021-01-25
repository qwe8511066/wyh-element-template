<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList1"></wyhElementTable>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable
     :column="column" listServe="/getList1"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
     column: [
        {
          label: '合并姓名和年月日',
          children: [
            {
              prop: 'user.name',
              label: '姓名',
              width: '120',
            },
            {
              type: 'date',
              prop: 'user.mtime',
              label: '年月日   展示提示框',
              showOverflowTooltip: true,
            },
          ],
        },
      ],
    }
  },
}
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'multiLevelHeader',
  components: {},
  data() {
    return {
      column: [
        {
          label: '合并姓名和年月日',
          children: [
            {
              prop: 'user.name',
              label: '姓名',
              width: '120',
            },
            {
              type: 'date',
              prop: 'user.mtime',
              label: '年月日   展示提示框',
              showOverflowTooltip: true,
            },
          ],
        },
      ],
    }
  },
  created() {},
}
</script>
<style scoped lang="scss">
</style>
