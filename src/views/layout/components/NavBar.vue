<template>
  <div class="out-wraper">
    <el-menu :default-active="active" mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="work">
        <template slot="title">工作台</template>
        <el-menu-item index="/work/apps">应用</el-menu-item>
        <el-menu-item index="/work/suits">测试集</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
        active: "/",
    }
  },
};
</script>