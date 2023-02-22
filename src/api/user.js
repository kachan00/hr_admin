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
export function getUsesrInfo(token) {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function logout() {

}
