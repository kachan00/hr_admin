import Layout from '@/layout'
// 导出组织架构的路由规则
export default {
  // 路由规则
  path: '/departments', // 路由地址
  name: 'departments',
  component: Layout,
  children: [{
    path: '', // 二级path空的表示二级路由的默认路由
    component: () => import('@/views/departments'),
    // 路由元信息 其实就是存储数据的地方
    meta: {
      title: '组织架构', // 左侧导航读取了这里的title属性
      icon: 'tree'
    }
  }]
}
