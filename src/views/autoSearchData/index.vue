<template>
  <div>
    <h3>F12 查看请求的变化</h3>
    <el-form ref="form" :model="myPages" label-width="180px" class="myForm">
      <el-form-item label="id的设置">
        <el-input v-model="myPages.test.id"></el-input>
      </el-form-item>
      <el-form-item label="name的设置">
        <el-input v-model="myPages.admin.user.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="resetFn">重置</el-button>
        <el-button type="primary" @click="searchFn">搜索</el-button>
      </el-form-item>
    </el-form>

    <wyhElementTable
      :myPages="myPages"
      :autoSearch="true"
      :autoSearchTime="333"
      ref="wyhElementTable"
      :column="column"
      listServe="/getList"
    ></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
          &lt;el-form ref=&quot;form&quot; :model=&quot;myPages&quot; label-width=&quot;180px&quot; class=&quot;myForm&quot;&gt;
      &lt;el-form-item label=&quot;id的设置&quot;&gt;
        &lt;el-input v-model=&quot;myPages.test.id&quot;&gt;&lt;/el-input&gt;
      &lt;/el-form-item&gt;
      &lt;el-form-item label=&quot;name的设置&quot;&gt;
        &lt;el-input v-model=&quot;myPages.admin.user.name&quot;&gt;&lt;/el-input&gt;
      &lt;/el-form-item&gt;

      &lt;el-form-item&gt;
        &lt;el-button type=&quot;primary&quot; @click=&quot;resetFn&quot;&gt;重置&lt;/el-button&gt;
        &lt;el-button type=&quot;primary&quot; @click=&quot;searchFn&quot;&gt;搜索&lt;/el-button&gt;
      &lt;/el-form-item&gt;
    &lt;/el-form&gt;
    &lt;wyhElementTable :column="column" ref="wyhElementTable" :autoSearchTime="333" :autoSearch="true" listServe="/getList"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
      myPages: {
        test: {
          id: 1,
        },
        admin: {
          user: {
            name: 'wyh',
          },
        },
      },
      column: [
        {
          prop: 'name',
          label: '名称',
        },
      ],
    }
  },
  methods: {
    searchFn() {
      this.$refs.wyhElementTable.search()
    },
    resetFn(value) {
      this.$refs.wyhElementTable.reset()
    },
  },
  </pre>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resetMyPages',
  components: {},
  data() {
    return {
      myPages: {
        test: {
          id: 1,
        },
        admin: {
          user: {
            name: 'wyh',
          },
        },
      },
      column: [
        {
          prop: 'name',
          label: '名称',
        },
      ],
    }
  },
  methods: {
    searchFn() {
      this.$refs.wyhElementTable.search()
    },
    resetFn(value) {
      this.$refs.wyhElementTable.reset()
    },
  },
  created() {},
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
.myForm {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}
</style>
