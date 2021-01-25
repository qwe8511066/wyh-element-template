<template>
  <div>
    <wyhElementTable
      :column="column"
      listServe="/getList2"
      definitionTotal="data.test1.total"
      definitionData="data.test1.test12.data"
    ></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;:column="column" listServe="/getList2"  definitionTotal="test1.total"
      definitionData="test1.test12.data"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
       column: [
        {
          prop: 'name',
          label: '名称',
        },
      ],
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
  name: 'requestData1',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'user.name',
          label: '名称',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
