<template>
  <el-container class="base-container">
    <app-header></app-header>
    <el-container>
      <app-main></app-main>
    </el-container>
  </el-container>
</template>
<script>
import appHeader from './components/app-header';
import appMain from './components/app-main';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    appHeader,
    appMain,
  },
})
export default class Layout extends Vue {}
</script>
<style lang="less" scoped>
.base-container {
  width: 100%;
  min-height: 100%;
  padding: 10px;
}
</style>



