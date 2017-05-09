import * as types from '../mutation.types'

const state = {
  userinfo: JSON.stringify(localStorage.getItem('userinfo') || {}),
  accessToken: ''
}

const actions = {
  setUserInfo ({commit}, userinfo) {
    commit(types.SET_USERINFO, userinfo)
  }
}

const mutations = {
  [types.SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  }
}

const getters = {
  logined (state) {
    return !!(state.userinfo)
  }
}

export default{
  state,
  actions,
  mutations,
  getters
}
