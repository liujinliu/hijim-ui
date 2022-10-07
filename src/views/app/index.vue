<template>
    <div>
        <div>
          <el-button class="btn-wrapper" type="primary" size="small"
                     @click="onAddNewClick">
            {{ $t("button.addNew") }}
          </el-button>
        </div>
        <div>
          <app-list :key="appListDomKey"></app-list>
        </div>
        <el-dialog :visible="addNewAddDiagVisible" :title="$t('diaglog.titleAddNewApp')"
                   show-close @close="addNewAddDiagVisible=false">
          <app-new @on-success="onAddSuccess"></app-new>
        </el-dialog>
    </div>
</template>
<script>
import AppList from './components/AppList'
import AppNew from './components/AppNew.vue'
export default {
    name: "AppListView",
    components: { AppList, AppNew },
    data() {
      return {
        appListDomKey: 0,
        addNewAddDiagVisible: false
      }
    },
    created() {},
    methods: {
      onAddNewClick() {
        this.addNewAddDiagVisible = true
      },

      onAddSuccess() {
        this.addNewAddDiagVisible = false
        this.appListDomKey += 1
      }
    }
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
  margin-bottom: 10px;
}
</style>
