<template>
  <div>
    <wyhElementTable :column="column" :merge="['status']" listServe="/getList"></wyhElementTable>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column=&quot;column&quot; :merge=&quot;[&#x27;status&#x27;]&quot; listServe=&quot;/getList&quot;&gt;&lt;/wyhElementTable&gt;
  data() {
    return {
      column: [
        {
          prop: &#x27;name&#x27;,
          label: &#x27;姓名&#x27;,
          width: &#x27;120&#x27;,
        },
        {
          type: &#x27;boolean&#x27;,
          prop: &#x27;status&#x27;,
          label: &#x27;状态&#x27;,
        },
      ],
    }
  },
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dynamicallyMergeTables',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'name',
          label: '姓名',
          width: '120',
        },
        {
          type: 'boolean',
          prop: 'status',
          label: '状态',
        },
      ],
    }
  },
  created() {},
}
</script>
<style scoped lang="scss">
</style>
