<template>
  <div>
    <wyhElementTable type="radio" :column="column" listServe="/getThetree"></wyhElementTable>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column="column" listServe="/getThetree"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
      column: [
        {
          prop: 'id',
          label: '编号',
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'mtime',
          label: '日期',
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
  name: 'thetreeData',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'id',
          label: '编号',
        },
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'mtime',
          label: '日期',
        },
      ],
    }
  },
  created() {},
}
</script>
<style scoped lang="scss">
</style>
