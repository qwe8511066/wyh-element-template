import request from '@/utils/request'

export function getMenu() {
  return request({
    url: '/getMenu',
    method: 'get',

  })
}
