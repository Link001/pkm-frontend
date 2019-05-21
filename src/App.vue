<template>
  <div class="app">
    <AppSidebar class="app__sidebar"/>
    <router-view class="app__content"/>
  </div>
</template>

<script>
  import AppSidebar from "./components/AppSidebar";

  export default {
    name: 'App',
    components: {AppSidebar}
  }
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
  }

  .app__sidebar {
    flex-basis: 250px;
    flex-shrink: 0;
  }

  .app__content {
    flex-grow: 1;
  }
</style>
