<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList" @onGetList="onGetList"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;:column="column" listServe="/getList" @onGetList="onGetList"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
       column: [
        {
          prop: 'name',
          label: '名称',
        },
        {
          prop: 'test',
          label: '测试数据',
        },
      ],
    }
  }, 
  methods: {
    onGetList(value) {
      value.data.list.forEach((item, index) => {
        item.test = '测试' + index
        item.name = '名字' + index
      })
      this.$message('数据：' + JSON.stringify(value.data))
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
  name: 'setListTable',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'name',
          label: '名称',
        },
        {
          prop: 'test',
          label: '测试数据',
        },
      ],
    }
  },
  methods: {
    onGetList(value) {
      value.data.data.list.forEach((item, index) => {
        item.test = '测试' + index
        item.name = '名字' + index
      })
      this.$message('数据：' + JSON.stringify(value.data))
    },
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
