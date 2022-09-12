<template>
  <div class="full-screen">
    <el-container class="full-screen">
      <el-header class="header">
        <nav-bar></nav-bar>
        <lang-select class="lang-select-wrapper"></lang-select>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavBar from "./components/NavBar"
import LangSelect from "./components/LangSelect.vue"
export default {
  name: "LayOutView",
  components: { NavBar,  LangSelect },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables";
.full-screen {
  height: 100%;
  // background-color: $bg-color;
}

// .header {
//   background-color: $header-color;
// }

.main {
  background-color: $body-color;
  height: 100%;
}

.lang-select-wrapper {
  float: right;
  margin-top: 10px;
  margin-right: 10%;
}

</style>
