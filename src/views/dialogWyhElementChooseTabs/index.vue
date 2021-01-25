<template>
  <div>
    <dialogWyhElementChooseTabs :tabs="tabs" :rightColumn="rightColumn" :tabsActive="tabsActive"></dialogWyhElementChooseTabs>
    <div class="padding20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码片段</span>
        </div>
        <pre>
        &lt;dialogWyhElementChooseTabs :tabs=&quot;tabs&quot; :rightColumn=&quot;rightColumn&quot; :tabsActive=&quot;tabsActive&quot;&gt;&lt;/dialogWyhElementChooseTabs&gt;
  data() {
    return {
      tabsActive: 0,
      tabs: [
        {
          label: &#x27;多选列表01&#x27;,
          listServe: &#x60;/getList1&#x60;,
          //checkbox 的判断
          checkboxAttribute: {
            //判断的属性 唯一值来判断
            type: &#x27;user.id&#x27;,

            //默认值   外部传默认值进来
            value: [
              {
                user: {
                  id: 11,
                  name: &#x27;测试1&#x27;,
                },
              },
              {
                user: {
                  id: 12,
                  name: &#x27;测试2&#x27;,
                },
              },
            ],
          },
          type: &#x27;checkbox&#x27;,
          column: [
            {
              prop: &#x27;user.name&#x27;,
              label: &#x27;名称&#x27;,
            },
            {
              type: &#x27;date&#x27;,
              prop: &#x27;user.mtime&#x27;,
              label: &#x27;年月日&#x27;,
            },
          ],
        },

        {
          label: &#x27;单选列表01&#x27;,
          listServe: &#x60;/getList1&#x60;,
          radioAttribute: {
            //判断的属性 唯一值来判断
            type: &#x27;user.id&#x27;,

            value: {
              user: {
                name: &#x27;radio111&#x27;,
                id: 11,
              },
            },
          },
          type: &#x27;radio&#x27;,
          column: [
            {
              prop: &#x27;user.name&#x27;,
              label: &#x27;名称&#x27;,
            },
            {
              type: &#x27;date&#x27;,
              prop: &#x27;user.mtime&#x27;,
              label: &#x27;年月日&#x27;,
            },
          ],
        },

        {
          label: &#x27;多选列表02&#x27;,
          listServe: &#x60;/getList1&#x60;,
          //checkbox 的判断
          checkboxAttribute: {
            //判断的属性 唯一值来判断
            type: &#x27;user.id&#x27;,

            //默认值   外部传默认值进来
            value: [
              {
                user: {
                  id: 17,
                  name: &#x27;测试1&#x27;,
                },
              },
              {
                user: {
                  id: 18,
                  name: &#x27;测试2&#x27;,
                },
              },
            ],
          },
          type: &#x27;checkbox&#x27;,
          column: [
            {
              prop: &#x27;user.name&#x27;,
              label: &#x27;名称&#x27;,
            },
            {
              type: &#x27;date&#x27;,
              prop: &#x27;user.mtime&#x27;,
              label: &#x27;年月日&#x27;,
            },
          ],
        },

        {
          label: &#x27;单选列表02&#x27;,
          listServe: &#x60;/getList1&#x60;,
          radioAttribute: {
            //判断的属性 唯一值来判断
            type: &#x27;user.id&#x27;,

            value: {
              user: {
                name: &#x27;radio111&#x27;,
                id: 19,
              },
            },
          },
          type: &#x27;radio&#x27;,
          column: [
            {
              prop: &#x27;user.name&#x27;,
              label: &#x27;名称&#x27;,
            },
            {
              type: &#x27;date&#x27;,
              prop: &#x27;user.mtime&#x27;,
              label: &#x27;年月日&#x27;,
            },
          ],
        },
      ],

      rightColumn: [
        {
          prop: &#x27;user.name&#x27;,
          label: &#x27;名称&#x27;,
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
  name: 'dialogWyhElementChooseTabsIndex',
  components: {},
  data() {
    return {
      tabsActive: 0,
      tabs: [
        {
          label: '多选列表01',
          listServe: `/getList1`,
          //checkbox 的判断
          checkboxAttribute: {
            //判断的属性 唯一值来判断
            type: 'user.id',

            //默认值   外部传默认值进来
            value: [
              {
                user: {
                  id: 11,
                  name: '测试1',
                },
              },
              {
                user: {
                  id: 12,
                  name: '测试2',
                },
              },
            ],
          },
          type: 'checkbox',
          column: [
            {
              prop: 'user.name',
              label: '名称',
            },
            {
              type: 'date',
              prop: 'user.mtime',
              label: '年月日',
            },
          ],
        },

        {
          label: '单选列表01',
          listServe: `/getList1`,
          radioAttribute: {
            //判断的属性 唯一值来判断
            type: 'user.id',

            value: {
              user: {
                name: 'radio111',
                id: 11,
              },
            },
          },
          type: 'radio',
          column: [
            {
              prop: 'user.name',
              label: '名称',
            },
            {
              type: 'date',
              prop: 'user.mtime',
              label: '年月日',
            },
          ],
        },

        {
          label: '多选列表02',
          listServe: `/getList1`,
          //checkbox 的判断
          checkboxAttribute: {
            //判断的属性 唯一值来判断
            type: 'user.id',

            //默认值   外部传默认值进来
            value: [
              {
                user: {
                  id: 17,
                  name: '测试1',
                },
              },
              {
                user: {
                  id: 18,
                  name: '测试2',
                },
              },
            ],
          },
          type: 'checkbox',
          column: [
            {
              prop: 'user.name',
              label: '名称',
            },
            {
              type: 'date',
              prop: 'user.mtime',
              label: '年月日',
            },
          ],
        },

        {
          label: '单选列表02',
          listServe: `/getList1`,
          radioAttribute: {
            //判断的属性 唯一值来判断
            type: 'user.id',

            value: {
              user: {
                name: 'radio111',
                id: 19,
              },
            },
          },
          type: 'radio',
          column: [
            {
              prop: 'user.name',
              label: '名称',
            },
            {
              type: 'date',
              prop: 'user.mtime',
              label: '年月日',
            },
          ],
        },
      ],

      rightColumn: [
        {
          prop: 'user.name',
          label: '名称',
        },
      ],
    }
  },
  methods: {},
  created() {},
}
</script>
 
