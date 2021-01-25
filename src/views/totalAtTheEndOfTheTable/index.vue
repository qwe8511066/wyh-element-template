<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList" :summaryMethod="summaryMethod"></wyhElementTable>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
   &lt;wyhElementTable :column=&quot;column&quot; listServe=&quot;/getList&quot; :summaryMethod=&quot;summaryMethod&quot;&gt;&lt;/wyhElementTable&gt;
  data() {
    return {
      column: [
        {
          prop: &#x27;unitPrice1&#x27;,
          label: &#x27;单价1&#x27;,
          width: &#x27;120&#x27;,
        },
        {
          prop: &#x27;unitPrice2&#x27;,
          label: &#x27;单价2&#x27;,
          width: &#x27;120&#x27;,
        },
        {
          prop: &#x27;unitPrice3&#x27;,
          label: &#x27;单价3&#x27;,
          width: &#x27;120&#x27;,
        },
        {
          prop: &#x27;unitPrice4&#x27;,
          label: &#x27;单价4&#x27;,
          width: &#x27;120&#x27;,
        },
        {
          prop: &#x27;unitPrice5&#x27;,
          label: &#x27;单价5&#x27;,
        },
      ],
    }
  },

  methods: {
    summaryMethod(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) =&gt; {
        if (index === 0) {
          sums[index] = &#x27;总价&#x27;
          return
        }
        const values = data.map((item) =&gt; Number(item[column.property]))
        if (!values.every((value) =&gt; isNaN(value))) {
          sums[index] = values.reduce((prev, curr) =&gt; {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += &#x27; 元&#x27;
        } else {
          sums[index] = &#x27;N/A&#x27;
        }
      })
      return sums
    },
  },
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'totalAtTheEndOfTheTable',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'unitPrice1',
          label: '单价1',
          width: '120',
        },
        {
          prop: 'unitPrice2',
          label: '单价2',
          width: '120',
        },
        {
          prop: 'unitPrice3',
          label: '单价3',
          width: '120',
        },
        {
          prop: 'unitPrice4',
          label: '单价4',
          width: '120',
        },
        {
          prop: 'unitPrice5',
          label: '单价5',
        },
      ],
    }
  },

  methods: {
    summaryMethod(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    },
  },
}
</script>
<style scoped lang="scss">
</style>
