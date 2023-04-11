import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { resetRouter } from '@/router'
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
const state = {
  token: getToken(),
  userInfo: {}
}
// 修改状态
const mutations = {
  // 设置token
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  // 删除token缓存
  removeTokens(state) {
    state.token = null
    removeToken()
  },
  // 设置获取用户信息
  setUserInfo(state, result) {
    state.userInfo = result // 响应式
  },
  // 删除用户信息
  removeUseInfo(state) {
    state.userInfo = {}
  }
}
// 执行异步
const actions = {
  async login(context, data) {
    // 调用api接口
    const result = await login(data) // 拿到token
    context.commit('setToken', result) // 设置token
    // 登录成功设置时间戳
    setTimeStamp()
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    // 获取用户详情(头像)
    const beseInfo = await getUserDetailById(result.userId)
    // 合并用户所有信息 并提交到mutations
    context.commit('setUserInfo', { ...result, ...beseInfo }) // 提交到mutations
    return result
  },
  // 登出操作
  logout(context) {
    // 删除token
    context.commit('removeTokens')
    // 删除用户资料
    context.commit('removeUseInfo')
    // 重置路由
    resetRouter()
    // 还有一步  vuex中的数据是不是还在
    // 要清空permission模块下的state数据
    // 父模块 调用 子模块的action
    context.commit('permission/setRoutes', [], { root: true })
    // 子模块调用子模块的action 可以 将 commit的第三个参数 设置成  { root: true } 就表示当前的context不是子模块了 而是父模块
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
