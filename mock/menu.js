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
          children: [{
            path: '/staticData',
            name: '静态列表',
            component: 'views//staticData/index',
            title: '静态列表', icon: 'dashboard'
          }]
        },

        {
          path: '/requestData',
          component: 'layout/index',
          redirect: '/requestData',
          children: [{
            path: '/requestData',
            name: '接口表单(post 按钮权限)',
            component: 'views//requestData/index',
            title: '接口表单(post 按钮权限)', icon: 'dashboard',
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
          }]
        },

        {
          path: '/requestData3',
          component: 'layout/index',
          redirect: '/requestData3',
          children: [{
            path: '/requestData3',
            name: '接口表单(get 按钮权限)',
            component: 'views//requestData3/index',
            title: '接口表单(get 按钮权限)', icon: 'dashboard',
            permissionButtons: [
              {
                label: '编辑',
                icon: 'el-icon-edit'
              },
            ],
          }]
        },
        {
          path: '/requestData1',
          component: 'layout/index',
          redirect: '/requestData1',
          children: [{
            path: '/requestData1',
            name: '接口返回对象不一致表单',
            component: 'views//requestData1/index',
            title: '接口返回对象不一致的表单', icon: 'dashboard'
          }]
        },

        {
          path: '/requestData2',
          component: 'layout/index',
          redirect: '/requestData2',
          children: [{
            path: '/requestData2',
            name: '接口PageSize不一致表单',
            component: 'views//requestData2/index',
            title: '接口PageSize不一致的表单', icon: 'dashboard'
          }]
        },

        {
          path: '/customColumn',
          component: 'layout/index',
          redirect: '/customColumn',
          children: [{
            path: '/customColumn',
            name: '自定义列(按钮权限)',
            component: 'views//customColumn/index',
            title: '自定义列(按钮权限)', icon: 'dashboard',
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
          }]
        },

        {
          path: '/columnJudgment',
          component: 'layout/index',
          redirect: '/columnJudgment',
          children: [{
            path: '/columnJudgment',
            name: '列的判断',
            component: 'views//columnJudgment/index',
            title: '根据字段隐藏或显示列', icon: 'dashboard'
          }]
        },

        {
          path: '/setListTable',
          component: 'layout/index',
          redirect: '/setListTable',
          children: [{
            path: '/setListTable',
            name: '设置和获取list',
            component: 'views//setListTable/index',
            title: '设置和获取list', icon: 'dashboard'
          }]
        },

        {
          path: '/complexData',
          component: 'layout/index',
          redirect: '/complexData',
          children: [{
            path: '/complexData',
            name: '复杂自定义表单',
            component: 'views//complexData/index',
            title: '复杂自定义表单', icon: 'dashboard'
          }]
        },

        {
          path: '/radioData',
          component: 'layout/index',
          redirect: '/radioData',
          children: [{
            path: '/radioData',
            name: '单选表单',
            component: 'views//radioData/index',
            title: '单选表单', icon: 'dashboard'
          }]
        },

        {
          path: '/checkData',
          component: 'layout/index',
          redirect: '/checkData',
          children: [{
            path: '/checkData',
            name: '多选列表更新不清空已选',
            component: 'views//checkData/index',
            title: '多选列表更新不清空已选', icon: 'dashboard'
          }]
        },

        {
          path: '/checkData1',
          component: 'layout/index',
          redirect: '/checkData1',
          children: [{
            path: '/checkData1',
            name: '多选列表更新清空已选',
            component: 'views//checkData1/index',
            title: '多选列表更新清空已选', icon: 'dashboard'
          }]
        },

        {
          path: '/resetMyPages',
          component: 'layout/index',
          redirect: '/resetMyPages',
          children: [{
            path: '/resetMyPages',
            name: '重置myPages',
            component: 'views//resetMyPages/index',
            title: '重置myPages', icon: 'dashboard'
          }]
        },

        {
          path: '/autoSearchData',
          component: 'layout/index',
          redirect: '/autoSearchData',
          children: [{
            path: '/autoSearchData',
            name: 'myPages变了自动搜索列表',
            component: 'views//autoSearchData/index',
            title: 'myPages变了自动搜索列表', icon: 'dashboard'
          }]
        },

        {
          path: '/maxheightData',
          component: 'layout/index',
          redirect: '/maxheightData',
          children: [{
            path: '/maxheightData',
            name: '流动高度列表',
            component: 'views//maxheightData/index',
            title: '流动高度列表', icon: 'dashboard'
          }]
        },

        {
          path: '/thetreeData',
          component: 'layout/index',
          redirect: '/thetreeData',
          children: [{
            path: '/thetreeData',
            name: '树形列表分页的',
            component: 'views//thetreeData/index',
            title: '树形列表分页的', icon: 'dashboard'
          }]
        },

        {
          path: '/thetreeData1',
          component: 'layout/index',
          redirect: '/thetreeData1',
          children: [{
            path: '/thetreeData1',
            name: '树形列表不带分页的',
            component: 'views//thetreeData1/index',
            title: '树形列表不带分页的', icon: 'dashboard'
          }]
        },

        {
          path: '/multiLevelHeader',
          component: 'layout/index',
          redirect: '/multiLevelHeader',
          children: [{
            path: '/multiLevelHeader',
            name: '多级表头',
            component: 'views//multiLevelHeader/index',
            title: '多级表头', icon: 'dashboard'
          }]
        },

        {
          path: '/dynamicallyMergeTables',
          component: 'layout/index',
          redirect: '/dynamicallyMergeTables',
          children: [{
            path: '/dynamicallyMergeTables',
            name: '动态合并表格',
            component: 'views//dynamicallyMergeTables/index',
            title: '动态合并表格', icon: 'dashboard'
          }]
        },

        {
          path: '/manuallyMergeTables',
          component: 'layout/index',
          redirect: '/manuallyMergeTables',
          children: [{
            path: '/manuallyMergeTables',
            name: '手动合并表格',
            component: 'views//manuallyMergeTables/index',
            title: '手动合并表格', icon: 'dashboard'
          }]
        },
        {
          path: '/totalAtTheEndOfTheTable',
          component: 'layout/index',
          redirect: '/totalAtTheEndOfTheTable',
          children: [{
            path: '/totalAtTheEndOfTheTable',
            name: '表尾合计',
            component: 'views//totalAtTheEndOfTheTable/index',
            title: '表尾合计', icon: 'dashboard'
          }]
        },


        {
          path: '/dialogWyhElementChoose',
          component: 'layout/index',
          redirect: '/dialogWyhElementChoose',
          title: '业务组件', icon: 'dashboard',
          children: [{
            path: '/dialogWyhElementChooseTabs',
            name: '列表选人(选项卡)',
            component: 'views//dialogWyhElementChooseTabs/index',
            title: '列表选人(选项卡)', icon: 'dashboard'
          },
          {
            path: '/dialogWyhElementChoose',
            name: '列表选人(多选)',
            component: 'views//dialogWyhElementChoose/index',
            title: '列表选人(多选)', icon: 'dashboard'
          },
          {
            path: '/dialogWyhElementChooseRadio',
            name: '列表选人(单选)',
            component: 'views//dialogWyhElementChooseRadio/index',
            title: '列表选人(单选)', icon: 'dashboard'
          },
          {
            path: '/dialogWyhElementChooseSelect',
            name: '下拉框单/多选人',
            component: 'views//dialogWyhElementChooseSelect/index',
            title: '下拉框单/多选人', icon: 'dashboard'
          },
          ]
        },

        {
          path: '/test',
          name: '测试界面1',
          //顶级菜单  模拟数据
          component: 'layout/index',
          title: '测试界面1',
          affix: false,//固定在tags-view 
          hidden: false, //是否隐藏
          bigScreen: false,//大屏(隐藏顶部和侧边栏) 
          children: [
            {
              path: '/test/test1',
              name: 'home1',
              component: '',
              title: '测试界面1-001',
              children: [
                {
                  path: '/test/test1/testA1',
                  name: 'home1',
                  component: 'views/home1/index',
                  title: '测试界面A1-001',
                },
                {
                  path: '/test/test1/testB2',
                  name: 'home1',
                  component: 'views/home1/index',
                  title: '测试界面B1-001',
                }
              ],
              affix: false,//固定在tags-view 
            }
          ]
        },
        {
          path: '/test/test2',
          name: 'home2',
          component: 'views/home2/index',
          title: '测试界面2-002',
          affix: false,//固定在tags-view 
        }
      ]
      return {
        code: 20000,
        data: value
      }
    }
  },


]
