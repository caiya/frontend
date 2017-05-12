import Vue from 'vue'
import Router from 'vue-router'
// import store from '../vuex'

import User from '../components/user/User.vue'
// import App from '../App.vue'

// import _ from 'lodash'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/user', component: User },
    {path: '/role', component: null}
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook
  // if (!store.getters.logined) {

  // } else {
  //   next()
  // }
  next()
})
