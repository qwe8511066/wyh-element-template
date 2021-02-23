<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="auto" class="autoForm">
      <wyhElementTable :list="form.list" :isPagination="false">
        <template slot="item">
          <el-table-column label="操作" width="120">
            <template slot-scope="{row,$index}">
              <el-button
                type="primary"
                @click="clickUpdateType(row,$index)"
              >{{row.updateType?'保存':'编辑'}}</el-button>
            </template>
          </el-table-column>
          <el-table-column label="名字" width="120" class-name="requiredStars">
            <template slot-scope="{row,$index}">
              <el-form-item
                :rules="rules.name"
                :prop="`list[${$index}].name`"
                v-if="row.updateType"
              >
                <el-input v-model="row.name" placeholder="请输入内容"></el-input>
              </el-form-item>
              <div v-else>{{row.name+ "__下标="+$index}}</div>
            </template>
          </el-table-column>

          <el-table-column label="日期" width="200" class-name="requiredStars">
            <template slot-scope="{row,$index}">
              <el-form-item
                :rules="rules.date"
                :prop="`list[${$index}].date`"
                v-if="row.updateType"
              >
                <el-date-picker v-model="row.date" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <div v-else>{{row.date+ "__下标="+$index}}</div>
            </template>
          </el-table-column>

          <el-table-column label="类型" width="200" class-name="requiredStars">
            <template slot-scope="{row,$index}">
              <el-form-item
                :rules="rules.status"
                :prop="`list[${$index}].status`"
                v-if="row.updateType"
              >
                <el-select v-model="row.status" placeholder="请选择" clearable>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <div v-else>{{row.status+ "__下标="+$index}}</div>
            </template>
          </el-table-column>

          <el-table-column label="状态" width="200" class-name="requiredStars">
            <template slot-scope="{row,$index}">
              <div v-if="row.updateType">
                <el-switch v-model="row.type" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </div>
              <div v-else>{{row.type?'是':'否' + "__下标="+$index}}</div>
            </template>
          </el-table-column>

          <el-table-column label="数字框" width="200" class-name="requiredStars">
            <template slot-scope="{row,$index}">
              <el-form-item
                :rules="rules.number"
                :prop="`list[${$index}].number`"
                v-if="row.updateType"
              >
                <el-input-number v-model="row.number" placeholder="请输入内容"></el-input-number>
              </el-form-item>
              <div v-else>{{row.number+ "__下标="+$index}}</div>
            </template>
          </el-table-column>
        </template>
      </wyhElementTable>
    </el-form>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>  
          &lt;wyhElementTable :column=&quot;column&quot; listServe=&quot;/getList1&quot;&gt;
      &lt;template slot=&quot;item&quot;&gt;
        &lt;el-table-column label=&quot;日期&quot; width=&quot;320&quot;&gt;
          &lt;template slot-scope=&quot;{row,$index}&quot;&gt;{{`row.user.mtime`}}&lt;/template&gt;
        &lt;/el-table-column&gt;

        &lt;el-table-column label=&quot;图片&quot; width=&quot;320&quot;&gt;
          &lt;template slot-scope=&quot;{row}&quot;&gt;
            &lt;el-image style=&quot;width: 50px; height: 50px&quot; :src=&quot;row.user.img&quot;&gt;&lt;/el-image&gt;
          &lt;/template&gt;
        &lt;/el-table-column&gt;
      &lt;/template&gt;
    &lt;/wyhElementTable&gt;
 
  data() {
    return {
      column: [
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
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
  name: 'rowUpdate',
  components: {},
  data() {
    return {
      form: {
        list: [],
      },
      rules: {
        name: [{ required: true, message: '这是必填项', trigger: 'change' }],
        status: [{ required: true, message: '这是必填项', trigger: 'change' }],
        date: [{ required: true, message: '这是必填项', trigger: 'change' }],
        number: [{ required: true, message: '这是必填项', trigger: 'change' }],
      },

      options: [
        {
          value: '1',
          label: '黄金糕',
        },
        {
          value: '2',
          label: '双皮奶',
        },
        {
          value: '3',
          label: '蚵仔煎',
        },
        {
          value: '4',
          label: '龙须面',
        },
        {
          value: '5',
          label: '北京烤鸭',
        },
      ],
    }
  },
  created() {
    for (let index = 0; index < 10; index++) {
      this.form.list.push({
        name: index,
        date: new Date(),
        status: this.getRandomInt(1, 5) + '',
        type: this.getRandomInt(1, 2) == 1 ? true : false,
        number: this.getRandomInt(1, 200),
        updateType: false,
      })
    }
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    clickUpdateType(row, index) {
      if (row.updateType) {
        this.$message(JSON.stringify(row) + ' ----下标：' + index)
      }
      this.$refs.form.validate((valid) => {
        if (valid) {
          row.updateType = !row.updateType
        } else {
        }
      })
    },
  },
}
</script>
<style scoped lang="scss">
.box-card {
  margin-bottom: 18px;
}
</style>
