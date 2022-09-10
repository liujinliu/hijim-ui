<template>
  <div id="app">
    <lay-out></lay-out>
  </div>
</template>

<script>
import LayOut from '@/views/layout'
export default {
  name: 'App',
  components: {
    LayOut
  }
}
</script>

<style>
body, html {
  margin: 0;
  height: 100%;
}
</style>
<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>

