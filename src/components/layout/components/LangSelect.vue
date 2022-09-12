<template>
  <div class="out-wrapper">
    <el-select v-model="langType" placeholder="" @change="onLangChange">
      <el-option v-for="item in langTypeList" :key="item.value" :label="item.name"
                 :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "LangSelect",
  data() {
    return {
      langType: "zh",
      langTypeList: [
        { "name": "中文", value: "zh" },
        { "name": "English", value: "en"}
      ]
    }
  },

  methods: {
    onLangChange(e) {
      this.langType = e
      this.$i18n.locale = this.langType
    }
  }
}
</script>

<style lang="scss" scoped>
.out-wrapper :deep(.el-input__inner) {
  border: none;
}
.out-wrapper :deep(.el-select) {
  width: 120px;
}
</style>
