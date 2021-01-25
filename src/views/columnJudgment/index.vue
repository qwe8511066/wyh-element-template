<template>
  <div>
    <el-switch
      v-model="value"
      @change="changeSwitch"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
    <span style="color:red">隐藏或者展示头像</span>
    <wyhElementTable :column="column" ref="wyhElementTable" listServe="/getList1"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>  
          &lt;el-switch
      v-model=&quot;value&quot;
      @change=&quot;changeSwitch&quot;
      active-color=&quot;#13ce66&quot;
      inactive-color=&quot;#ff4949&quot;
    &gt;&lt;/el-switch&gt;
        &lt;wyhElementTable :column="column" ref="wyhElementTable" listServe="/getList1"
  &gt;  &lt;/wyhElementTable&gt;
 
  data() {
    return {
       value: true,
      column: [
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
        },
        {
          iif: (value) =&gt; {
            return this.value
          },
          width: 200,
          type: &#x27;img&#x27;,
          prop: &#x27;user.img&#x27;,
          label: &#x27;头像&#x27;,
        },
        {
          type: &#x27;boolean&#x27;,
          prop: &#x27;user.status&#x27;,
          label: &#x27;状态&#x27;,
        },
      ],
    }
  }, 
  methods: {
    changeSwitch(value) {
      this.$refs.wyhElementTable.resetColumn()
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
  name: 'columnJudgment',
  components: {},
  data() {
    return {
      value: true,
      column: [
        {
          prop: 'user.name',
          label: '名称',
        },
        {
          iif: (value) => {
            return this.value
          },
          width: 200,
          type: 'img',
          prop: 'user.img',
          label: '头像',
        },
        {
          type: 'boolean',
          prop: 'user.status',
          label: '状态',
        },
      ],
    }
  },
  methods: {
    changeSwitch(value) {
      this.$refs.wyhElementTable.resetColumn()
    },
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
