const Mock = require('mockjs')

module.exports = [
  {
    url: '/getList1',
    type: 'post',
    response: (config) => {
      const { page, pageSize } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "mtime": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },

  {
    url: '/getList2',
    type: 'post',
    response: (config) => {
      const { page, pageSize } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "mtime": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          test1: {
            test12: {
              data: list
            },
            total: 1000,
          }
        }
      }
    }
  },

  {
    url: '/getList3',
    type: 'post',
    response: (config) => {
      const { page } = config.body
      const newPage = page.test.newPage;
      const limit = page.limit
      const list = []
      const index = newPage * limit
      for (let i = 0; i < limit; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "mtime": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getList4',
    type: 'get',
    response: (config) => {
      console.log(config.query)
      const { page, pageSize } = config.query
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "mtime": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },

  {
    url: '/getList5',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          name: "@cname",
          'type|1': "@boolean",
          "date": "@datetime",//随机生成日期时间
          "status|1-5": 5,
          'number|1-1000': 1000,
        })
      }

      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getList',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          name: index + i,
          'status|1': "@boolean",
          "mtime": "@datetime",//随机生成日期时间

          "type|1-5": 5,

          'unitPrice1|1-1000': 1000,
          'unitPrice2|1-1000': 1000,
          'unitPrice3|1-1000': 1000,
          'unitPrice4|1-1000': 1000,
          'unitPrice5|1-1000': 1000,
        })
      }

      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getThetree',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          id: index + i,
          name: "@cname",
          "type|1-5": 5,
          "mtime": "@datetime",//随机生成日期时间
          'status|1': "@boolean",
          img: Mock.Random.image('50x50'),
          children: [
            {
              "mtime": "@datetime",//随机生成日期时间
              id: Mock.Random.id(),
              name: "@cname",

              children: [
                {
                  "mtime": "@datetime",//随机生成日期时间
                  id: Mock.Random.id(),
                  name: "@cname",
                }
              ]
            }
          ]
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  }
]
