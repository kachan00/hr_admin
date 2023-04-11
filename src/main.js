import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import * as directives from '@/directives' // 自定义指令
import '@/icons' // icon
import '@/permission' // permission control
import * as filters from '@/filters' // 引入工具类
import Component from '@/components'
import checkpermission from '@/mixin/checkPermission'

Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
// 注册自定义指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Object.keys(filters).forEach(key => {
  // 注册过滤器
  Vue.filter(key, filters[key])
})
Vue.use(Component) // 注册自己的插件

// 全局混入检查对象
Vue.mixin(checkpermission) // 表示所有的组件都拥有检查的方法

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
