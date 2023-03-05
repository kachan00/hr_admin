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
  }]
}
