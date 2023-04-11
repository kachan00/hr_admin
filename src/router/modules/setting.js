import Layout from '@/layout'
// 导出公司设置的路由规则
export default {
  // 路由规则
  path: '/setting', // 路由地址
  name: 'settings',
  component: Layout,
  children: [{
    path: '', // 二级path空的表示二级路由的默认路由
    component: () => import('@/views/setting'),
    // 路由元信息 其实就是存储数据的地方
    meta: {
      title: '公司设置', // 左侧导航读取了这里的title属性
      icon: 'setting'
    }
  }]
}
