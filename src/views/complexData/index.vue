<template>
  <div>
    <wyhElementTable
      type="checkbox"
      :checkboxAttribute="checkboxAttribute"
      :column="column1"
      listServe="/getList1"
    ></wyhElementTable>

    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
    &lt;wyhElementTable :column="column1" listServe="/getList1"&gt;
    &lt;/wyhElementTable&gt; 
  data() {
    return {
      column1: [
        {
          type: &#x27;buttons&#x27;,
          label: &#x27;操作按钮数组&#x27;,
          width: &#x27;300&#x27;,
          buttons: [
            {
              //按钮隐藏或展示
              iif: (scope) =&gt; scope.row.user.type == 1,
              text: &#x27;测试&#x27;,
              icon: &#x27;el-icon-upload&#x27;,
              type: &#x27;primary&#x27;,
              click: (scope, modal) =&gt; {
                this.$message(&#x27;点击了：&#x27; + scope.row.user.name)
              },
            },

            {
              text: &#x27;测试1&#x27;,
              click: (scope, modal) =&gt; {
                this.$message(&#x27;点击了：&#x27; + scope.row.user.name)
              },
            },

            {
              text: &#x27;测试多类型&#x27;,

              //按钮下拉菜单的触发事件
              // trigger: &#x27;click&#x27;,
              children: [
                {
                  //按钮隐藏或展示
                  iif: (scope) =&gt; scope.row.user.type == 1,
                  text: &#x27;测试多类型1&#x27;,
                },

                {
                  text: &#x27;测试多类型2&#x27;,
                },

                {
                  text: &#x27;测试多类型3&#x27;,
                },
              ],

              //element 的写法不一致。不能放在里面
              click: (value, scope) =&gt; {
                this.$message(
                  &#x27;点击了：&#x27; + value + &#x27;       &#x27; + scope.row.user.name
                )
              },
            },
          ],
        },

        {
          type: &#x27;buttons&#x27;,
          label: &#x27;自定义按钮&#x27;,
          width: &#x27;300&#x27;,
          render: (h, scope) =&gt; {
            return (
              &lt;div&gt;
                &lt;el-button
                  type=&quot;text&quot;
                  //不能用@click  会跟冲突   得用这种的
                  onClick={(e) =&gt; {
                    this.$message(&#x27;点击了：自定义按钮1&#x27;)
                  }}
                &gt;
                  自定义按钮1
                &lt;/el-button&gt;

                &lt;el-button
                  type=&quot;text&quot;
                  //不能用@click  会跟冲突   得用这种的
                  onClick={(e) =&gt; {
                    this.$message(&#x27;点击了：自定义按钮2&#x27;)
                  }}
                &gt;
                  自定义按钮2
                &lt;/el-button&gt;
              &lt;/div&gt;
            )
          },
        },
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
        },
        {
          type: &#x27;date&#x27;,
          prop: &#x27;user.mtime&#x27;,
          label: &#x27;年月日  超出宽度展示提示框&#x27;,
          width: 100,
          showOverflowTooltip: true,
        },

        {
          dateType: &#x27;YYYY-MM-DD mm:hh:ss&#x27;,
          type: &#x27;date&#x27;,
          prop: &#x27;user.mtime&#x27;,
          label: &#x27;年月日 时分秒&#x27;,
        },
        {
          type: &#x27;enum&#x27;,
          prop: &#x27;user.type&#x27;,
          label: &#x27;类型&#x27;,
          enumValue: {
            1: {
              text: &#x27;开始&#x27;,
              color: &#x27;#3498db&#x27;,
            },
            2: {
              text: &#x27;结束&#x27;,
              color: &#x27;#2ecc71&#x27;,
            },
            3: {
              text: &#x27;进行中&#x27;,
              color: &#x27;#7f8c8d&#x27;,
            },
            4: {
              text: &#x27;未开始&#x27;,
              color: &#x27;#95a5a6&#x27;,
            },
            5: {
              text: &#x27;撤销&#x27;,
              color: &#x27;#147258&#x27;,
            },
          },
        },
        {
          type: &#x27;boolean&#x27;,
          prop: &#x27;user.status&#x27;,
          label: &#x27;状态&#x27;,
        },

        {
          width: 200,
          type: &#x27;img&#x27;,
          prop: &#x27;user.img&#x27;,
          label: &#x27;头像&#x27;,
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
  name: 'complexData',
  components: {},
  data() {
    return {
      checkboxAttribute: {
        type: 'user.id',
        value: [
          {
            user: {
              id: 33,
            },
          },
        ],
      },
      column1: [
        {
          type: 'buttons',
          label: '操作按钮数组',
          width: '300',
          buttons: [
            {
              //按钮隐藏或展示
              iif: (scope) => scope.row.user.type == 1,
              text: '测试',
              icon: 'el-icon-upload',
              type: 'primary',
              click: (scope, modal) => {
                this.$message('点击了：' + scope.row.user.name)
              },
            },

            {
              text: '测试1',
              click: (scope, modal) => {
                this.$message('点击了：' + scope.row.user.name)
              },
            },

            {
              text: '测试多类型',

              //按钮下拉菜单的触发事件
              // trigger: 'click',
              children: [
                {
                  //按钮隐藏或展示
                  iif: (scope) => scope.row.user.type == 1,
                  text: '测试多类型1',
                },

                {
                  text: '测试多类型2',
                },

                {
                  text: '测试多类型3',
                },
              ],

              //element 的写法不一致。不能放在里面
              click: (value, scope) => {
                this.$message(
                  '点击了：' + value + '       ' + scope.row.user.name
                )
              },
            },
          ],
        },

        {
          type: 'buttons',
          label: '自定义按钮',
          width: '300',
          render: (h, scope) => {
            return (
              <div>
                <el-button
                  type="text"
                  //不能用@click  会跟冲突   得用这种的
                  onClick={(e) => {
                    this.$message('点击了：自定义按钮1')
                    e.stopPropagation()
                  }}
                >
                  自定义按钮1
                </el-button>

                <el-button
                  type="text"
                  //不能用@click  会跟冲突   得用这种的
                  onClick={(e) => {
                    this.$message('点击了：自定义按钮2')
                    e.stopPropagation()
                  }}
                >
                  自定义按钮2
                </el-button>
              </div>
            )
          },
        },
        {
          prop: 'user.name',
          label: '名称',
        },
        {
          type: 'date',
          prop: 'user.mtime',
          label: '年月日  超出宽度展示提示框',
          width: 100,
          showOverflowTooltip: true,
        },

        {
          dateType: 'YYYY-MM-DD mm:hh:ss',
          type: 'date',
          prop: 'user.mtime',
          label: '年月日 时分秒',
        },
        {
          type: 'enum',
          prop: 'user.type',
          label: '类型',
          enumValue: {
            1: {
              text: '开始',
              color: '#3498db',
            },
            2: {
              text: '结束',
              color: '#2ecc71',
            },
            3: {
              text: '进行中',
              color: '#7f8c8d',
            },
            4: {
              text: '未开始',
              color: '#95a5a6',
            },
            5: {
              text: '撤销',
              color: '#147258',
            },
          },
        },
        {
          type: 'boolean',
          prop: 'user.status',
          label: '状态',
        },

        {
          width: 200,
          type: 'img',
          prop: 'user.img',
          label: '头像',
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
