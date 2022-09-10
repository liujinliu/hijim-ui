<template>
    <div class="full-screen">
        <el-container class="full-screen">
            <el-header class="header">HEADER</el-header>
            <el-main class="main">MAIN</el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'LayOut'
}
</script>
<style lang="scss" scoped>
@import "@/styles/variables";
.full-screen {
    height: 100%;
    background-color: $bg-color;
}

.header {
    background-color: $header-color;
}

.main {
    background-color: $body-color;
    height: 100%;
}
</style>
