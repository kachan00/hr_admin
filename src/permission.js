// 权限拦截在路由跳转 导航守卫
// 不需要导出 main直接引入

import router from '@/router'
import store from '@/store' // 引入store实例 和组件中的this.$store是一回事
import nProgress from 'nprogress' // 引入进度条
import 'nprogress/nprogress.css' // 引入进度条样式

const whiteList = ['/login', '/404'] // 定义白名单
// 前置守卫
// next() 放过 next(false) 跳转终止 next(地址) 跳转到某个地址
router.beforeEach((to, from, next) => {
  nProgress.start() // 开启进度条
  if (store.getters.token) {
    // 如果有token
    if (to.path === '/login') {
      // 如果要访问的是登录页
      next('/') // 跳到主页
    } else {
      next()
    }
  } else {
    // 没有token的情况下
    if (whiteList.indexOf(to.path) > -1) {
      // 表示要去的地址在白名单内
      next()
    } else {
      // 不在白名单内 跳转到登录页
      next('/login')
    }
  }
  nProgress.done() // 手动切换地址时关闭进度条
})

// 后置守卫
router.afterEach(() => {
  nProgress.done() // 关闭进度条
})
