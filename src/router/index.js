import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'

// import _ from 'lodash'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [

  ]
})

router.beforeEach((to, from, next) => {
  console.log('###################### store.getters.logined ##################', store.getters.logined)
  next()
  // to and from are Route Object,next() must be called to resolve the hook
  // if (!store.getters.logined) {

  // } else {
  //   next()
  // }
})
