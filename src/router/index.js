import Vue from 'vue'
import Router from 'vue-router'
// import store from '../vuex'
// import App from '../App.vue'
// import _ from 'lodash'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    // 组件懒加载，这样可防止组件太多时首屏打开慢的问题
    { path: '/user', component: resolve => require(['../components/user/User.vue'], resolve) },
    { path: '*', component: null }
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
