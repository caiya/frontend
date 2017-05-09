import Vue from 'vue'
import Router from 'vue-router'

import _ from 'lodash'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: resolve => require(['../components/Login.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/Login.vue'], resolve)
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['../components/Hello.vue'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook
  if (to.path === '/login') {
    localStorage.removeItem('userinfo')
  }
  const user = JSON.parse(localStorage.getItem('userinfo'))
  if (_.isEmpty(user) && to.path !== '/login') {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})
