<template>
  <div>
    <wyhElementTable :column="column" listServe="/getList4" listServeMethod="get"></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;:column="column" listServe="/getList"&gt;
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
  name: 'requestData3',
  components: {},
  data() {
    return {
      column: [
        {
          prop: 'user.name',
          label: '名称',
        },
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
