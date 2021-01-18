module.exports = [
  // user login
  {
    url: '/getMenu',
    type: 'get',
    response: config => {
      const value = [
        {
          path: '/test',
          name: '测试界面',
          //顶级菜单  模拟数据
          component: 'true',
          title: '测试界面',
          affix: false,//固定在tags-view 
          hidden: false, //是否隐藏
          bigScreen: false,//大屏(隐藏顶部和侧边栏) 
          children: [
            {
              path: '/test/test1',
              name: 'home1',
              component: '/home1/index',
              title: '测试界面1',
              affix: false,//固定在tags-view 
            }
          ]
        }
      ]
      return {
        code: 20000,
        data: value
      }
    }
  },


]
