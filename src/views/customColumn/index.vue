<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList1">
      <template slot="item">
        <el-table-column label="日期" width="320">
          <template slot-scope="{row,$index}">{{row.user.mtime + "__下标="+$index}}</template>
        </el-table-column>

        <el-table-column label="图片" width="320">
          <template slot-scope="{row}">
            <el-image style="width: 50px; height: 50px" :src="row.user.img"></el-image>
          </template>
        </el-table-column>
      </template>
    </wyhElementTable>

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
  name: 'customColumn',
  components: {},
  data() {
    return {
      column: [
        {
          label: '操作',
          render: (h, scope) => {
            return (
              <div class="buttonDivide">
                <buttonPermission
                  name="新增"
                  //二次校验  菜单下的按钮->判断状态
                  iif={() => scope.row.user.status}
                  type="text"
                  onClick={() => console.log('新增')}
                  size="small"
                ></buttonPermission>

                <buttonPermission
                  name="编辑"
                  type="text"
                  //二次校验  菜单下的按钮->判断状态
                  iif={() => scope.row.user.status}
                  onClick={() => console.log('编辑')}
                  size="small"
                ></buttonPermission>

                <buttonPermission
                  name="查看"
                  type="text"
                  //二次校验  菜单下的按钮->判断状态
                  iif={() => scope.row.user.status}
                  onClick={() => console.log('查看')}
                  size="small"
                ></buttonPermission>

                <buttonPermission
                  name="删除"
                  //二次校验  菜单下的按钮->判断状态
                  iif={() => scope.row.user.status}
                  type="text"
                  onClick={() => console.log('删除')}
                  size="small"
                ></buttonPermission>
              </div>
            )
          },
        },
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
