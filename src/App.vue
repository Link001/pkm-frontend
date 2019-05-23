<template>
  <transition name="router" mode="out-in">
    <router-view class="app"/>
  </transition>
</template>

<script>
  export default { name: 'App' }
</script>

<style lang="scss" scoped>
  .app {
    height: 100%;
  }
</style>
