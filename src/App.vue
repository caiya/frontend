<template>
  <div id="app">
    <keep-alive>
      <component :is="currentView">
        <!-- 组件在 vm.currentview 变化时改变！ -->
      </component>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './components/Login'
import Home from './components/Home'
export default {
  name: 'app',
  components: {
    Login, Home
  },
  computed: {
    ...mapGetters(['logined'])
  },
  watch: {
    logined (newValue) {
      this.setView()
    }
  },
  data () {
    return {
      currentView: 'Login'
    }
  },
  mounted () {
    this.setView()
  },
  methods: {
    setView () {
      this.currentView = this.logined ? 'Home' : 'Login'
    }
  }
}
</script>

<style>
@import "./assets/css/main.css"
</style>
