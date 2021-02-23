module.exports = [
  // user login
  {
    url: '/getMenu',
    type: 'get',
    response: config => {
      const value = [
        {
          component: 'layout/index',
          path: '/staticData',
          name: '列表通用组件',
          title: '列表通用组件',
          children: [
            {
              path: '/staticData',
              name: '静态列表',
              component: 'views/staticData/index',
              title: '静态列表', icon: 'el-icon-s-help'
            },

            {
              path: '/requestData',
              name: '接口表单(post 按钮权限)',
              component: 'views/requestData/index',
              title: '接口表单(post 按钮权限)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '新增',
                  icon: 'el-icon-edit'
                },
                {
                  label: '删除',
                  icon: 'el-icon-delete'
                },
              ]
            },
            {
              path: '/requestData3',
              name: '接口表单(get 按钮权限)',
              component: 'views/requestData3/index',
              title: '接口表单(get 按钮权限)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
              ],
            },
            {
              path: '/requestData1',
              name: '接口返回对象不一致表单',
              component: 'views/requestData1/index',
              title: '接口返回对象不一致的表单', icon: 'el-icon-s-help'
            },
            {
              path: '/requestData2',
              name: '接口PageSize不一致表单',
              component: 'views/requestData2/index',
              title: '接口PageSize不一致的表单', icon: 'el-icon-s-help'
            },
            {
              path: '/customColumn',
              name: '自定义列(按钮权限)',
              component: 'views/customColumn/index',
              title: '自定义列(按钮权限)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '新增',
                  icon: 'el-icon-folder-add'
                },
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
                {
                  label: '查看',
                  icon: 'el-icon-view'
                },
                {
                  label: '删除',
                  icon: 'el-icon-delete'
                },
              ],
            },
            {
              path: '/columnJudgment',
              name: '列的判断',
              component: 'views/columnJudgment/index',
              title: '根据字段隐藏或显示列', icon: 'el-icon-s-help'
            },
            {
              path: '/setListTable',
              name: '设置和获取list',
              component: 'views/setListTable/index',
              title: '设置和获取list', icon: 'el-icon-s-help'
            }, {
              path: '/complexData',
              name: '复杂自定义表单',
              component: 'views/complexData/index',
              title: '复杂自定义表单', icon: 'el-icon-s-help'
            },
            {
              path: '/rowUpdate',
              name: '行编辑',
              component: 'views/rowUpdate/index',
              title: '行编辑', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
              ],
            }, {
              path: '/radioData',
              name: '单选表单',
              component: 'views/radioData/index',
              title: '单选表单', icon: 'el-icon-s-help'
            }, {
              path: '/checkData',
              name: '多选列表更新不清空已选',
              component: 'views/checkData/index',
              title: '多选列表更新不清空已选', icon: 'el-icon-s-help'
            },
            {
              path: '/checkData1',
              name: '多选列表更新清空已选',
              component: 'views/checkData1/index',
              title: '多选列表更新清空已选', icon: 'el-icon-s-help'
            }, {
              path: '/resetMyPages',
              name: '重置myPages',
              component: 'views/resetMyPages/index',
              title: '重置myPages', icon: 'el-icon-s-help'
            }, {
              path: '/autoSearchData',
              name: 'myPages变了自动搜索列表',
              component: 'views/autoSearchData/index',
              title: 'myPages变了自动搜索列表', icon: 'el-icon-s-help'
            }, {
              path: '/maxheightData',
              name: '流动高度列表',
              component: 'views/maxheightData/index',
              title: '流动高度列表', icon: 'el-icon-s-help'
            },

            {
              path: '/thetreeData',
              name: '树形列表分页的',
              component: 'views/thetreeData/index',
              title: '树形列表分页的', icon: 'el-icon-s-help'
            }, {
              path: '/thetreeData1',
              name: '树形列表不带分页的',
              component: 'views/thetreeData1/index',
              title: '树形列表不带分页的', icon: 'el-icon-s-help'
            }, {
              path: '/multiLevelHeader',
              name: '多级表头',
              component: 'views/multiLevelHeader/index',
              title: '多级表头', icon: 'el-icon-s-help'
            }, {
              path: '/dynamicallyMergeTables',
              name: '动态合并表格',
              component: 'views/dynamicallyMergeTables/index',
              title: '动态合并表格', icon: 'el-icon-s-help'
            },
            {
              path: '/manuallyMergeTables',
              name: '手动合并表格',
              component: 'views/manuallyMergeTables/index',
              title: '手动合并表格', icon: 'el-icon-s-help'
            }, {
              path: '/totalAtTheEndOfTheTable',
              name: '表尾合计',
              component: 'views/totalAtTheEndOfTheTable/index',
              title: '表尾合计', icon: 'el-icon-s-help'
            },
          ]
        },

        {
          path: '/dialogWyhElementChoose',
          component: 'layout/index',
          redirect: '/dialogWyhElementChoose',
          title: '业务组件',
          name: '业务组件',
          icon: 'el-icon-s-help',
          children: [{
            path: '/dialogWyhElementChooseTabs',
            name: '列表选人(选项卡)',
            component: 'views/dialogWyhElementChooseTabs/index',
            title: '列表选人(选项卡)', icon: 'el-icon-s-help'
          },
          {
            path: '/dialogWyhElementChoose',
            name: '列表选人(多选)',
            component: 'views/dialogWyhElementChoose/index',
            title: '列表选人(多选)', icon: 'el-icon-s-help'
          },
          {
            path: '/dialogWyhElementChooseRadio',
            name: '列表选人(单选)',
            component: 'views/dialogWyhElementChooseRadio/index',
            title: '列表选人(单选)', icon: 'el-icon-s-help'
          },
          {
            path: '/dialogWyhElementChooseSelect',
            name: '下拉框单/多选人',
            component: 'views/dialogWyhElementChooseSelect/index',
            title: '下拉框单/多选人', icon: 'el-icon-s-help'
          },
          ]
        },

        {
          path: '/test',
          name: '自适应表单组件宽度',
          //顶级菜单  模拟数据
          component: 'layout/index',
          title: '自适应表单组件宽度',
          affix: false,//固定在tags-view 
          hidden: false, //是否隐藏
          bigScreen: false,//大屏(隐藏顶部和侧边栏) 
          children: [
            {
              path: '/test/test1',
              name: 'home1-001',
              component: '',
              title: '测试界面1-001',
              children: [
                {
                  path: '/test/test1/testA1',
                  name: 'home1',
                  component: 'views/formComponentWidth/index',
                  title: '测试界面A1-001',
                },
                {
                  path: '/test/test1/testB2',
                  name: 'home2',
                  component: 'views/home2/index',
                  title: '测试界面B1-001',
                }
              ],
              affix: false,//固定在tags-view 
            }
          ]
        },
        // {
        //   path: '/test/test2',
        //   name: 'home2',
        //   component: 'views/home2/index',
        //   title: '测试界面2-002',
        //   affix: false,//固定在tags-view 
        // }
      ]
      return {
        code: 20000,
        data: value
      }
    }
  },


]
