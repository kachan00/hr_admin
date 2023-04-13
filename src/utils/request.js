import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'
import { getTimeStamp } from '@/utils/auth'

const TimeOut = 3600 // 定义超时时间

// create an axios instance
const service = axios.create({
  // 当执行 npm run dev => .env.development => /api
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // config 是请求的配置信息
  // 注入token
  if (store.getters.token) {
    // 先检查token有没有超时
    if (IsCheckTimeOut()) {
      // 过期了 登出
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
}

)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 解析data
    const { success, data } = response.data
    if (success) {
      return data
    } else {
      // Message.error(message)
      // return Promise.reject(new Error(message))
    }
  }, error => {
    if (error.response && error.response.data && error.response.data.code === 10002) {
      // 当等于10002的时候 表示 后端传来token超时了
      store.dispatch('user/logout')
      router.push('/login')
    } else {
      Message.error(error.message) // 提示错误信息
    }
    return Promise.reject(error) // 返回执行错误 进入catch
  })

// 定义检查token是否超时方法
// 超时逻辑 （当前时间 - 缓存时间） 是否大于 时间差
function IsCheckTimeOut() {
  var currentTime = Date.now() // 当前时间戳
  var timeStamp = getTimeStamp()
  return (currentTime - timeStamp) / 1000 > TimeOut
}
export default service
