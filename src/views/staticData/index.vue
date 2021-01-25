<template>
  <div>
    <wyhElementTable :column="column" :list="list"></wyhElementTable>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column="column" :list="list"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
      column: [
        {
          prop: 'name',
          label: '名称',
        },
      ],
      list: [],
    }
  },
  created() {
    for (let index = 0; index &lt; 50; index++) {
      this.list.push({ name: index })
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
  name: 'staticData',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'name',
          label: '名称',
        },
      ],
      list: [],
    }
  },
  created() {
    for (let index = 0; index < 50; index++) {
      this.list.push({ name: index })
    }
  },
}
</script>
<style scoped lang="scss">
</style>
