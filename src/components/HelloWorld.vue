<template>
  <div class="hello">
    <el-button @click="Ch">中文</el-button>
    <el-button @click="En">ENGLISTH</el-button>
    <h1>{{ $t("common.home") }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    Ch() {
      this.$i18n.locale = 'zh'
    },

    En() {
      this.$i18n.locale = 'en'
    }
  }
}
</script>
