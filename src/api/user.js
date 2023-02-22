import request from '@/utils/request'

// 登录接口
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户资料接口
export function getUserInfo(token) {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

// 获取用户资料详情（头像）接口
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {

}
