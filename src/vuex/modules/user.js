import * as types from '../mutation.types'
import * as http from '../../api/http'

const state = {
  userinfo: JSON.stringify(localStorage.getItem('userinfo') || {})
}

const actions = {
  setUserInfo ({ commit }, userinfo) {
    localStorage.setItem('userinfo', userinfo)
    commit(types.SET_USERINFO, userinfo)
  },
  login ({dispatch, commit, getters}, plyload) {
    return http.get('/user/caiya', {})
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

export default {
  state,
  actions,
  mutations,
  getters
}
