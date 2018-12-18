<template>
  <el-header class="app-header" heigth="30px">
    <el-col :span="6">
      <router-link to="/">Home</router-link>
    </el-col>
    <el-col :span="6">
      <router-link to="map">Map</router-link>
    </el-col>
    <el-col :span="6">
      <router-link to="upload">Upload</router-link>
    </el-col>
    <el-col :span="6" class="login-tab">
      <router-link to="login">Login</router-link>
    </el-col>
  </el-header>
</template>
<style lang="less" scoped>
.app-header {
  display: flex;
  justify-content: flex-start;
  .el-col {
    margin-left: 10px;
  }
  .login-tab {
    float: right;
  }
}
</style>