<template>
  <div class="full-screen">
    <el-container class="full-screen">
      <el-header class="header">
        <nav-bar></nav-bar>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
  name: "LayOutView",
  components: { NavBar },
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

</style>
