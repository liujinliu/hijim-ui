<template>
    <div>
        <el-table :data="apps">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="name">
            <template slot="header">{{ $t("app.name") }}</template>
          </el-table-column>
          <el-table-column prop="version">
            <template slot="header">{{ $t("app.version") }}</template>
          </el-table-column>
          <el-table-column prop="author">
            <template slot="header">{{ $t("app.author") }}</template>
          </el-table-column>
          <el-table-column prop="createAt">
            <template slot="header">{{ $t("app.createAt") }}</template>
          </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: "AppListComponent",
    data() {
        return {
            apps: []
        }
    },
    created() {
      this.getAppList()
    },
    methods: {
      getAppList() {
        this.$api.app.getList().then(res => {
          this.apps = res.apps
        })
      }
    }
}
</script>
