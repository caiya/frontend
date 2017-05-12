<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
            <div class="layout-nav-right">
                <Dropdown style="margin-left: 20px" placement="bottom-end" @on-click="logout" trigger="click">
                    <a href="javascript:void(0)">
                        <Icon type="navicon-round"></Icon>&nbsp;{{username}}
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item name="uppass"><h4>修改密码</h4></Dropdown-item>
                        <Dropdown-item name="logout"><h4>退出</h4></Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
        </Menu>
        <!--二级导航，暂时注销-->
        <!--<Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>-->
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'header',
  methods: {
    ...mapMutations(['LOGOUT']),
    logout (name) {
      if (name === 'logout') {
        this.LOGOUT()
        this.$Notice.success({
          desc: '已退出'
        })
      } else {
        this.$Notice.success({
          desc: '修改密码了'
        })
      }
    }
  },
  data () {
    return {
      username: typeof this.$store.getters.userinfo === 'string' ? JSON.parse(this.$store.getters.userinfo).loginname : this.$store.getters.userinfo.loginname
    }
  }
}
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 169px;
        height: 49px;
        background: #5b6270 url(../../assets/logo1.jpg) no-repeat;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 8px;
        left: 40px;
    }
    .layout-nav{
        width: 520px;
        margin: 0 auto;
    }
    .layout-nav-right{
        width: 120px;
        float: right;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
</style>
