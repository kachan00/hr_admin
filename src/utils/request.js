import axios from 'axios'
import { Message } from 'element-ui'
// create an axios instance
const service = axios.create({
  // 当执行 npm run dev => .env.development => /api
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(

)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 解析data
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  }, error => {
    Message.error(error.message) // 提示错误信息
    return Promise.reject(error) // 返回执行错误 进入catch
  })

export default service
