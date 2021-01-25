<template>
  <div>
    <!-- isPagination 是否要分页  一般都是要的。除非是树形列表-->
    <wyhElementTable type="radio" :isPagination="false" :column="column" listServe="/getThetree"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
         &lt;!-- isPagination 是否要分页 --&gt;
    &lt;wyhElementTable :isPagination="false" :column="column" listServe="/getThetree"&gt;
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
  name: 'thetreeData1',
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
