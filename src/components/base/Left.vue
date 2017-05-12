<template>
  <div class="layout-content">
    <Row>
        <i-col span="3">
            <Menu active-name="1-2" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        导航一
                    </template>
                    <Menu-item name="1-1">选项 1</Menu-item>
                    <Menu-item name="1-2">选项 2</Menu-item>
                    <Menu-item name="1-3">选项 3</Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        导航二
                    </template>
                    <Menu-item name="2-1">选项 1</Menu-item>
                    <Menu-item name="2-2">选项 2</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        导航三
                    </template>
                    <Menu-item name="3-1">选项 1</Menu-item>
                    <Menu-item name="3-2">选项 2</Menu-item>
                </Submenu>
            </Menu>
        </i-col>
        <i-col span="19">
            <div class="layout-content-main">内容区域</div>
        </i-col>
    </Row>
  </div>
</template>

<script>
export default {
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
  .layout-content-main{
      padding: 10px;
  }
</style>
