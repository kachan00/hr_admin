import Layout from '@/layout'
// 导出工资的路由规则
export default {
  // 路由规则
  path: '/salarys', // 路由地址
  name: 'salarys',
  component: Layout,
  children: [{
    path: '', // 二级path空的表示二级路由的默认路由
    component: () => import('@/views/salarys'),
    // 路由元信息 其实就是存储数据的地方
    meta: {
      title: '工资', // 左侧导航读取了这里的title属性
      icon: 'money'
    }
  }]
}
