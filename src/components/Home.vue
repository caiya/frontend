<template>
  <div class="layout">
    <Top></Top>
    <div class="layout-content">
        <Row>
            <i-col span="3">
                <Menu active-name="/user" @on-select="onSelect" width="auto" :open-names="['user']" theme="light">
                    <Submenu name="user">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            用户模块
                        </template>
                        <Menu-item name="/user">
                            用户管理
                        </Menu-item>
                        <Menu-item name="/role">
                            角色管理
                        </Menu-item>
                    </Submenu>
                    <Submenu name="alarm">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            报警管理
                        </template>
                        <Menu-item name="2-1">
                            报警端子
                        </Menu-item>
                        <Menu-item name="2-2">
                            报警管理
                        </Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            系统设置
                        </template>
                        <Menu-item name="3-1">
                            服务器管理
                        </Menu-item>
                        <Menu-item name="3-2">
                            服务管理
                        </Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <!--<div class="layout-header"></div>-->
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">用户模块</Breadcrumb-item>
                        <Breadcrumb-item>用户管理</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <!--这里放置各种路由-->
                <router-view></router-view>
                <Bottom></Bottom>
            </i-col>
        </Row>
    </div>
  </div>
</template>
<script>
import Top from './base/Header.vue'
import Bottom from './base/Footer.vue'
export default {
  components: {
    Top, Bottom
  },
  methods: {
    onSelect (menuName) {
      this.$router.push(menuName)
    },
    init () {
      this.$router.push('/user')      // 默认打开user界面的数据
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 400px;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
  }
  /*.layout-header{
      height: 0;
      background: #fff;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }*/
  .layout-content-main{
      padding: 10px;
  }
</style>
