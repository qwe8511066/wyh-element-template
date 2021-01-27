module.exports = [
  // user login
  {
    url: '/getMenu',
    type: 'get',
    response: config => {
      const value = [
        {
          // path: '/staticData',
          component: 'true',
          path: '/staticData',
          children: [{
            path: '/staticData',
            name: '静态列表',
            component: '/staticData/index',
            title: '静态列表', icon: 'dashboard'
          }]
        },

        {
          path: '/requestData',
          component: 'true',
          redirect: '/requestData',
          children: [{
            path: '/requestData',
            name: '接口表单(post axios)',
            component: '/requestData/index',
            title: '接口表单(post axios)', icon: 'dashboard'
          }]
        },

        {
          path: '/requestData3',
          component: 'true',
          redirect: '/requestData3',
          children: [{
            path: '/requestData3',
            name: '接口表单(get axios)',
            component: '/requestData3/index',
            title: '接口表单(get axios)', icon: 'dashboard'
          }]
        },
        {
          path: '/requestData1',
          component: 'true',
          redirect: '/requestData1',
          children: [{
            path: '/requestData1',
            name: '接口返回对象不一致表单',
            component: '/requestData1/index',
            title: '接口返回对象不一致的表单', icon: 'dashboard'
          }]
        },

        {
          path: '/requestData2',
          component: 'true',
          redirect: '/requestData2',
          children: [{
            path: '/requestData2',
            name: '接口PageSize不一致表单',
            component: '/requestData2/index',
            title: '接口PageSize不一致的表单', icon: 'dashboard'
          }]
        },

        {
          path: '/customColumn',
          component: 'true',
          redirect: '/customColumn',
          children: [{
            path: '/customColumn',
            name: '自定义列',
            component: '/customColumn/index',
            title: '自定义列', icon: 'dashboard'
          }]
        },

        {
          path: '/columnJudgment',
          component: 'true',
          redirect: '/columnJudgment',
          children: [{
            path: '/columnJudgment',
            name: '列的判断',
            component: '/columnJudgment/index',
            title: '根据字段隐藏或显示列', icon: 'dashboard'
          }]
        },

        {
          path: '/setListTable',
          component: 'true',
          redirect: '/setListTable',
          children: [{
            path: '/setListTable',
            name: '设置和获取list',
            component: '/setListTable/index',
            title: '设置和获取list', icon: 'dashboard'
          }]
        },

        {
          path: '/complexData',
          component: 'true',
          redirect: '/complexData',
          children: [{
            path: '/complexData',
            name: '复杂自定义表单',
            component: '/complexData/index',
            title: '复杂自定义表单', icon: 'dashboard'
          }]
        },

        {
          path: '/radioData',
          component: 'true',
          redirect: '/radioData',
          children: [{
            path: '/radioData',
            name: '单选表单',
            component: '/radioData/index',
            title: '单选表单', icon: 'dashboard'
          }]
        },

        {
          path: '/checkData',
          component: 'true',
          redirect: '/checkData',
          children: [{
            path: '/checkData',
            name: '多选列表更新不清空已选',
            component: '/checkData/index',
            title: '多选列表更新不清空已选', icon: 'dashboard'
          }]
        },

        {
          path: '/checkData1',
          component: 'true',
          redirect: '/checkData1',
          children: [{
            path: '/checkData1',
            name: '多选列表更新清空已选',
            component: '/checkData1/index',
            title: '多选列表更新清空已选', icon: 'dashboard'
          }]
        },

        {
          path: '/resetMyPages',
          component: 'true',
          redirect: '/resetMyPages',
          children: [{
            path: '/resetMyPages',
            name: '重置myPages',
            component: '/resetMyPages/index',
            title: '重置myPages', icon: 'dashboard'
          }]
        },

        {
          path: '/autoSearchData',
          component: 'true',
          redirect: '/autoSearchData',
          children: [{
            path: '/autoSearchData',
            name: 'myPages变了自动搜索列表',
            component: '/autoSearchData/index',
            title: 'myPages变了自动搜索列表', icon: 'dashboard'
          }]
        },

        {
          path: '/maxheightData',
          component: 'true',
          redirect: '/maxheightData',
          children: [{
            path: '/maxheightData',
            name: '流动高度列表',
            component: '/maxheightData/index',
            title: '流动高度列表', icon: 'dashboard'
          }]
        },

        {
          path: '/thetreeData',
          component: 'true',
          redirect: '/thetreeData',
          children: [{
            path: '/thetreeData',
            name: '树形列表分页的',
            component: '/thetreeData/index',
            title: '树形列表分页的', icon: 'dashboard'
          }]
        },

        {
          path: '/thetreeData1',
          component: 'true',
          redirect: '/thetreeData1',
          children: [{
            path: '/thetreeData1',
            name: '树形列表不带分页的',
            component: '/thetreeData1/index',
            title: '树形列表不带分页的', icon: 'dashboard'
          }]
        },

        {
          path: '/multiLevelHeader',
          component: 'true',
          redirect: '/multiLevelHeader',
          children: [{
            path: '/multiLevelHeader',
            name: '多级表头',
            component: '/multiLevelHeader/index',
            title: '多级表头', icon: 'dashboard'
          }]
        },

        {
          path: '/dynamicallyMergeTables',
          component: 'true',
          redirect: '/dynamicallyMergeTables',
          children: [{
            path: '/dynamicallyMergeTables',
            name: '动态合并表格',
            component: '/dynamicallyMergeTables/index',
            title: '动态合并表格', icon: 'dashboard'
          }]
        },

        {
          path: '/manuallyMergeTables',
          component: 'true',
          redirect: '/manuallyMergeTables',
          children: [{
            path: '/manuallyMergeTables',
            name: '手动合并表格',
            component: '/manuallyMergeTables/index',
            title: '手动合并表格', icon: 'dashboard'
          }]
        },
        {
          path: '/totalAtTheEndOfTheTable',
          component: 'true',
          redirect: '/totalAtTheEndOfTheTable',
          children: [{
            path: '/totalAtTheEndOfTheTable',
            name: '表尾合计',
            component: '/totalAtTheEndOfTheTable/index',
            title: '表尾合计', icon: 'dashboard'
          }]
        },


        {
          path: '/dialogWyhElementChoose',
          component: 'true',
          redirect: '/dialogWyhElementChoose',
          title: '业务组件', icon: 'dashboard',
          children: [{
            path: '/dialogWyhElementChooseTabs',
            name: '列表选人(选项卡)',
            component: '/dialogWyhElementChooseTabs/index',
            title: '列表选人(选项卡)', icon: 'dashboard'
          },
          {
            path: '/dialogWyhElementChoose',
            name: '列表选人(多选)',
            component: '/dialogWyhElementChoose/index',
            title: '列表选人(多选)', icon: 'dashboard'
          },
          {
            path: '/dialogWyhElementChooseRadio',
            name: '列表选人(单选)',
            component: '/dialogWyhElementChooseRadio/index',
            title: '列表选人(单选)', icon: 'dashboard'
          },

          ]
        },

        {
          path: '/test',
          name: '测试界面1',
          //顶级菜单  模拟数据
          component: 'true',
          title: '测试界面1',
          affix: false,//固定在tags-view 
          hidden: false, //是否隐藏
          bigScreen: false,//大屏(隐藏顶部和侧边栏) 
          children: [
            {
              path: '/test/test1',
              name: 'home1',
              component: '/home1/index',
              title: '测试界面1-001',
              // children: [
              //   {
              //     path: '/test/test1/testA1',
              //     name: 'home1',
              //     component: '/home1/index',
              //     title: '测试界面A1-001',
              //   },
              //   {
              //     path: '/test/test1/testB2',
              //     name: 'home1',
              //     component: '/home1/index',
              //     title: '测试界面B1-001',
              //   }
              // ],
              affix: false,//固定在tags-view 
            }
          ]
        },
        {
          path: '/test/test2',
          name: 'home2',
          component: '/home2/index',
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
