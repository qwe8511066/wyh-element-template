<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList" :spanMethod="arraySpanMethod"></wyhElementTable>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
          &lt;wyhElementTable :column=&quot;column&quot; listServe=&quot;/getList&quot; :spanMethod=&quot;arraySpanMethod&quot;&gt;&lt;/wyhElementTable&gt;
    data() {
    return {
      column: [
        {
          prop: &#x27;name&#x27;,
          label: &#x27;姓名&#x27;,
          width: &#x27;120&#x27;,
        },

        {
          type: &#x27;date&#x27;,
          prop: &#x27;mtime&#x27;,
          label: &#x27;年月日&#x27;,
        },
        {
          type: &#x27;boolean&#x27;,
          prop: &#x27;status&#x27;,
          label: &#x27;状态&#x27;,
        },
      ],
    }
  }, 
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (row.status) {
        return {
          rowspan: 1,
          colspan: 2,
        }
      }
    },
  },
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manuallyMergeTables',
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
          type: 'date',
          prop: 'mtime',
          label: '年月日',
        },
        {
          type: 'boolean',
          prop: 'status',
          label: '状态',
        },
      ],
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (row.status) {
        return {
          rowspan: 1,
          colspan: 2,
        }
      }
    },
  },
}
</script>
<style scoped lang="scss">
</style>
