<template>
  <div class="nav-bar-wrapper">
    <el-menu :default-active="active" mode="horizontal" router>
      <el-menu-item index="/">{{ $t("nav.home")}}</el-menu-item>
      <el-submenu index="work">
        <template slot="title">{{ $t("nav.work.name")}}</template>
        <el-menu-item index="/work/units">{{ $t("nav.work.units") }}</el-menu-item>
        <el-menu-item index="/work/suits">{{ $t("nav.work.suits") }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/apps">{{ $t("nav.app") }}</el-menu-item>
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

.nav-bar-wrapper :deep(.el-menu.el-menu--horizontal) {
    border-bottom: none;
}

.nav-bar-wrapper :deep(.el-menu-item) {
  font-size: xx-small;
}

.nav-bar-wrapper :deep(.el-submenu__title) {
  font-size: xx-small;
}

.nav-bar-wrapper :deep(.el-menu::after) {
  clear: right;
}

</style>