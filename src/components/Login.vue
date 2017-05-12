<template>
  <div class="main">
    <div class="ms-login">
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <Form-item prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
      </Form-item>
      <Form-item prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
      </Form-item>
      <Form-item align="center">
          <Button type="success" @click="handleSubmit('formInline')" long>登录</Button>
      </Form-item>
    </Form>
  </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 5, message: '密码长度不能小于5位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login().then(res => {
            if (res.data.data) {
              this.$Notice.success({
                desc: '登录成功'
              })
              this.$store.dispatch('setUserInfo', JSON.stringify(res.data.data))
            } else {
              this.$Notice.error({
                desc: '用户名或密码错误'
              })
            }
          }).catch(err => {
            console.log(err)
            this.$Notice.error({
              desc: err.message
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .ms-login {
    width: 300px;  
    height: 200px;  
    padding: 20px;  
    position: absolute;
    top: 50%; left: 50%;
    margin-left: -160px; /* (width + padding)/2 */
    margin-top: -110px; /* (height + padding)/2 */
  }
  .main{
    width: 100%;  
    height: 100%;
    background: #213862 url(../assets/login.jpg) no-repeat fixed center;
  }
</style>
