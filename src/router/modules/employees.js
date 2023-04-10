import Layout from '@/layout'
// 导出员工的路由规则
export default {
  // 路由规则
  path: '/employees', // 路由地址
  name: 'employees',
  component: Layout,
  children: [{
    path: '', // 二级path空的表示二级路由的默认路由
    component: () => import('@/views/employees'),
    // 路由元信息 其实就是存储数据的地方
    meta: {
      title: '员工管理', // 左侧导航读取了这里的title属性
      icon: 'people'
    }
  }, {
    path: 'detail/:id', // query传参  动态路由传参
    component: () => import('@/views/employees/detail'),
    hidden: true, // 不在左侧菜单显示
    meta: {
      title: '员工详情' // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
    }
  }, {
    path: 'print/:id', // 二级默认路由
    component: () => import('@/views/employees/print'), // 按需加载
    hidden: true,
    meta: {
      title: '打印', // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
      icon: 'people'
    }
  }]
}
