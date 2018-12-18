<template>
  <div class="login">
    <p>login</p>
    <el-input prefix-icon="el-icon-message" :model="loginForm.tel"></el-input>
    <el-input prefix-icon="el-icon-message" type="password" :model="loginForm.psw"></el-input>
    <el-button >登陆</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  loginForm = {
    tel: '',
    psw: '',
  };
  // loginClick() {
  //   // this.$store
  //   //   .dispatch('LoginByUsername', this.loginForm)
  //   //   .then(() => {
  //   //     this.$router.push({ path: '/' }); // 登录成功之后重定向到首页
  //   //   })
  //   //   .catch((err) => {
  //   //     this.$message.error(err); // 登录失败提示错误
  //   //   });
  // }
}
</script>
<style lang="less" scoped>
.login {
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .el-input {
    margin-bottom: 10px;
  }
}
</style>
