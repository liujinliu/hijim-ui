<template>
  <div class="nav-bar-wrapper">
    <el-menu :default-active="active" mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="work">
        <template slot="title">工作台</template>
        <el-menu-item index="/work/units">用例管理</el-menu-item>
        <el-menu-item index="/work/suits">套件管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="/market">应用市场</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
        active: '/',
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-bar-wrapper {
  width: 30%;
}

.nav-bar-wrapper /deep/ .el-menu.el-menu--horizontal {
    border-bottom: none;
}

.nav-bar-wrapper /deep/ .el-menu-item {
  font-size: xx-small;
}

.nav-bar-wrapper /deep/ .el-submenu__title {
  font-size: xx-small;
}

</style>