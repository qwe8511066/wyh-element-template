<template>
  <div>
    <h3>F12 查看参数的变化</h3>
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

    <wyhElementTable :myPages="myPages" ref="wyhElementTable" :column="column" listServe="/getList"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column="column" listServe="/getList"&gt;
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
