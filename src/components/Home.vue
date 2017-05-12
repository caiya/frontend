<template>
  <div class="layout">
    <Top></Top>
    <div class="layout-content">
    <Row>
        <i-col span="3">
            <Menu active-name="1-1" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        用户模块
                    </template>
                    <Menu-item name="1-1">
                        <router-link to="/user">
                            用户管理
                        </router-link>
                    </Menu-item>
                    <Menu-item name="1-2">
                        <router-link to="/role">
                            角色管理
                        </router-link>
                    </Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        报警管理
                    </template>
                    <Menu-item name="2-1">报警端子</Menu-item>
                    <Menu-item name="2-2">报警管理</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        系统设置
                    </template>
                    <Menu-item name="3-1">服务器管理</Menu-item>
                    <Menu-item name="3-2">服务管理</Menu-item>
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
        </i-col>
    </Row>
  </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Top from './base/Header.vue'
import Bottom from './base/Footer.vue'
export default {
  components: {
    Top, Bottom
  }
}
</script>

<style scoped>
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 300px;
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
