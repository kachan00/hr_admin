import Layout from '@/layout'
// 导出考勤的路由规则
export default {
  // 路由规则
  path: '/attendances', // 路由地址
  name: 'attendances',
  component: Layout,
  children: [{
    path: '', // 二级path空的表示二级路由的默认路由
    component: () => import('@/views/attendances'),
    // 路由元信息 其实就是存储数据的地方
    meta: {
      title: '考勤', // 左侧导航读取了这里的title属性
      icon: 'skill'
    }
  }]
}
