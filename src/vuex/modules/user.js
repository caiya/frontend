import * as types from '../mutation.types'
import * as http from '../../api/http'

// import _ from 'lodash'

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
  },
  [types.LOGOUT] (state) {
    localStorage.setItem('userinfo', '')
    state.userinfo = ''
  }
}

const getters = {
  logined (state) {
    return state.userinfo !== '' && state.userinfo !== '{}'
  },
  userinfo (state) {
    if (state.userinfo !== '' && state.userinfo !== '{}' && typeof state.userinfo === 'string') {
      return JSON.parse(state.userinfo)
    } else if (typeof state.userinfo === 'object') {
      return state.userinfo
    }
    return null
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
